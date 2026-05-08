// ═══════════════════════════════════════════════════════
// pages/BorrowPage.jsx
// ═══════════════════════════════════════════════════════

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { apiFetch } from "../utils/api";
import { getTodayAndDueDate } from "../utils/helpers";

import FormField, {
  inputStyle
} from "../components/FormField";

export default function BorrowPage({
  session,
  showToast,
  setLoader,
}) {

  const location =
    useLocation();
    
  const selectedMember =
    location.state;
  // ───────── ROUTER ─────────

  // ───────── DATE ─────────

  const { today, due } =
    getTodayAndDueDate();

  // ───────── FORM ─────────

  const [form, setForm] =
    useState({
      name: "",
      member: "",
      phone: "",
      bookId: "",
      date: today,
      dueDate: due,
    });

  // ───────── BOOKS ─────────

  const [
    availableBooks,
    setAvailableBooks
  ] = useState([]);

  const [
    searchQuery,
    setSearchQuery
  ] = useState("");

  const [
    searchResults,
    setSearchResults
  ] = useState([]);

  // ───────── LOAD BOOKS ─────────

  async function loadAvailableBooks() {

    try {

      const res =
        await apiFetch(
          "/books/available"
        );

      setAvailableBooks(res);

    } catch (e) {

      showToast(
        "Gagal memuat buku",
        "err"
      );

    }
  }

  // ───────── EFFECT ─────────

  useEffect(() => {

    loadAvailableBooks();

  }, []);

  // ───────── AUTO FILL MEMBER ─────────

  useEffect(() => {

    if (selectedMember) {

      setForm((prev) => ({
        ...prev,

        name:
          selectedMember.name || "",

        member:
          selectedMember.member_code || "",

        phone:
          selectedMember.phone || "",
      }));
    }

  }, [selectedMember]);

  // ───────── HANDLE BORROW ─────────

  async function handleBorrow() {

    const {
      name,
      member,
      phone,
      bookId,
      date,
      dueDate
    } = form;

    if (
      !name ||
      !member ||
      !phone ||
      !bookId ||
      !date ||
      !dueDate
    ) {

      showToast(
        "Lengkapi semua form",
        "err"
      );

      return;
    }

    setLoader(
      true,
      "Memproses peminjaman..."
    );

    try {

      const r =
        await apiFetch(
          "/loans/borrow",
          "POST",
          {
            user_id:
              session.user_id,

            book_id:
              bookId,

            borrower_name:
              name,

            member_id:
              member,

            phone:
              phone,

            due_date:
              dueDate,
          }
        );

      showToast(
        r.message,
        "ok"
      );

      // reset

      setForm({
        name: "",
        member: "",
        phone: "",
        bookId: "",
        date: today,
        dueDate: due,
      });

      setSearchQuery("");

      loadAvailableBooks();

    } catch (e) {

      showToast(
        e.message,
        "err"
      );

    } finally {

      setLoader(false);

    }
  }

  // ───────── SEARCH ─────────

  async function handleSearch(q) {

    if (!q.trim()) {

      setSearchResults([]);

      return;
    }

    try {

      const res =
        await apiFetch(
          "/books/search?q=" +
          encodeURIComponent(q)
        );

      setSearchResults(res);

    } catch (e) {

      showToast(
        "Gagal mencari buku",
        "err"
      );

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

      {/* STYLE */}

      <style>{`

        .borrow-page {
          animation: fadePage .5s ease;
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

        .modern-card {
          transition: .25s ease;
        }

        .modern-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 18px 34px
            rgba(0,0,0,0.08);
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

        .book-item {
          transition: .2s;
        }

        .book-item:hover {
          background: #eef2ff;
        }

        .modern-btn {
          transition: .2s;
        }

        .modern-btn:hover {
          transform: scale(1.02);
          opacity: .95;
        }

        @media (max-width:768px) {

          .form-grid {
            grid-template-columns:
              1fr !important;
          }

        }

      `}</style>

      <div
        className="borrow-page"
        style={{
          width: "100%",
        }}
      >

        <div
          className="modern-card"
          style={{
            background:
              "rgba(255,255,255,0.92)",

            backdropFilter:
              "blur(12px)",

            border:
              "1px solid rgba(255,255,255,0.4)",

            borderRadius: 28,

            padding: 32,

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >

          {/* HEADER */}

          <div
            style={{
              marginBottom: 30,
            }}
          >

            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Form Peminjaman
            </div>

            <div
              style={{
                fontSize: 14,
                color: "#666",
              }}
            >
              Isi data peminjam
              dan pilih buku
            </div>

          </div>

          {/* FORM */}

          <div
            className="form-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",

              gap: 18,

              marginBottom: 18,
            }}
          >

            {/* NAMA */}

            <FormField
              label="Nama Peminjam"
            >

              <input
                value={form.name}
                onChange={(e) =>
                  updateForm(
                    "name",
                    e.target.value
                  )
                }
                placeholder="Nama lengkap"
                style={{
                  ...inputStyle,
                  borderRadius: 14,
                  padding: 14,
                }}
                className="modern-input"
              />

            </FormField>

            {/* MEMBER */}

            <FormField
              label="No. Anggota"
            >

              <input
                value={form.member}
                onChange={(e) =>
                  updateForm(
                    "member",
                    e.target.value
                  )
                }
                placeholder="MBR-001"
                style={{
                  ...inputStyle,
                  borderRadius: 14,
                  padding: 14,
                }}
                className="modern-input"
              />

            </FormField>

            {/* PHONE */}

            <FormField
              label="No. Telepon"
            >

              <input
                value={form.phone}
                onChange={(e) =>
                  updateForm(
                    "phone",
                    e.target.value
                  )
                }
                placeholder="08xxxxxxxxxx"
                style={{
                  ...inputStyle,
                  borderRadius: 14,
                  padding: 14,
                }}
                className="modern-input"
              />

            </FormField>

          </div>

          {/* SEARCH */}

          <FormField
            label="Cari Buku (ID / Judul)"
          >

            <input
              value={searchQuery}
              onChange={(e) => {

                setSearchQuery(
                  e.target.value
                );

                handleSearch(
                  e.target.value
                );

              }}
              placeholder="Ketik ID atau judul buku..."
              style={{
                ...inputStyle,
                borderRadius: 14,
                padding: 14,
              }}
              className="modern-input"
            />

            {/* RESULT */}

            {searchResults.length > 0 && (

              <div
                style={{
                  marginTop: 12,
                  border:
                    "1px solid rgba(0,0,0,0.08)",

                  borderRadius: 14,

                  overflow: "hidden",

                  background: "#fff",

                  maxHeight: 240,

                  overflowY: "auto",
                }}
              >

                {searchResults.map((b) => (

                  <div
                    key={b.id}
                    onClick={() => {

                      updateForm(
                        "bookId",
                        b.id
                      );

                      setSearchQuery(
                        b.title
                      );

                      setSearchResults([]);

                    }}
                    className="book-item"
                    style={{
                      padding: 14,
                      borderBottom:
                        "1px solid rgba(0,0,0,0.06)",

                      cursor: "pointer",
                    }}
                  >

                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {b.title}
                    </div>

                    <div
                      style={{
                        fontSize: 12,
                        color: "#666",
                      }}
                    >
                      {b.id}
                    </div>

                  </div>

                ))}

              </div>

            )}

          </FormField>

          {/* DATE */}

          <div
            className="form-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",

              gap: 18,

              marginTop: 20,

              marginBottom: 28,
            }}
          >

            <FormField
              label="Tanggal Pinjam"
            >

              <input
                type="date"
                value={form.date}
                onChange={(e) =>
                  updateForm(
                    "date",
                    e.target.value
                  )
                }
                style={{
                  ...inputStyle,
                  borderRadius: 14,
                  padding: 14,
                }}
                className="modern-input"
              />

            </FormField>

            <FormField
              label="Jatuh Tempo"
            >

              <input
                type="date"
                value={form.dueDate}
                onChange={(e) =>
                  updateForm(
                    "dueDate",
                    e.target.value
                  )
                }
                style={{
                  ...inputStyle,
                  borderRadius: 14,
                  padding: 14,
                }}
                className="modern-input"
              />

            </FormField>

          </div>

          {/* BUTTON */}

          <button
            onClick={handleBorrow}
            className="modern-btn"
            style={{
              width: "100%",

              background:
                "linear-gradient(135deg,#4f46e5,#7c3aed)",

              color: "#fff",

              border: "none",

              borderRadius: 16,

              padding:
                "15px 20px",

              fontSize: 15,

              fontWeight: 700,

              cursor: "pointer",

              boxShadow:
                "0 10px 22px rgba(79,70,229,.22)",
            }}
          >
            Proses Peminjaman
          </button>

        </div>

      </div>

    </>
  );
}