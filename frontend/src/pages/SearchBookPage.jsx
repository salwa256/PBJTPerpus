// ═══════════════════════════════════════════════════════
// pages/SearchBookPage.jsx
// ═══════════════════════════════════════════════════════

import { useState } from "react";
import { apiFetch } from "../utils/api";

export default function SearchBookPage({
  onSelectBook,
  showToast,
}) {

  // ───────── STATE ─────────

  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  // ───────── SEARCH ─────────

  async function handleSearch() {

    if (!query.trim()) return;

    setLoading(true);

    try {

      const res =
        await apiFetch(
          "/books/search?q=" +
          encodeURIComponent(query)
        );

      setResults(res);

    } catch (e) {

      showToast(
        "Gagal mencari: " +
        e.message,
        "err"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <>

      {/* ───────── STYLE ───────── */}

      <style>{`

        .search-page {
          animation:
            fadePage .45s ease;
        }

        @keyframes fadePage {

          from {
            opacity: 0;
            transform:
              translateY(20px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }

        }

        .glass-card {

          background:
            rgba(255,255,255,.92);

          backdrop-filter:
            blur(14px);

          border:
            1px solid rgba(255,255,255,.4);

          box-shadow:
            0 10px 30px rgba(0,0,0,.05);

        }

        .modern-input {

          width: 100%;

          border:
            1px solid #e5e7eb;

          border-radius: 18px;

          padding: 16px 18px;

          font-size: 14px;

          outline: none;

          transition: .2s;

          box-sizing: border-box;

        }

        .modern-input:focus {

          border-color:
            #4f46e5;

          box-shadow:
            0 0 0 4px
            rgba(79,70,229,.12);

        }

        .book-card {

          transition: .25s ease;

          cursor: pointer;

        }

        .book-card:hover {

          transform:
            translateY(-4px);

          box-shadow:
            0 16px 30px
            rgba(0,0,0,.08);

          border-color:
            rgba(79,70,229,.3);

        }

        .book-grid {

          display: grid;

          grid-template-columns:
            repeat(
              auto-fill,
              minmax(280px,1fr)
            );

          gap: 18px;

        }

        .search-btn {

          transition: .2s;

        }

        .search-btn:hover {

          transform:
            scale(1.03);

          opacity: .95;

        }

        @media (max-width:768px) {

          .book-grid {

            grid-template-columns:
              1fr !important;

          }

          .search-flex {

            flex-direction:
              column;

          }

          .search-btn {

            width: 100%;

          }

        }

      `}</style>

      {/* ───────── PAGE ───────── */}

      <div className="search-page">

        {/* HEADER */}

        <div
          style={{
            marginBottom: 28,
          }}
        >

        </div>

        {/* SEARCH BOX */}

        <div
          className="glass-card"
          style={{
            borderRadius: 28,
            padding: 28,
            marginBottom: 30,
          }}
        >

          <div
            className="search-flex"
            style={{
              display: "flex",
              gap: 12,
            }}
          >

            <input
              className="
modern-input
"
              value={query}
              onChange={(e) =>
                setQuery(
                  e.target.value
                )
              }
              onKeyDown={(e) =>
                e.key ===
                  "Enter" &&
                handleSearch()
              }
              placeholder="
Cari judul atau ID buku...
"
            />

            <button
              onClick={
                handleSearch
              }
              className="
search-btn
"
              style={{
                background:
                  "linear-gradient(135deg,#4f46e5,#7c3aed)",

                color: "#fff",

                border: "none",

                borderRadius: 18,

                padding:
                  "0 24px",

                fontWeight: 700,

                cursor: "pointer",

                boxShadow:
                  "0 10px 20px rgba(79,70,229,.22)",
              }}
            >
              Cari
            </button>

          </div>

        </div>

        {/* LOADING */}

        {loading && (

          <div
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: 20,
            }}
          >
            Mencari buku...
          </div>

        )}

        {/* EMPTY */}

        {!loading &&
          query &&
          results.length === 0 && (

          <div
            className="
glass-card
"
            style={{
              padding: 24,
              borderRadius: 20,
              textAlign: "center",
              color: "#777",
            }}
          >
            Buku tidak ditemukan
          </div>

        )}

        {/* RESULTS */}

        <div className="book-grid">

          {results.map((b) => (

            <div
              key={b.id}
              className="
book-card glass-card
"
              onClick={() =>
                onSelectBook(b)
              }
              style={{
                borderRadius: 24,
                padding: 22,
                position: "relative",
                overflow: "hidden",
              }}
            >

              {/* GLOW */}

              <div
                style={{
                  position:
                    "absolute",

                  right: -25,

                  top: -25,

                  width: 90,

                  height: 90,

                  borderRadius:
                    "50%",

                  background:
                    "rgba(79,70,229,.08)",
                }}
              />

              {/* ICON */}

              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 20,

                  background:
                    "linear-gradient(135deg,#4f46e5,#7c3aed)",

                  display: "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "center",

                  fontSize: 30,

                  color: "#fff",

                  marginBottom: 18,

                  boxShadow:
                    "0 10px 20px rgba(79,70,229,.24)",
                }}
              >
                📘
              </div>

              {/* TITLE */}

              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {b.title}
              </div>

              {/* AUTHOR */}

              <div
                style={{
                  fontSize: 14,
                  color: "#555",
                  marginBottom: 14,
                }}
              >
                ✍️ {b.author}
              </div>

              {/* CATEGORY */}

              <div
                style={{
                  display:
                    "inline-block",

                  background:
                    "#eef2ff",

                  color:
                    "#4f46e5",

                  padding:
                    "6px 12px",

                  borderRadius:
                    999,

                  fontSize: 12,

                  fontWeight: 700,

                  marginBottom: 16,
                }}
              >
                {b.category}
              </div>

              <div style={{ flex: 1 }} />

              {/* FOOTER */}

              <div
                style={{
                  display: "flex",

                  justifyContent:
                    "space-between",

                  alignItems:
                    "center",

                  marginTop: 18,
                }}
              >

                {/* ID */}

                <div
                  style={{
                    fontSize: 12,
                    color: "#999",
                    fontWeight: 600,
                  }}
                >
                  {b.id}
                </div>

                {/* STATUS */}

                <div
                  style={{
                    fontSize: 11,

                    padding:
                      "6px 12px",

                    borderRadius:
                      999,

                    background:
                      b.status ===
                      "tersedia"
                        ? "#e6f9f0"
                        : "#ffe6e6",

                    color:
                      b.status ===
                      "tersedia"
                        ? "#0f9d58"
                        : "#d93025",

                    fontWeight: 700,
                  }}
                >
                  {b.status}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </>
  );
}