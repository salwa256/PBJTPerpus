# ═══════════════════════════════════════════════════════
# IMPORT
# ═══════════════════════════════════════════════════════

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from datetime import date, datetime

import psycopg2
from psycopg2.extras import RealDictCursor

# ═══════════════════════════════════════════════════════
# APP
# ═══════════════════════════════════════════════════════

app = FastAPI(
    title="Sistem Perpustakaan API"
)

# ═══════════════════════════════════════════════════════
# CORS
# ═══════════════════════════════════════════════════════

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

# ═══════════════════════════════════════════════════════
# DATABASE SUPABASE
# ═══════════════════════════════════════════════════════

DATABASE_URL = "postgresql://postgres.xlndpiygnorrgtupavmg:diajengsalwa@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

def get_db():

    return psycopg2.connect(
        DATABASE_URL,
        cursor_factory=RealDictCursor
    )

# ═══════════════════════════════════════════════════════
# MODELS
# ═══════════════════════════════════════════════════════

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

class MemberModel(BaseModel):
    member_code: str
    name: str
    nim: str
    major: str
    phone: str
    address: str

# ═══════════════════════════════════════════════════════
# LOGIN
# ═══════════════════════════════════════════════════════

@app.post("/login")
def login(data: LoginModel):

    db = get_db()
    cur = db.cursor()

    cur.execute("""
        SELECT *
        FROM users
        WHERE username=%s
        AND password=%s
    """, (
        data.username,
        data.password
    ))

    user = cur.fetchone()

    db.close()

    if not user:

        raise HTTPException(
            status_code=401,
            detail="Username atau password salah"
        )

    return {
        "user_id": user["id"],
        "username": user["username"],
        "role": user["role"]
    }

# ═══════════════════════════════════════════════════════
# BOOKS
# ═══════════════════════════════════════════════════════

@app.get("/books")
def get_books():

    db = get_db()
    cur = db.cursor()

    cur.execute("""
        SELECT *
        FROM books
        ORDER BY id
    """)

    books = cur.fetchall()

    db.close()

    return books

@app.get("/books/search")
def search_books(q: str = ""):

    db = get_db()
    cur = db.cursor()

    search = f"%{q}%"

    cur.execute("""
        SELECT *
        FROM books
        WHERE
            title ILIKE %s
            OR author ILIKE %s
            OR id ILIKE %s
        ORDER BY title
    """, (
        search,
        search,
        search
    ))

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
                %s,%s,%s,%s,'tersedia'
            )
        """, (
            book.id,
            book.title,
            book.author,
            book.category
        ))

        db.commit()

    except psycopg2.IntegrityError:

        db.rollback()

        db.close()

        raise HTTPException(
            status_code=400,
            detail="ID buku sudah ada"
        )

    db.close()

    return {
        "message":
        "Buku berhasil ditambahkan"
    }

# ═══════════════════════════════════════════════════════
# MEMBERS
# ═══════════════════════════════════════════════════════

@app.get("/members")
def get_members():

    db = get_db()
    cur = db.cursor()

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
                %s,%s,%s,%s,%s,%s
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

    except psycopg2.IntegrityError:

        db.rollback()

        db.close()

        raise HTTPException(
            status_code=400,
            detail="Kode anggota sudah ada"
        )

    db.close()

    return {
        "message":
        "Anggota berhasil ditambahkan"
    }

# ═══════════════════════════════════════════════════════
# LOANS
# ═══════════════════════════════════════════════════════

@app.get("/loans")
def get_loans():

    db = get_db()
    cur = db.cursor()

    cur.execute("""
        SELECT
            l.*,
            b.title AS book_title,
            b.author AS book_author
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

@app.post("/loans/borrow")
def borrow_book(data: BorrowModel):

    db = get_db()
    cur = db.cursor()

    # cek member

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
            detail="Anggota tidak ditemukan"
        )

    # cek buku

    cur.execute("""
        SELECT *
        FROM books
        WHERE id=%s
    """, (data.book_id,))

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
            detail="Buku sedang dipinjam"
        )

    today = date.today().isoformat()

    # insert loan

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
            %s,%s,%s,%s,%s,%s,%s,%s
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
        f"{book['title']} berhasil dipinjam"
    }

@app.post("/loans/return")
def return_book(data: ReturnModel):

    db = get_db()
    cur = db.cursor()

    cur.execute("""
        SELECT *
        FROM loans
        WHERE
            book_id=%s
            AND status IN ('dipinjam','terlambat')
        ORDER BY borrow_date DESC
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

    cur.execute("""
        UPDATE books
        SET status='tersedia'
        WHERE id=%s
    """, (data.book_id,))

    db.commit()

    db.close()

    return {
        "message":
        "Buku berhasil dikembalikan"
    }

# ═══════════════════════════════════════════════════════
# RUN
# ═══════════════════════════════════════════════════════

if __name__ == "__main__":

    import uvicorn

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000,
        reload=True
    )