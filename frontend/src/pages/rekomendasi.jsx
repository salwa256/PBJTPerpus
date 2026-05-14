import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Rekomendasi() {

  const navigate = useNavigate();

  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // API LOCAL
  const API = "http://localhost:8000";

  // STYLE
  const styles = `
    body {
      margin: 0;
      padding: 0;
      font-family: 'Plus Jakarta Sans',
            sans-serif;
      background: #f3f3f3;
    }

    .page {
      min-height: 100vh;
      padding: 60px 80px;
      background: #f3f3f3;
    }

    .container {
      width: 100%;
    }

    .filter {
      display: flex;
      flex-direction: column;
      gap: 25px;
      width: 100%;
    }

    .filter select {
      width: 100%;
      height: 52px;
      border: none;
      border-radius: 30px;
      padding: 0 20px;
      font-size: 15px;
      background: #d9d9d9;
      outline: none;
      color: #555;
    }

    .filter button {
      align-self: flex-end;
      width: 150px;
      height: 48px;
      border: none;
      border-radius: 30px;
      background: #2f35d7;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }

    .filter button:hover {
      transform: scale(1.03);
    }

    .book-list {
      margin-top: 80px;
      padding: 0;
    }

    .empty-state {
      font-size: 20px;
      line-height: 1.8;
      color: #222;
    }

    .book-card {
      list-style: none;
      background: white;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 20px;
      display: flex;
      gap: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }

    .book-cover {
      width: 120px;
      border-radius: 12px;
    }

    .book-info h3 {
      margin-bottom: 10px;
    }

    .loading {
      font-size: 18px;
      color: #333;
    }

    .add-book-wrapper {
      position: fixed;
      bottom: 30px;
      right: 30px;
    }

    .add-book-btn {
      width: 60px;
      height: 60px;
      border: none;
      border-radius: 50%;
      background: #2f35d7;
      color: white;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }

    /* ANIMATION */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}



@keyframes floatUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -400px 0;
  }

  100% {
    background-position: 400px 0;
  }
}

/* PAGE ANIMATION */

.page {
  animation: fadeIn 0.8s ease;
}

/* HEADER */

h1 {
  animation: fadeIn 1s ease;
}

p {
  animation: fadeIn 1.2s ease;
}

/* SELECT */

.filter select {
  transition: all 0.3s ease;
}

.filter select:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.08);
}

.filter select:focus {
  box-shadow: 0 0 0 4px rgba(47,53,215,0.15);
}

/* BUTTON */

.filter button {
  animation: pulse 2s infinite;
}

.filter button:hover {
  transform: scale(1.06);
  box-shadow: 0 8px 20px rgba(47,53,215,0.3);
}

/* BOOK CARD */

.book-card {
  animation: floatUp 0.6s ease forwards;
  opacity: 0;
  transition: all 0.3s ease;
}

.book-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
}

/* IMAGE */

.book-cover {
  transition: transform 0.3s ease;
}

.book-card:hover .book-cover {
  transform: scale(1.05);
}

/* LOADING */

.loading {
  width: fit-content;
  padding: 14px 24px;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    #ececec 25%,
    #f5f5f5 50%,
    #ececec 75%
  );

  background-size: 400px 100%;
  animation: shimmer 1.5s infinite linear;
}

/* EMPTY STATE */

.empty-state {
  animation: fadeIn 1s ease;
}
  `;

  // SEARCH
  const handleSearch = async () => {

    if (!mood || !genre) {
      alert("Mood dan genre harus dipilih");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        `${API}/recommend`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            genre: genre,
            subgenre: mood,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }

      const data = await response.json();

      setBooks(
        data.recommendations || data
      );

    } catch (error) {

      console.error(error);

      alert("Server tidak merespon");

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <style>{styles}</style>

      <div className="App">

        <div className="page">

          <main className="container">

            {/* HEADER */}

            <div
              style={{
                marginBottom: 30,
              }}
            >

            </div>

            {/* FILTER */}

            <form
              className="filter"
              onSubmit={(e) => {

                e.preventDefault();

                handleSearch();

              }}
            >

              {/* MOOD */}

              <select
                value={mood}
                onChange={(e) =>
                  setMood(e.target.value)
                }
              >

                <option value="">
                  Apa yang kamu rasakan...
                </option>

                <option value="senang">
                  Senang
                </option>

                <option value="penasaran">
                  Penasaran
                </option>

                <option value="sedih">
                  Sedih
                </option>

                <option value="tenang">
                  Tenang
                </option>

                <option value="marah">
                  Marah
                </option>

              </select>

              {/* GENRE */}

              <select
                value={genre}
                onChange={(e) =>
                  setGenre(e.target.value)
                }
              >

                <option value="">
                  Pilih Genre
                </option>

                <option value="agama anak">
                  Agama Anak
                </option>

                <option value="agama umum">
                  Agama Umum
                </option>

                <option value="sains umum">
                  Sains Umum
                </option>

                <option value="sastra anak">
                  Sastra Anak
                </option>

                <option value="sastra umum">
                  Sastra Umum
                </option>

              </select>

              {/* BUTTON */}

              <button type="submit">

                {loading
                  ? "Loading..."
                  : "Cari"}

              </button>

            </form>

            {/* RESULT */}

            <ul className="book-list">

              {loading ? (

                <div className="loading">
                  🔍 Sedang mencari rekomendasi...
                </div>

              ) : books.length > 0 ? (

                books.map((book, index) => (

                  <li
                    key={index}
                    className="book-card"
                    styles={{
                      animationDelay: `${index * 0.15}s`
                    }}
                  >

                    <div className="book-image">

                      <img
                        className="book-cover"
                        src={`${API}${book.image_url}`}
                        alt={book.judul}
                        onError={(e) => {
                          e.target.src =
                            `${API}/images/no_cover.png`;
                        }}
                      />

                    </div>

                    <div className="book-info">

                      <h3>{book.judul}</h3>

                      <p>
                        <b>Pengarang:</b>{" "}
                        {book.pengarang}
                      </p>

                      <p>
                        <b>Kategori:</b>{" "}
                        {book.klasifikasi}
                      </p>

                    </div>

                  </li>

                ))

              ) : (

                <div className="empty-state">

                  Silakan pilih mood dan genre untuk melihat rekomendasi

                </div>

              )}

            </ul>
          </main>

        </div>

      </div>
    </>
  );
}

export default Rekomendasi;