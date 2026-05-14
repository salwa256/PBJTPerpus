import { useState, useEffect } from "react";
import { apiFetch } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function MembersPage({
  showToast,
  setLoader,
  setSelectedMember,
  setPage,
}) {


    const navigate =
    useNavigate();
    const [members, setMembers] =
    useState([]);

  const [editingMemberId, setEditingMemberId] =
    useState(null);

  const [form, setForm] =
    useState({
      member_code: "",
      name: "",
      nim: "",
      major: "",
      phone: "",
      address: "",
    });

  useEffect(() => {
    loadMembers();
  }, []);

  async function loadMembers() {

    try {

      const res =
        await apiFetch("/members");

      setMembers(res);

    } catch (e) {

      showToast(e.message, "err");

    }
  }

  async function handleSubmit() {

    const isEditing = editingMemberId !== null;

    setLoader(
      true,
      isEditing
        ? "Menyimpan perubahan anggota..."
        : "Menambahkan anggota..."
    );

    try {

      const r = await apiFetch(
        isEditing
          ? `/members/${editingMemberId}`
          : "/members",
        isEditing ? "PUT" : "POST",
        form
      );

      showToast(r.message, "ok");

      setForm({
        member_code: "",
        name: "",
        nim: "",
        major: "",
        phone: "",
        address: "",
      });

      setEditingMemberId(null);
      loadMembers();

    } catch (e) {

      showToast(e.message, "err");

    } finally {

      setLoader(false);

    }
  }

  function update(field, value) {

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function startEdit(member) {
    setForm({
      member_code: member.member_code,
      name: member.name,
      nim: member.nim,
      major: member.major,
      phone: member.phone,
      address: member.address,
    });
    setEditingMemberId(member.id);
  }

  function cancelEdit() {
    setEditingMemberId(null);
    setForm({
      member_code: "",
      name: "",
      nim: "",
      major: "",
      phone: "",
      address: "",
    });
  }

  async function handleDelete(member) {
    if (!window.confirm(`Hapus anggota ${member.name}?`)) {
      return;
    }

    setLoader(true, "Menghapus anggota...");

    try {
      const r = await apiFetch(
        `/members/${member.id}`,
        "DELETE"
      );

      showToast(r.message, "ok");
      loadMembers();

      if (editingMemberId === member.id) {
        cancelEdit();
      }
    } catch (e) {
      showToast(e.message, "err");
    } finally {
      setLoader(false);
    }
  }

  return (
    <>

      {/* ───────── STYLE ───────── */}

      <style>{`

        .members-page {
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

        .glass-card {
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,.4);
          box-shadow: 0 10px 30px rgba(0,0,0,.05);
        }

        .modern-input {
          width: 100%;
          border: 1px RGB(0,0,0,0.2) solid;
          padding: 14px 16px;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          transition: .2s;
          background: rgb(240, 239, 235);
          box-sizing: border-box;
        }

        .modern-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 4px rgba(79,70,229,.12);
        }

        .submit-btn {
          transition: .2s;
        }

        .submit-btn:hover {
          transform: scale(1.02);
          opacity: .95;
        }

        .member-card {
          animation: cardFade .4s ease;
        }

        .member-card:hover {
          box-shadow: 0 16px 30px rgba(0,0,0,.08);
        }

        @keyframes cardFade {

          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .member-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fill,minmax(260px,1fr));
          gap: 18px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 768px) {

          .form-grid {
            grid-template-columns: 1fr;
          }

          .page-wrapper {
            padding: 0 !important;
          }

        }

      `}</style>

      <div
        className="members-page page-wrapper"
        style={{
          width: "100%",
        }}
      >

        {/* ───────── HEADER ───────── */}

        <div
          style={{
            marginBottom: 26,
          }}
        >

        </div>

        {/* ───────── FORM CARD ───────── */}

        <div
          className="glass-card"
          style={{
            padding: 28,
            marginBottom: 30,
          }}
        >

          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            {editingMemberId
              ? "Edit Anggota"
              : "Tambah Anggota"}
          </div>

          <div className="form-grid">
            

            <input
              className="modern-input"
              placeholder="Kode Anggota"
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
              placeholder="Nama Lengkap"
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
              placeholder="No Telepon"
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
              placeholder="Alamat"
              rows={4}
              value={form.address}
              onChange={(e) =>
                update(
                  "address",
                  e.target.value
                )
              }
            />

          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <button
              onClick={handleSubmit}
              className="submit-btn"
              style={{
                marginTop: 24,
                flex: 1,
                minWidth: 180,
                background:
                  "linear-gradient(135deg,#4f46e5,#7c3aed)",
                color: "#fff",
                border: "none",
                borderRadius: 14,
                padding: "16px 20px",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow:
                  "0 10px 24px rgba(79,70,229,.24)",
              }}
            >
              {editingMemberId
                ? "Simpan Perubahan"
                : "+ Tambah Anggota"}
            </button>

            {editingMemberId && (
              <button
                onClick={cancelEdit}
                className="submit-btn"
                style={{
                  marginTop: 24,
                  flex: 1,
                  minWidth: 120,
                  background: "#f3f4f6",
                  color: "#111827",
                  border: "none",
                  padding: "16px 20px",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 10px 24px rgba(15,23,42,.08)",
                }}
              >
                Batal
              </button>
            )}
          </div>

        </div>

        {/* ───────── LIST ───────── */}

        <div
          style={{
            marginBottom: 18,
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          Daftar Anggota
        </div>

        <div className="member-grid">

          {members.map((m) => (

            <div
              key={m.id}
              className="member-card glass-card"
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

              {/* MEMBER CODE */}

              <div
                style={{
                  display: "inline-block",
                  background: "#eef2ff",
                  color: "#4f46e5",
                  padding: "6px 12px",
                  borderRadius: 999,
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
                <div>{m.nim}</div>
                <div>{m.major}</div>
                <div>{m.phone}</div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: 10,
                    marginTop: 16,
                  }}
                >
                  <button
                    onClick={() => {
                      setSelectedMember(m);
                      navigate("/borrow", {
                        state: m,
                      });
                    }}
                    style={{
                      width: "100%",
                      background:
                        "linear-gradient(135deg,#4f46e5,#7c3aed)",
                      color: "#fff",
                      border: "none",
                      borderRadius: 14,
                      padding: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Gunakan Anggota
                  </button>

                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      onClick={() => startEdit(m)}
                      style={{
                        flex: 1,
                        minWidth: 120,
                        background: "#eef2ff",
                        color: "#3730a3",
                        border: "1px solid rgba(79,70,229,.15)",
                        borderRadius: 14,
                        padding: "12px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(m)}
                      style={{
                        flex: 1,
                        minWidth: 120,
                        background: "#fee2e2",
                        color: "#991b1b",
                        border: "1px solid rgba(248,113,113,.3)",
                        borderRadius: 14,
                        padding: "12px",
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

    </>
  );
}