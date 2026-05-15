// ═══════════════════════════════════════════════════════
// pages/BooksPage.jsx
// Modern UI + Multi Jenis Koleksi
// ═══════════════════════════════════════════════════════

import { useState, useEffect } from "react";
import { apiFetch } from "../utils/api";
import FormField, {
  inputStyle,
} from "../components/FormField";
import StatusPill from "../components/StatusPill";

// ───────── CATEGORY ─────────

const CATEGORIES = [
  "Fiksi",
  "Non-Fiksi",
  "Ilmiah",
  "Teknik",
  "Sejarah",
  "AI",
  "Pemrograman",
  "Romance",
  "Horror",
  "Lainnya",
];

// ───────── TYPES ─────────

const TYPES = [
  "Buku",
  "Novel",
  "Komik",
  "Tugas Akhir",
  "Laporan Magang",
  "Jurnal",
  "Modul",
];

export default function BooksPage({
  showToast,
  setLoader,
}) {

  // ───────── STATES ─────────

  const [books, setBooks] =
    useState([]);

  const [form, setForm] =
    useState({
      id: "",
      title: "",
      author: "",
      jenis: "Buku",
      category: "Fiksi",
      year: "",
    });

  // ───────── LOAD DATA ─────────

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {

    try {

      const data =
        await apiFetch("/books");

      setBooks(data);

    } catch (e) {

      showToast(
        "Gagal memuat buku",
        "err"
      );

    }
  }

  // ───────── ADD BOOK ─────────

  async function handleAddBook() {

    const {
      id,
      title,
      author,
      jenis,
      category,
      year,
    } = form;

    if (
      !id ||
      !title ||
      !author ||
      !year
    ) {

      showToast(
        "Lengkapi semua form",
        "err"
      );

      return;
    }

    setLoader(
      true,
      "Menyimpan koleksi..."
    );

    try {

      const r = await apiFetch(
        "/books",
        "POST",
        {
          id,
          title,
          author,
          jenis,
          category,
          year,
        }
      );

      showToast(
        r.message,
        "ok"
      );

      // RESET

      setForm({
        id: "",
        title: "",
        author: "",
        jenis: "Buku",
        category: "Fiksi",
        year: "",
      });

      loadBooks();

    } catch (e) {

      showToast(
        e.message,
        "err"
      );

    } finally {

      setLoader(false);

    }
  }

  // ───────── DELETE ─────────

  async function handleDeleteBook(
    id
  ) {

    if (
      !confirm(
        "Hapus koleksi ini?"
      )
    ) return;

    setLoader(
      true,
      "Menghapus..."
    );

    try {

      await apiFetch(
        `/books/${encodeURIComponent(id)}`,
        "DELETE"
        )

      showToast(
        r.message,
        "ok"
      );

      loadBooks();

    } catch (e) {

      showToast(
        e.message,
        "err"
      );

    } finally {

      setLoader(false);

    }
  }

  // ───────── UPDATE FORM ─────────

  function updateForm(
    field,
    value
  ) {

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  // ───────── UI ─────────

  return (
    <>
      {/* ───────── STYLE ───────── */}

      <style>{`

        .books-page {
          animation:
            fadePage .5s ease;
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
            blur(12px);

          border:
            1px solid
            rgba(255,255,255,.4);


        }

        .glass-card:hover {


          box-shadow:
            0 18px 34px
            rgba(0,0,0,.08);

        }

        .modern-input {
          transition: .2s;
        }

        .modern-input:focus {

          border-color:
            #4f46e5 !important;

          box-shadow:
            0 0 0 4px
            rgba(79,70,229,.12);

        }

        .modern-btn {
          transition: .2s;
        }

        .modern-btn:hover {

          transform:
            scale(1.03);

          opacity: .95;

        }

        .table-row {
          transition: .2s;
        }

        .table-row:hover {

          background:
            #f8faff;

        }

        .delete-btn {
          transition: .2s;
        }

        .delete-btn:hover {

          transform:
            scale(1.08);

          background:
            #dc2626 !important;

        }

        @media (max-width: 900px) {

          .form-grid {
            grid-template-columns:
              1fr !important;
          }

        }

      `}</style>

      {/* ───────── PAGE ───────── */}

      <div
        className="books-page"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >

        {/* ───────── FORM CARD ───────── */}

        <div
          className="glass-card"
          style={{
            padding: 28,
          }}
        >

          {/* HEADER */}

          <div
            style={{
              marginBottom: 24,
            }}
          >

            <div
              style={{
                color: "#666",
                fontSize: 14,
              }}
            >
              Tambahkan buku,
              novel, 
              tugas akhir,
              laporan magang,
              dan lainnya disini.
            </div>

          </div>

          {/* FORM GRID */}

          <div
            className="form-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: 16,
            }}
          >

            {/* ID */}

            <FormField label="ID Koleksi">

              <input
                value={form.id}
                onChange={(e) =>
                  updateForm(
                    "id",
                    e.target.value
                  )
                }
                placeholder="BOOK-001"
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                }}
                className="modern-input"
              />

            </FormField>

            {/* YEAR */}

            <FormField label="Tahun">

              <input
                value={form.year}
                onChange={(e) =>
                  updateForm(
                    "year",
                    e.target.value
                  )
                }
                placeholder="2025"
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                }}
                className="modern-input"
              />

            </FormField>

            {/* TITLE */}

            <FormField label="Judul">

              <input
                value={form.title}
                onChange={(e) =>
                  updateForm(
                    "title",
                    e.target.value
                  )
                }
                placeholder="Judul koleksi"
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                }}
                className="modern-input"
              />

            </FormField>

            {/* AUTHOR */}

            <FormField label="Penulis">

              <input
                value={form.author}
                onChange={(e) =>
                  updateForm(
                    "author",
                    e.target.value
                  )
                }
                placeholder="Nama penulis"
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                }}
                className="modern-input"
              />

            </FormField>

            {/* TYPE */}

            <FormField label="Jenis Koleksi">

              <select
                value={form.jenis}
                onChange={(e) =>
                  updateForm(
                    "jenis",
                    e.target.value
                  )
                }
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                }}
                className="modern-input"
              >

                {TYPES.map((t) => (

                  <option key={t}>
                    {t}
                  </option>

                ))}

              </select>

            </FormField>

            {/* CATEGORY */}

            <FormField label="Kategori">

              <select
                value={form.category}
                onChange={(e) =>
                  updateForm(
                    "category",
                    e.target.value
                  )
                }
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                }}
                className="modern-input"
              >

                {CATEGORIES.map((c) => (

                  <option key={c}>
                    {c}
                  </option>

                ))}

              </select>

            </FormField>

          </div>

          {/* BUTTON */}

          <button
            onClick={handleAddBook}
            className="modern-btn"
            style={{
              width: "100%",
              background:
                "#2f35d7",
              color: "#fff",
              border: "none",
              borderRadius: 14,
              padding: "15px 20px",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              marginTop: 24,
              boxShadow:
                "0 10px 22px rgba(79,70,229,.22)",
            }}
          >
            Simpan Koleksi
          </button>

        </div>

        {/* ───────── TABLE ───────── */}

        <div>

          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
             Koleksi Perpustakaan
          </div>

          <div
            className="glass-card"
            style={{
              overflow: "hidden",
            }}
          >

            <table
              style={{
                width: "100%",
                borderCollapse:
                  "collapse",
              }}
            >

              {/* HEAD */}

              <thead
                style={{
                  background:
                    "#f4f6fb",
                }}
              >

                <tr>

                  {[
                    "ID",
                    "Judul",
                    "Penulis",
                    "Jenis",
                    "Kategori",
                    "Tahun",
                    "Status",
                    "",
                  ].map((h) => (

                    <th
                      key={h}
                      style={thStyle}
                    >
                      {h}
                    </th>

                  ))}

                </tr>

              </thead>

              {/* BODY */}

              <tbody>

                {books.length ===
                0 ? (

                  <tr>

                    <td
                      colSpan={8}
                      style={{
                        textAlign:
                          "center",
                        padding: 40,
                        color:
                          "#999",
                      }}
                    >
                      Belum ada koleksi
                    </td>

                  </tr>

                ) : (

                  books.map((b) => (

                    <tr
                      key={b.id}
                      className="table-row"
                    >

                      <td
                        style={tdStyle}
                      >
                        {b.id}
                      </td>

                      <td
                        style={tdStyle}
                      >
                        {b.title}
                      </td>

                      <td
                        style={tdStyle}
                      >
                        {b.author}
                      </td>

                      <td
                        style={tdStyle}
                      >
                        {b.jenis}
                      </td>

                      <td
                        style={tdStyle}
                      >
                        {b.category}
                      </td>

                      <td
                        style={tdStyle}
                      >
                        {b.year}
                      </td>

                      <td
                        style={tdStyle}
                      >

                        <StatusPill
                          status={
                            b.status
                          }
                        />

                      </td>

                      <td
                        style={tdStyle}
                      >

                        {b.status ===
                          "tersedia" && (

                          <button
                            onClick={() =>
                              handleDeleteBook(
                                b.id
                              )
                            }
                            className="delete-btn"
                            style={{
                              background:
                                "#ef4444",
                              color:
                                "#fff",
                              border:
                                "none",
                              borderRadius: 10,
                              padding:
                                "7px 12px",
                              fontSize: 12,
                              fontWeight: 700,
                              cursor:
                                "pointer",
                            }}
                          >
                            🗑
                          </button>

                        )}

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </>
  );
}

// ───────── TABLE STYLE ─────────

const thStyle = {
  padding: "14px 18px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: ".06em",
  color: "#666",
  borderBottom:
    "1px solid rgba(0,0,0,.08)",
};

const tdStyle = {
  padding: "15px 18px",
  borderBottom:
    "1px solid rgba(0,0,0,.06)",
};