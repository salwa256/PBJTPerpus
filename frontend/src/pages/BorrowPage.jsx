// ═══════════════════════════════════════════════════════
// pages/BorrowPage.jsx
// SEARCH BUKU FIX LEBIH AKURAT & STABIL
// ═══════════════════════════════════════════════════════

import {
  useState,
  useEffect
} from "react";

import {
  useLocation
} from "react-router-dom";

import {
  apiFetch
} from "../utils/api";

import {
  getTodayAndDueDate
} from "../utils/helpers";

import FormField, {
  inputStyle
} from "../components/FormField";

export default function BorrowPage({
  session,
  showToast,
  setLoader,
}) {

  // ───────── ROUTER ─────────

  const location =
    useLocation();

  const selectedMember =
    location.state;

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

  // ───────── SEARCH ─────────

  const [
    searchQuery,
    setSearchQuery
  ] = useState("");

  const [
    searchResults,
    setSearchResults
  ] = useState([]);

  // ───────── LOAD MEMBER ─────────

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

  // ═══════════════════════════════════════
  // SEARCH STABIL
  // ═══════════════════════════════════════

  useEffect(() => {

    const timeout =
      setTimeout(() => {

        if (
          searchQuery.trim()
        ) {

          searchBooks();

        } else {

          setSearchResults([]);

        }

      }, 400);

    return () =>
      clearTimeout(timeout);

  }, [searchQuery]);

  // ───────── SEARCH BOOK ─────────

  async function searchBooks() {

    try {

      const res =
        await apiFetch(
          "/books/search?q=" +
          encodeURIComponent(
            searchQuery
          )
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

  // ───────── HANDLE BORROW ─────────

  async function handleBorrow() {

    const {
      name,
      member,
      phone,
      bookId,
      dueDate
    } = form;

    if (
      !name ||
      !member ||
      !phone ||
      !bookId ||
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

      // RESET

      setForm({
        name: "",
        member: "",
        phone: "",
        bookId: "",
        date: today,
        dueDate: due,
      });

      setSearchQuery("");

      setSearchResults([]);

    } catch (e) {

      showToast(
        e.message,
        "err"
      );

    } finally {

      setLoader(false);

    }

  }

  // ───────── UI ─────────

  return (
    <>

      {/* STYLE */}

      <style>{`

        .borrow-page {
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

        .modern-card {

          transition: none;

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

          background:
            #eef2ff;

        }

        .modern-btn {

          transition: .2s;

        }

        .modern-btn:hover {

          transform:
            scale(1.02);

          opacity: .95;

        }

        @media (max-width:768px) {

          .form-grid {

            grid-template-columns:
              1fr !important;

          }

        }

      `}</style>

      {/* PAGE */}

      <div
        className="borrow-page"
        style={{
          width: "100%",
        }}
      >

        <div
          className="modern-card"
          style={{
            padding: 32,
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
                fontSize: 14,
                color: "#666",
              }}
            >
              Isi data peminjam
              dan buku yang akan dipinjam, jika belum daftar tidak bisa meminjam buku.
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
                placeholder="23.1.9.0000"
                style={{
                  ...inputStyle,
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
                placeholder="081234567890"
                style={{
                  ...inputStyle,
                  padding: 14,
                }}
                className="modern-input"
              />

            </FormField>
            
            {/* SEARCH */}

          <FormField
            label="Cari Buku"
          >

            <input
              value={searchQuery}
              onChange={(e) => {

                setSearchQuery(
                  e.target.value
                );

              }}
              placeholder="Cari ID / judul buku..."
              style={{
                ...inputStyle,
                padding: 14,
              }}
              className="modern-input"
            />
            </FormField>
          </div>

            {/* RESULT */}

            {searchResults.length > 0 && (

              <div
                style={{
                  marginTop: 12,

                  border:
                    "1px solid rgba(0,0,0,0.08)",


                  overflow: "hidden",

                  background: "#fff",

                  maxHeight: 260,

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

            {/* PINJAM */}

            <FormField
              label="Tanggal Pinjam"
            >

              <input
                type="date"
                value={form.date}
                disabled
                style={{
                  ...inputStyle,
                  padding: 14,
                  background:
                    "#f3f4f6",
                }}
              />

            </FormField>

            {/* JATUH TEMPO */}

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
                "rgb(47, 53, 215)",

              color: "#fff",

              border: "none",

              borderRadius: 14,

              padding:
                "15px 20px",

              fontSize: 15,

              fontWeight: 700,

              cursor: "pointer",

              boxShadow:
                "0 10px 22px rgba(79,70,229,.22)",
            }}
          >
            Pinjam
          </button>

        </div>

      </div>

    </>
  );
}