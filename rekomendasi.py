import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import mysql.connector

def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="perpuspbjt"
    )

def recommend_similar_books(book_id):

    db = get_db()

    query = """
    SELECT member_id, book_id
    FROM loans
    """

    df = pd.read_sql(query, db)

    db.close()

    if df.empty:
        return []

    # MATRIX MEMBER-BOOK
    matrix = pd.crosstab(
        df["member_id"],
        df["book_id"]
    )

    # Kalau buku belum ada
    if book_id not in matrix.columns:
        return []

    # Ubah matrix supaya fokus ke buku
    book_matrix = matrix.T

    # Similarity antar buku
    similarity = cosine_similarity(book_matrix)

    similarity_df = pd.DataFrame(
        similarity,
        index=book_matrix.index,
        columns=book_matrix.index
    )

    # Cari similarity buku
    similar_scores = similarity_df[book_id]

    # Urutkan
    similar_books = similar_scores.sort_values(ascending=False)

    # Ambil selain dirinya sendiri
    similar_books = similar_books.drop(book_id)

    return similar_books.head(5).index.tolist()