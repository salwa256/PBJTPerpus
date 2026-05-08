// ═══════════════════════════════════════════════════════
// pages/Carianggota.jsx
// ═══════════════════════════════════════════════════════

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { apiFetch } from "../utils/api";

export default function Carianggota({
  showToast,
}) {

  // ───────── NAVIGATE ─────────

  const navigate =
    useNavigate();

  // ───────── STATE ─────────

  const [
    query,
    setQuery
  ] = useState("");

  const [
    results,
    setResults
  ] = useState([]);

  const [
    loading,
    setLoading
  ] = useState(false);

  // ───────── SEARCH ─────────

  async function searchMembers(q) {

    setQuery(q);

    if (!q.trim()) {

      setResults([]);

      return;
    }

    setLoading(true);

    try {

      const res =
        await apiFetch(
          "/members/search?q=" +
          encodeURIComponent(q)
        );

      setResults(res);

    } catch (e) {

      showToast(
        "Gagal mencari anggota",
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
          animation: fadePage .4s ease;
        }

        @keyframes fadePage {

          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
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

        .member-card {

          transition: .25s ease;

          cursor: pointer;

        }

        .member-card:hover {

          transform:
            translateY(-4px);

          box-shadow:
            0 16px 30px
            rgba(0,0,0,.08);

          border-color:
            rgba(79,70,229,.3);

        }

        .member-grid {

          display: grid;

          grid-template-columns:
            repeat(
              auto-fill,
              minmax(280px,1fr)
            );

          gap: 18px;

        }

      `}</style>

      {/* ───────── PAGE ───────── */}

      <div
        className="search-page"
      >

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

          <input
            className="modern-input"
            placeholder="
Cari nama / NIM / kode anggota...
"
            value={query}
            onChange={(e) =>
              searchMembers(
                e.target.value
              )
            }
          />


        </div>

          <div
            style={{
              color: "#666",
              fontSize: 14,
            }}
          >
            Cari anggota perpustakaan
            lalu klik untuk lanjut
            ke peminjaman buku
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
            Mencari anggota...
          </div>

        )}

        {/* EMPTY */}

        {!loading &&
          query &&
          results.length === 0 && (

          <div
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 20,
              textAlign: "center",
              color: "#777",
            }}
          >
            Anggota tidak ditemukan
          </div>

        )}

        {/* RESULTS */}

        <div className="member-grid">

          {results.map((m) => (

            <div
              key={m.id}
              className="
member-card glass-card
"
              onClick={() => {

                navigate(
                  "/borrow",
                  {
                    state: m
                  }
                );

              }}
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
                  position: "absolute",
                  right: -25,
                  top: -25,
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background:
                    "rgba(79,70,229,.08)",
                }}
              />

              {/* AVATAR */}

              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 20,
                  background:
                    "linear-gradient(135deg,#4f46e5,#7c3aed)",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  fontSize: 30,

                  color: "#fff",

                  marginBottom: 18,

                  boxShadow:
                    "0 10px 20px rgba(79,70,229,.24)",
                }}
              >
                👨‍🎓
              </div>

              {/* NAME */}

              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {m.name}
              </div>

              {/* BADGE */}

              <div
                style={{
                  display: "inline-block",

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
                {m.member_code}
              </div>

              {/* INFO */}

              <div
                style={{
                  fontSize: 14,
                  color: "#555",
                  lineHeight: 1.8,
                }}
              >

                <div>
                  🎓 {m.nim}
                </div>

                <div>
                  📚 {m.major}
                </div>

                <div>
                  📱 {m.phone}
                </div>

              </div>

              {/* BUTTON */}

              <button
                style={{
                  marginTop: 20,

                  width: "100%",

                  background:
                    "linear-gradient(135deg,#4f46e5,#7c3aed)",

                  color: "#fff",

                  border: "none",

                  borderRadius: 16,

                  padding:
                    "14px 18px",

                  fontWeight: 700,

                  cursor: "pointer",

                  boxShadow:
                    "0 10px 22px rgba(79,70,229,.22)",
                }}
              >
                Pilih Anggota
              </button>

            </div>

          ))}

        </div>

      </div>

    </>
  );
}