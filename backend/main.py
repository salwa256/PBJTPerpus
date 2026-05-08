from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector
from datetime import date, datetime
import httpx
import os

app = FastAPI(title="Sistem Perpustakaan API")

# ══════════════════════════════════════════════
# CORS
# ══════════════════════════════════════════════

origins = [
    "http://127.0.0.1:8000",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ══════════════════════════════════════════════
# DATABASE
# ══════════════════════════════════════════════

def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="perpuspbjt"
    )

# ══════════════════════════════════════════════
# MODELS
# ══════════════════════════════════════════════

class LoginModel(BaseModel):
    username: str
    password: str


class BookModel(BaseModel):
    id: str
    title: str
    author: str
    category: str


class BorrowModel(BaseModel):
    user_id: int
    book_id: str
    borrower_name: str
    member_id: str
    phone: str
    due_date: str


class ReturnModel(BaseModel):
    book_id: str


class ScanModel(BaseModel):
    image_base64: str

class MemberModel(BaseModel):
    member_code:str
    name: str
    nim:str
    major:str
    phone:str
    address:str

# ══════════════════════════════════════════════
# AUTH
# ══════════════════════════════════════════════

@app.post("/login")
def login(data: LoginModel):

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute(
        "SELECT * FROM users WHERE username=%s AND password=%s",
        (data.username, data.password)
    )

    user = cur.fetchone()

    db.close()

    if user:
        return {
            "user_id": user["id"],
            "username": user["username"],
            "role": user.get("role", "petugas")
        }

    raise HTTPException(
        status_code=401,
        detail="Username atau password salah"
    )


# ══════════════════════════════════════════════
# BOOKS
# ══════════════════════════════════════════════

@app.get("/books")
def get_books():

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute("""
        SELECT *
        FROM books
        ORDER BY id
    """)

    books = cur.fetchall()

    db.close()

    return books


@app.get("/books/available")
def get_available_books():

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute("""
        SELECT *
        FROM books
        WHERE status='tersedia'
        ORDER BY title
    """)

    books = cur.fetchall()

    db.close()

    return books


@app.get("/books/search")
def search_books(q: str = ""):

    db = get_db()
    cur = db.cursor(dictionary=True)

    like = f"%{q}%"

    cur.execute("""
        SELECT *
        FROM books
        WHERE title LIKE %s
        OR author LIKE %s
        OR id LIKE %s
    """, (like, like, like))

    books = cur.fetchall()

    db.close()

    return books


@app.post("/books")
def add_book(book: BookModel):

    db = get_db()
    cur = db.cursor()

    try:

        cur.execute("""
            INSERT INTO books (
                id,
                title,
                author,
                category,
                status
            )
            VALUES (
                %s,
                %s,
                %s,
                %s,
                'tersedia'
            )
        """, (
            book.id,
            book.title,
            book.author,
            book.category
        ))

        db.commit()

    except mysql.connector.IntegrityError:

        db.close()

        raise HTTPException(
            status_code=400,
            detail="ID buku sudah ada"
        )

    db.close()

    return {
        "message":
        f"Buku '{book.title}' berhasil ditambahkan"
    }


@app.delete("/books/{book_id}")
def delete_book(book_id: str):

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute(
        "SELECT status FROM books WHERE id=%s",
        (book_id,)
    )

    book = cur.fetchone()

    if not book:
        db.close()

        raise HTTPException(
            status_code=404,
            detail="Buku tidak ditemukan"
        )

    if book["status"] == "dipinjam":
        db.close()

        raise HTTPException(
            status_code=400,
            detail="Tidak bisa hapus buku yang sedang dipinjam"
        )

    cur.execute(
        "DELETE FROM books WHERE id=%s",
        (book_id,)
    )

    db.commit()

    db.close()

    return {
        "message": "Buku berhasil dihapus"
    }


# ══════════════════════════════════════════════
# LOANS
# ══════════════════════════════════════════════

@app.get("/loans")
def get_loans():

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute("""
        SELECT
            l.*,
            b.title as book_title,
            b.author as book_author
        FROM loans l
        JOIN books b
        ON l.book_id = b.id
        ORDER BY l.borrow_date DESC
    """)

    loans = cur.fetchall()

    db.close()

    for loan in loans:
        for k, v in loan.items():
            if isinstance(v, (date, datetime)):
                loan[k] = str(v)

    return loans


@app.get("/loans/active")
def get_active_loans():

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute("""
        SELECT
            l.*,
            b.title as book_title,
            b.author as book_author
        FROM loans l
        JOIN books b
        ON l.book_id = b.id
        WHERE l.status IN ('dipinjam','terlambat')
        ORDER BY l.due_date ASC
    """)

    loans = cur.fetchall()

    db.close()

    for loan in loans:
        for k, v in loan.items():
            if isinstance(v, (date, datetime)):
                loan[k] = str(v)

    return loans


@app.post("/loans/borrow")
def borrow_book(data: BorrowModel):

    db = get_db()
    cur = db.cursor(dictionary=True)

    # cek anggota
    print(data.member_id)
    cur.execute("""
            SELECT *
            FROM members
            WHERE member_code=%s
        """, (data.member_id,))

    member = cur.fetchone()

    if not member:

            db.close()

            raise HTTPException(
        status_code=400,
        detail=
        "Mahasiswa belum terdaftar sebagai anggota perpustakaan"
    )

    # cek buku
    cur.execute(
        "SELECT * FROM books WHERE id=%s",
        (data.book_id,)
    )

    book = cur.fetchone()

    if not book:
        db.close()

        raise HTTPException(
            status_code=404,
            detail="Buku tidak ditemukan"
        )

    if book["status"] != "tersedia":
        db.close()

        raise HTTPException(
            status_code=400,
            detail="Buku sedang tidak tersedia"
        )

    today = date.today().isoformat()

    # insert peminjaman
    cur.execute("""
        INSERT INTO loans (
            book_id,
            user_id,
            borrower_name,
            member_id,
            phone,
            borrow_date,
            due_date,
            status
        )
        VALUES (
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s,
            %s
        )
    """, (
        data.book_id,
        data.user_id,
        data.borrower_name,
        data.member_id,
        data.phone,
        today,
        data.due_date,
        "dipinjam"
    ))

    # update status buku
    cur.execute("""
        UPDATE books
        SET status='dipinjam'
        WHERE id=%s
    """, (data.book_id,))

    db.commit()

    db.close()

    return {
        "message":
        f"Buku '{book['title']}' berhasil dipinjam oleh {data.borrower_name}"
    }


@app.post("/loans/return")
def return_book(data: ReturnModel):

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute("""
        SELECT
            l.*,
            b.title as book_title
        FROM loans l
        JOIN books b
        ON l.book_id = b.id
        WHERE l.book_id=%s
        AND l.status IN ('dipinjam','terlambat')
        ORDER BY l.borrow_date DESC
        LIMIT 1
    """, (data.book_id,))

    loan = cur.fetchone()

    if not loan:
        db.close()

        raise HTTPException(
            status_code=404,
            detail="Tidak ada peminjaman aktif"
        )

    today = date.today().isoformat()

    cur.execute("""
        UPDATE loans
        SET
            status='dikembalikan',
            return_date=%s
        WHERE id=%s
    """, (
        today,
        loan["id"]
    ))

    # update status buku
    cur.execute("""
        UPDATE books
        SET status='tersedia'
        WHERE id=%s
    """, (data.book_id,))

    db.commit()

    db.close()

    for k, v in loan.items():
        if isinstance(v, (date, datetime)):
            loan[k] = str(v)

    return {
        "message":
        f"Pengembalian '{loan['book_title']}' berhasil",
        "loan": loan
    }


# ══════════════════════════════════════════════
# STATS
# ══════════════════════════════════════════════

@app.get("/stats")
def get_stats():

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute("""
        SELECT COUNT(*) as total
        FROM books
    """)

    total = cur.fetchone()["total"]

    cur.execute("""
        SELECT COUNT(*) as c
        FROM books
        WHERE status='dipinjam'
    """)

    borrowed = cur.fetchone()["c"]

    cur.execute("""
        SELECT COUNT(*) as c
        FROM books
        WHERE status='tersedia'
    """)

    available = cur.fetchone()["c"]

    # update status terlambat
    cur.execute("""
        UPDATE loans
        SET status='terlambat'
        WHERE due_date < CURDATE()
        AND status='dipinjam'
    """)

    db.commit()

    cur.execute("""
        SELECT COUNT(*) as c
        FROM loans
        WHERE status='terlambat'
    """)

    overdue = cur.fetchone()["c"]

    db.close()

    return {
        "total": total,
        "borrowed": borrowed,
        "available": available,
        "overdue": overdue
    }


# ══════════════════════════════════════════════
# USERS
# ══════════════════════════════════════════════

@app.get("/users")
def get_users():

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute("""
        SELECT
            id,
            username,
            role
        FROM users
    """)

    users = cur.fetchall()

    db.close()

    return users

# ══════════════════════════════════════════════
# MEMBERS
# ══════════════════════════════════════════════

@app.get("/members")
def get_members():

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute("""
        SELECT *
        FROM members
        ORDER BY id DESC
    """)

    members = cur.fetchall()

    db.close()

    return members


@app.post("/members")
def add_member(data: MemberModel):

    db = get_db()
    cur = db.cursor()

    try:

        cur.execute("""
            INSERT INTO members (
                member_code,
                name,
                nim,
                major,
                phone,
                address
            )
            VALUES (
                %s,
                %s,
                %s,
                %s,
                %s,
                %s
            )
        """, (
            data.member_code,
            data.name,
            data.nim,
            data.major,
            data.phone,
            data.address
        ))

        db.commit()

    except mysql.connector.IntegrityError:

        db.close()

        raise HTTPException(
            status_code=400,
            detail="Kode anggota sudah ada"
        )

    db.close()

    return {
        "message":
        f"Anggota '{data.name}' berhasil ditambahkan"
    }

@app.get("/members/search")
def search_members(q: str = ""):

    db = get_db()

    cur = db.cursor(
        dictionary=True
    )

    like = f"%{q}%"

    cur.execute("""
        SELECT *
        FROM members
        WHERE
            name LIKE %s
            OR nim LIKE %s
            OR member_code LIKE %s
    """, (
        like,
        like,
        like
    ))

    data = cur.fetchall()

    db.close()

    return data
# ══════════════════════════════════════════════
# RUN SERVER
# ══════════════════════════════════════════════

if __name__ == "__main__":

    import uvicorn

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )