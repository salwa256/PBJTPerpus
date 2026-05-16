// ═══════════════════════════════════════════════════════
// pages/Carianggota.jsx
// ═══════════════════════════════════════════════════════

import { useState } from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  apiFetch
} from "../utils/api";

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

  const [
    editingMemberId,
    setEditingMemberId
  ] = useState(null);

  const [form, setForm] =
    useState({
      member_code: "",
      name: "",
      nim: "",
      major: "",
      phone: "",
      address: "",
    });

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

  // ───────── UPDATE FORM ─────────

  function update(field, value) {

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

  }

  // ───────── START EDIT ─────────

  function startEdit(member) {

    setForm({
      member_code:
        member.member_code,

      name:
        member.name,

      nim:
        member.nim,

      major:
        member.major,

      phone:
        member.phone,

      address:
        member.address,
    });

    setEditingMemberId(
      member.id
    );

  }

  // ───────── SAVE EDIT ─────────

  async function saveEdit() {

    try {

      const r = await apiFetch(
  isEditing
    ? `/members/${encodeURIComponent(editingMemberId)}`
    : "/members",

  isEditing
    ? "PUT"
    : "POST",

  form
);

      showToast(
        "Data anggota berhasil diperbarui",
        "ok"
      );

      setEditingMemberId(
        null
      );

      searchMembers(query);

    } catch (e) {

      showToast(
        e.message,
        "err"
      );

    }

  }

  // ───────── DELETE ─────────

  async function handleDelete(id) {

    if (
      !window.confirm(
        "Hapus anggota ini?"
      )
    ) return;

    try {

      await apiFetch(
      `/members/${encodeURIComponent(id)}`,
      "DELETE"
      )

      showToast(
        "Anggota berhasil dihapus",
        "ok"
      );

      searchMembers(query);

    } catch (e) {

      showToast(
        e.message,
        "err"
      );

    }

  }

  return (
    <>

      {/* ───────── STYLE ───────── */}

      <style>{`

        .search-page {

          animation:
            fadePage .4s ease;

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

        .member-card:hover {



          box-shadow:
            0 16px 30px
            rgba(0,0,0,.08);

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

        .edit-modal {

          position: fixed;

          inset: 0;

          background:
            rgba(0,0,0,.45);

          display: flex;

          align-items: center;

          justify-content:
            center;

          z-index: 9999;

          padding: 20px;

        }

        .edit-box {

          width: 100%;

          max-width: 520px;

          background: white;

          border-radius: 28px;

          padding: 28px;

          animation:
            fadeScale .25s ease;

        }

        @keyframes fadeScale {

          from {

            opacity: 0;

            transform:
              scale(.95);

          }

          to {

            opacity: 1;

            transform:
              scale(1);

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

        {/* SEARCH */}

        <div
          className="glass-card"
          style={{
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
                  {m.nim}
                </div>

                <div>
                  {m.major}
                </div>

                <div>
                  {m.phone}
                </div>

              </div>

              {/* BUTTONS */}

              <div
                style={{
                  display: "grid",
                  gap: 10,
                  marginTop: 20,
                }}
              >

                {/* PILIH */}

                <button
                  onClick={() => {

                    navigate(
                      "/borrow",
                      {
                        state: m
                      }
                    );

                  }}
                  style={{
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
                  }}
                >
                  Pilih Anggota
                </button>

                {/* EDIT DELETE */}

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >

                  {/* EDIT */}

                  <button
                    onClick={() =>
                      startEdit(m)
                    }
                    style={{
                      flex: 1,

                      background:
                        "#eef2ff",

                      color:
                        "#3730a3",

                      border: "none",

                      borderRadius: 14,

                      padding: 12,

                      fontWeight: 700,

                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  {/* DELETE */}

                  <button
                    onClick={() =>
                      handleDelete(
                        m.id
                      )
                    }
                    style={{
                      flex: 1,

                      background:
                        "#fee2e2",

                      color:
                        "#991b1b",

                      border: "none",

                      borderRadius: 14,

                      padding: 12,

                      fontWeight: 700,

                      cursor: "pointer",
                    }}
                  >
                    Hapus
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ───────── EDIT MODAL ───────── */}

      {editingMemberId && (

        <div className="edit-modal">

          <div className="edit-box">

            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              Edit Anggota
            </div>

            <div
              style={{
                display: "grid",
                gap: 14,
              }}
            >

              <input
                className="modern-input"
                placeholder="
Kode anggota
"
                value={form.member_code}
                onChange={(e) =>
                  update(
                    "member_code",
                    e.target.value
                  )
                }
              />

              <input
                className="modern-input"
                placeholder="Nama"
                value={form.name}
                onChange={(e) =>
                  update(
                    "name",
                    e.target.value
                  )
                }
              />

              <input
                className="modern-input"
                placeholder="NIM"
                value={form.nim}
                onChange={(e) =>
                  update(
                    "nim",
                    e.target.value
                  )
                }
              />

              <input
                className="modern-input"
                placeholder="Jurusan"
                value={form.major}
                onChange={(e) =>
                  update(
                    "major",
                    e.target.value
                  )
                }
              />

              <input
                className="modern-input"
                placeholder="
No Telepon
"
                value={form.phone}
                onChange={(e) =>
                  update(
                    "phone",
                    e.target.value
                  )
                }
              />

              <textarea
                className="modern-input"
                rows={4}
                placeholder="
Alamat
"
                value={form.address}
                onChange={(e) =>
                  update(
                    "address",
                    e.target.value
                  )
                }
              />

            </div>

            {/* BUTTON */}

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 24,
              }}
            >

              <button
                onClick={saveEdit}
                style={{
                  flex: 1,

                  background:
                    "linear-gradient(135deg,#4f46e5,#7c3aed)",

                  color: "#fff",

                  border: "none",

                  borderRadius: 16,

                  padding: 14,

                  fontWeight: 700,

                  cursor: "pointer",
                }}
              >
                Simpan
              </button>

              <button
                onClick={() =>
                  setEditingMemberId(
                    null
                  )
                }
                style={{
                  flex: 1,

                  background:
                    "#f3f4f6",

                  color:
                    "#111827",

                  border: "none",

                  borderRadius: 16,

                  padding: 14,

                  fontWeight: 700,

                  cursor: "pointer",
                }}
              >
                Batal
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}