import { useState, useEffect } from "react";
import { apiFetch } from "../utils/api";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/anggota.png";
import FormField, { inputStyle } from "../components/FormField";

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

  const [majorFilter, setMajorFilter] =
    useState("");

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

  const majorOptions = [
    "Teknik Informatika",
    "Teknik Otomotif",
    "Teknik Elektronika Industri",
    "Teknik Mesin",
  ];

  const filteredMembers = members.filter(
    (m) =>
      !majorFilter ||
      m.major === majorFilter
  );

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
    ? `/members/${encodeURIComponent(editingMemberId)}`
    : "/members",

  isEditing
    ? "PUT"
    : "POST",

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

  async function handleDelete(id) {

  if(
    !window.confirm(
      "Hapus anggota ini?"
    )
  ) return;

  setLoader(
    true,
    "Menghapus anggota..."
  );

  try {

    const r =
      await apiFetch(

      `/members/${encodeURIComponent(id)}`,

      "DELETE"

    );

    showToast(
      r.message,
      "ok"
    );

    loadMembers();

    if(
      editingMemberId===id
    ){

      cancelEdit();

    }

  } catch(e){

    showToast(
      e.message,
      "err"
    );

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
          transform: scale(1.01);
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

        /* Table styles for members list */
        .members-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .members-table th,
        .members-table td {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(0,0,0,.06);
          text-align: left;
          vertical-align: middle;
        }

        .members-table thead th {
          background: rgba(15,23,42,.04);
          font-weight: 700;
        }

        .members-table tbody tr:hover {
          background: rgba(79,70,229,.03);
        }

        .actions-cell {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .table-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 12px;
}

.members-table {
  width: 100%;
  min-width: 850px;
  border-collapse: collapse;
  font-size: 14px;
}

@media (max-width:768px){

  .table-wrapper{
    overflow-x: auto;
  }

  .members-table{
    min-width: 900px;
  }

  .actions-cell{
    flex-wrap: nowrap;
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
            
            <FormField label="Kode Anggota">
              <input
                className="modern-input"
                placeholder="ANGGT-001"
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                }}
                value={form.member_code}
                onChange={(e) =>
                  update(
                    "member_code",
                    e.target.value
                  )
                }
              />
            </FormField>

            <FormField label="Nama">
              <input
                className="modern-input"
                placeholder="Nama Lengkap"
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                }}
                value={form.name}
                onChange={(e) =>
                  update(
                    "name",
                    e.target.value
                  )
                }
              />
            </FormField>

            <FormField label="NIM">
              <input
                className="modern-input"
                placeholder="23.1.9.0000"
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                }}
                value={form.nim}
                onChange={(e) =>
                  update(
                    "nim",
                    e.target.value
                  )
                }
              />
            </FormField>

            <FormField label="Prodi">
              <input
                className="modern-input"
                placeholder="Teknik Informatika"
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                }}
                value={form.major}
                onChange={(e) =>
                  update(
                    "major",
                    e.target.value
                  )
                }
              />
            </FormField>

            <FormField label="No Telepon">
              <input
                className="modern-input"
                placeholder="08123456789"
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                  minHeight: 110,
                }}
                value={form.phone}
                onChange={(e) =>
                  update(
                    "phone",
                    e.target.value
                  )
                }
              />
            </FormField>

            <FormField label="Alamat">
              <textarea
                className="modern-input"
                placeholder="Alamat lengkap"
                rows={4}
                style={{
                  ...inputStyle,
                  borderRadius: 8,
                  padding: 14,
                  minHeight: 110,
                }}
                value={form.address}
                onChange={(e) =>
                  update(
                    "address",
                    e.target.value
                  )
                }
              />
            </FormField>

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
                  "rgb(47, 53, 215)",
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
                : "Tambah Anggota"}
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 18,
          }}
        >

          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Daftar Anggota
          </div>

          <select
            value={majorFilter}
            onChange={(e) =>
              setMajorFilter(e.target.value)
            }
            style={{
              padding: "10px 14px",
              border: "1px solid #ddd",
              borderRadius: 10,
              background: "#fff",
              minWidth: 220,
              cursor: "pointer",
            }}
          >
            <option value="">
              Semua Prodi
            </option>
            {majorOptions.map((major) => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>

        </div>

        <div>
          <div className="table-wrapper">
            <table className="members-table">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Kode</th>
                <th>NIM</th>
                <th>Prodi</th>
                <th>Telepon</th>
                <th style={{textAlign: "right"}}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((m) => (
                <tr key={m.id}>
                  <td style={{fontWeight:700}}>{m.name}</td>
                  <td>{m.member_code}</td>
                  <td>{m.nim}</td>
                  <td>{m.major}</td>
                  <td>{m.phone}</td>
                  <td className="actions-cell">
                    <button
                      className="submit-btn"
                      onClick={() => {
                        setSelectedMember(m);
                        navigate("/borrow", { state: m });
                      }}
                      style={{
                        background: "rgb(47, 53, 215)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        padding: "8px 12px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Gunakan
                    </button>

                    <button
                      className="submit-btn"
                      onClick={() => startEdit(m)}
                      style={{
                        background: "#eef2ff",
                        color: "#3730a3",
                        border: "1px solid rgba(79,70,229,.15)",
                        borderRadius: 8,
                        padding: "8px 12px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="submit-btn"
                      onClick={() => handleDelete(m.id)}
                      style={{
                        background: "#fee2e2",
                        color: "#991b1b",
                        border: "none",
                        borderRadius: 8,
                        padding: "8px 12px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

      </div>

    </>
  );
}