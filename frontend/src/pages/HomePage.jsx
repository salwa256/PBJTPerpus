// ═══════════════════════════════════════════════════════
// pages/HomePage.jsx
// Dashboard modern + animasi hidup
// Riwayat pengembalian di bawah peminjaman aktif
// ═══════════════════════════════════════════════════════

import { useState, useEffect } from "react";

import { apiFetch } from "../utils/api";
import { formatDate } from "../utils/helpers";

import StatusPill from "../components/StatusPill";

// ICONS
import buku from "../assets/addbooks.png";
import borrow from "../assets/borrow.png";
import terlambat from "../assets/terlambat.png";
import ada from "../assets/ada.png";
import anggota from "../assets/anggota.png";

export default function HomePage({
  showToast,
  setLoader,
  onGoToBorrow,
}) {

  // ───────── STATES ─────────

  const [stats, setStats] = useState({
    total: "-",
    borrowed: "-",
    available: "-",
    overdue: "-",
  });

  const [activeLoans, setActiveLoans] =
    useState([]);

  const [history, setHistory] =
    useState([]);

    const [selectedLoan, setSelectedLoan] =
      useState(null);

  const [historyFilter, setHistoryFilter] =
    useState(
      new Date()
        .toISOString()
        .split("T")[0]
    );

  const [borrowFilter, setBorrowFilter] =
    useState(
      new Date()
        .toISOString()
        .split("T")[0]
    );

  // ───────── LOAD DATA ─────────

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {

    try {

      const [
        statsData,
        loansData,
        historyData,
      ] = await Promise.all([
        apiFetch("/stats"),
        apiFetch("/loans/active"),
        apiFetch("/loans"),
      ]);

      setStats(statsData);

      setActiveLoans(loansData);

      // hanya pengembalian
      setHistory(
        historyData.filter(
          (h) =>
            h.status ===
            "dikembalikan"
        )
      );

    } catch (e) {

      showToast(
        "Gagal muat data: " +
        e.message,
        "err"
      );

    }
  }

  // ───────── QUICK RETURN ─────────

  async function handleQuickReturn(
    bookId
  ) {

    setLoader(
      true,
      "Memproses pengembalian..."
    );

    try {

      const r = await apiFetch(
        "/loans/return",
        "POST",
        {
          book_id: bookId,
        }
      );

      showToast(r.message, "ok");

      loadData();

    } catch (e) {

      showToast(e.message, "err");

    } finally {

      setLoader(false);

    }
  }

  // ───────── FILTER HISTORY BY DATE ─────────

  function normalizeDateString(value) {
    if (!value) return "";
    return value.split("T")[0].split(" ")[0];
  }

  function getHistoryByDate(date) {

    return history.filter(
      (h) => {

        const returnDate =
          normalizeDateString(
            h.return_date
          );

        return returnDate === date;

      }
    );

  }

  // ───────── FILTER ACTIVE LOANS BY DATE ─────────

  function getLoansByDate(date) {

    return activeLoans.filter(
      (l) => {

        const borrowDate =
          normalizeDateString(
            l.borrow_date
          );

        return borrowDate === date;

      }
    );

  }

  // ───────── STYLE VARIABLES ─────────

  const tableWrapStyle = {
    overflowX: "auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  };

  const thStyle = {
    padding: "12px 16px",
    textAlign: "left",
    fontWeight: 600,
    color: "#333",
    borderBottom: "1px solid #eee",
  };

  const tdStyle = {
    padding: "14px 16px",
    borderBottom: "1px solid #eee",
    color: "#333",
  };

  const btnDangerStyle = {
    padding: "8px 16px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 600,
    transition: ".2s",
  };

  // ───────── STYLE ─────────

  const styles = `

    .fade-up {
      animation: fadeUp .7s ease forwards;
      opacity: 0;
    }

    .fade-delay-1 {
      animation-delay: .1s;
    }

    .fade-delay-2 {
      animation-delay: .2s;
    }

    .fade-delay-3 {
      animation-delay: .3s;
    }

    .fade-delay-4 {
      animation-delay: .4s;
    }

    @keyframes fadeUp {

      from {
        opacity: 0;
        transform: translateY(25px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }

    }

    .stat-card {
      transition: .25s ease;
    }

    .stat-card:hover {
      transform:
        translateY(-6px)
        scale(1.02);

      box-shadow:
        0 18px 34px
        rgba(0,0,0,.08);
    }

    .table-row {
      transition: .2s;
    }

    .table-row:hover {
      background: #f8faff;
      transform: scale(1.002);
    }

    .quick-btn {
      transition: .2s;
    }

    .glass-box {
      background:
        rgba(255,255,255,.92);

      backdrop-filter:
        blur(12px);

      transition: .25s;
    }

    .glass-box:hover {

      box-shadow:
        0 18px 30px
        rgba(0,0,0,.06);

    }

    .history-item {
      transition: .2s;
    }

    .history-item:hover {
      background: #f9fafb;
      transform: translateX(4px);
    }

    .icon-box {
      transition: .25s;
    }

   

    @media (max-width: 900px) {

      .home-grid {
        grid-template-columns:
          1fr !important;
      }

    }
      @media(max-width:768px){

.glass-box{

overflow-x:auto;

-webkit-overflow-scrolling:touch;

}

.glass-box::-webkit-scrollbar{

height:6px;

}

.glass-box::-webkit-scrollbar-thumb{

background:#d1d5db;

border-radius:999px;

}
@media(max-width:768px){

.glass-box{

overflow-x:auto;

-webkit-overflow-scrolling:touch;

}

.glass-box::-webkit-scrollbar{

height:8px;

}

.glass-box::-webkit-scrollbar-thumb{

background:#c7c7c7;

border-radius:999px;

}

}

}

  `;

  return (
    <>
      <style>{styles}</style>

      <div className="fade-up">

        {/* ───────── STATISTIC CARDS ───────── */}

        <StatCards stats={stats} />

        {/* ───────── MAIN ───────── */}

        <div className="home-grid">

          {/* ───────── HEADER ───────── */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
              flexWrap: "wrap",
              gap: 12,
            }}
          >

            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              Peminjaman Aktif
            </div>

            <input
              type="date"
              value={borrowFilter}
              onChange={(e) =>
                setBorrowFilter(
                  e.target.value
                )
              }
              style={{
                padding: "8px 12px",
                border: "1px solid #ddd",
                borderRadius: 8,
                fontSize: 14,
                outline: "none",
                cursor: "pointer",
              }}
            />

          </div>

          {/* ───────── SUMMARY PEMINJAMAN ───────── */}

          {(() => {

            const filtered =
              getLoansByDate(
                borrowFilter
              );



          })()}

          {/* ───────── TABLE PEMINJAMAN ───────── */}

          <div
            className="glass-box"
            style={tableWrapStyle}
          >

            <table style={tableStyle}>

              <thead
                style={{
                  background:
                    "#f4f6fb",
                }}
              >

                <tr>

                  {[
                    "Peminjam",
                    "Buku",
                    "Tgl Pinjam",
                    "Jatuh Tempo",
                    "Status",
                    "Aksi",
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

              <tbody>

                {(() => {

                  const filtered =
                    getLoansByDate(
                      borrowFilter
                    );

                  return filtered.length === 0 ? (

                    <tr>

                      <td
                        colSpan={6}
                        style={{
                          textAlign:
                            "center",
                          padding: 40,
                          color:
                            "#999",
                        }}
                      >
                        Tidak ada
                        peminjaman pada
                        tanggal ini
                      </td>

                    </tr>

                  ) : (

                    filtered.map(
                      (l) => (

                        <tr
                          key={l.book_id}
                          className="table-row"
                          onClick={() => setSelectedLoan(l)}
                          style={{ cursor: "pointer" }}
                        >

                          <td
                            style={
                            tdStyle
                          }
                        >

                          <b>
                            {
                              l.borrower_name
                            }
                          </b>

                          <br />

                          <span
                            style={{
                              fontSize: 11,
                              color:
                                "#666",
                            }}
                          >
                            {
                              l.member_id
                            }
                          </span>

                        </td>

                        <td
                          style={
                            tdStyle
                          }
                        >

                          {
                            l.book_title
                          }

                          <br />

                          <span
                            style={{
                              fontSize: 11,
                              color:
                                "#999",
                              fontFamily:
                                "monospace",
                            }}
                          >
                            {
                              l.book_id
                            }
                          </span>

                        </td>

                        <td
                          style={
                            tdStyle
                          }
                        >
                          {formatDate(
                            l.borrow_date
                          )}
                        </td>

                        <td
                          style={
                            tdStyle
                          }
                        >
                          {formatDate(
                            l.due_date
                          )}
                        </td>

                        <td
                          style={
                            tdStyle
                          }
                        >

                          <StatusPill
                            status={
                              l.status
                            }
                          />

                        </td>

                        <td
                          style={
                            tdStyle
                          }
                        >

                          <button
                            className="quick-btn"
                            onClick={(e) => {
                              e.stopPropagation();

                              handleQuickReturn(
                                l.book_id
                              );
                            }}
                            style={
                              btnDangerStyle
                            }
                          >
                            Kembalikan
                          </button>

                        </td>

                      </tr>

                    )

                  )
                  )

                })()}

              </tbody>

            </table>

          </div>

      {/* ───────── RIWAYAT PENGEMBALIAN ───────── */}

<div
  className="glass-box"
  style={{
    ...tableWrapStyle,
    padding: 22,
    marginTop: 24,
  }}
>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18,
      flexWrap: "wrap",
      gap: 12,
    }}
  >

    <div
      style={{
        fontSize: 20,
        fontWeight: 700,
      }}
    >
      Riwayat Pengembalian
    </div>

    <input
      type="date"
      value={historyFilter}
      onChange={(e) =>
        setHistoryFilter(
          e.target.value
        )
      }
      style={{
        padding: "8px 12px",
        border: "1px solid #ddd",
        borderRadius: 8,
        fontSize: 14,
        outline: "none",
        cursor: "pointer",
      }}
    />

  </div>

  {/* SUMMARY */}

  {(() => {

    const filtered =
      getHistoryByDate(
        historyFilter
      );

    return (

      <div
        style={{
          background: "#f9f9f9",
          padding: 14,
          borderRadius: 12,
          marginBottom: 18,
          textAlign: "center",
        }}
      >

        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#2f35d7",
          }}
        >
          {filtered.length}
        </div>

        <div
          style={{
            fontSize: 12,
            color: "#999",
            marginTop: 4,
          }}
        >
          Buku dikembalikan pada{" "}
          {new Date(
            historyFilter
          ).toLocaleDateString(
            "id-ID",
            {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}
        </div>

      </div>

    );

  })()}

  {history.length === 0 ? (

    <div
      style={{
        textAlign: "center",
        padding: 30,
        color: "#999",
        fontSize: 13,
      }}
    >
      Belum ada riwayat
    </div>

  ) : (

    (() => {

      const filtered =
        getHistoryByDate(
          historyFilter
        );

      return filtered.length === 0 ? (

        <div
          style={{
            textAlign: "center",
            padding: 20,
            color: "#999",
            fontSize: 13,
          }}
        >

        </div>

      ) : (

        filtered.map((h, i) => (

          <div
            key={i}
            className="history-item"
            onClick={() =>
              setSelectedLoan(h)
            }
            style={{
              display: "flex",

              justifyContent:
                "space-between",

              alignItems: "center",

              padding: "14px 0",

              borderBottom:
                "1px solid rgba(0,0,0,.06)",

              cursor: "pointer",
            }}
          >

            {/* LEFT */}

            <div>

              <div
                style={{
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                {h.book_title}
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: "#666",
                  marginBottom: 4,
                }}
              >
                {h.borrower_name}
              </div>

              <div
                style={{
                  fontSize: 11,
                  color: "#999",
                }}
              >
                {h.member_id}
              </div>

            </div>

            {/* RIGHT */}

            <div
              style={{
                textAlign: "right",
              }}
            >

              <div
                style={{
                  fontSize: 11,
                  color: "#999",
                  marginBottom: 8,
                }}
              >
                {new Date(
                  h.return_date
                ).toLocaleTimeString(
                  "id-ID",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </div>

              <div
                style={{
                  display:
                    "inline-block",

                  padding:
                    "6px 12px",

                  borderRadius:
                    999,

                  background:
                    "#e6f9f0",

                  color:
                    "#0f9d58",

                  fontSize: 11,

                  fontWeight: 700,
                }}
              >
                Dikembalikan
              </div>

            </div>

          </div>

        ))

      );

    })()

  )}

</div>

        </div>

      </div>

      {/* ───────── POPUP DETAIL ───────── */}

{selectedLoan && (

  <div
    onClick={() =>
      setSelectedLoan(null)
    }
    style={{
      position: "fixed",
      inset: 0,
      background:
        "rgba(0,0,0,.45)",

      display: "flex",

      alignItems: "center",

      justifyContent:
        "center",

      zIndex: 9999,

      padding: 20,
    }}
  >

    <div
      onClick={(e) =>
        e.stopPropagation()
      }
      style={{
        width: "100%",
        maxWidth: 500,
        background: "#fff",
        borderRadius: 24,
        padding: 28,
        boxShadow:
          "0 20px 50px rgba(0,0,0,.2)",
      }}
    >

      {/* HEADER */}

      <div
        style={{
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 24,
        }}
      >
        Detail Peminjaman
      </div>

      {/* NAMA */}

      <div
        style={{
          marginBottom: 14,
        }}
      >
        <b>Nama:</b>
        <br />
        {
          selectedLoan.borrower_name
        }
      </div>

      {/* MEMBER */}

      <div
        style={{
          marginBottom: 14,
        }}
      >
        <b>No Anggota:</b>
        <br />
        {
          selectedLoan.member_id
        }
      </div>

      {/* PHONE */}

      <div
        style={{
          marginBottom: 14,
        }}
      >
        <b>No Telepon:</b>
        <br />
        {
          selectedLoan.phone || "-"
        }
      </div>

      {/* BUKU */}

      <div
        style={{
          marginBottom: 14,
        }}
      >
        <b>Buku:</b>
        <br />
        {
          selectedLoan.book_title
        }
      </div>

      {/* TGL PINJAM */}

      <div
        style={{
          marginBottom: 14,
        }}
      >
        <b>Tanggal Pinjam:</b>
        <br />
        {formatDate(
          selectedLoan.borrow_date
        )}
      </div>

      {/* JATUH TEMPO */}

      <div
        style={{
          marginBottom: 14,
        }}
      >
        <b>Jatuh Tempo:</b>
        <br />
        {formatDate(
          selectedLoan.due_date
        )}
      </div>

      {/* TGL KEMBALI */}

      {selectedLoan.return_date && (

        <div
          style={{
            marginBottom: 14,
          }}
        >
          <b>Tanggal Kembali:</b>
          <br />
          {formatDate(
            selectedLoan.return_date
          )}
        </div>

      )}

      {/* STATUS */}

      <div
        style={{
          marginBottom: 20,
        }}
      >
        <b>Status:</b>
        <br />

        <div
          style={{
            marginTop: 8,

            display:
              "inline-block",

            padding:
              "7px 14px",

            borderRadius:
              999,

            background:
              selectedLoan.status ===
              "dikembalikan"
                ? "#e6f9f0"
                : "#eef2ff",

            color:
              selectedLoan.status ===
              "dikembalikan"
                ? "#0f9d58"
                : "#4f46e5",

            fontSize: 12,

            fontWeight: 700,
          }}
        >
          {selectedLoan.status}
        </div>

      </div>

      {/* BUTTON */}

      <button
        onClick={() =>
          setSelectedLoan(null)
        }
        style={{
          width: "100%",
          border: "none",
          padding: 14,
          borderRadius: 14,
          background:
            "linear-gradient(135deg,#4f46e5,#7c3aed)",

          color: "#fff",

          fontWeight: 700,

          cursor: "pointer",
        }}
      >
        Tutup
      </button>

    </div>

  </div>

)}    </>
  );
}

// ═══════════════════════════════════════════════════════
// STAT CARDS
// ═══════════════════════════════════════════════════════

function StatCards({
  stats,
}) {

  const cards = [
    {
      label: "Total Buku",
      value: stats.total,
      badge: "Koleksi",
      bg: "#dbeafe",
      color: "#1e40af",
      icon: buku,
    },

    {
      label: "Dipinjam",
      value: stats.borrowed,
      badge: "Aktif",
      bg: "#fef3c7",
      color: "#92400e",
      icon: borrow,
    },

    {
      label: "Tersedia",
      value: stats.available,
      badge: "Siap Pinjam",
      bg: "#dcfce7",
      color: "#166534",
      icon: ada,
    },

    {
      label: "Terlambat",
      value: stats.overdue,
      badge: "Perhatian",
      bg: "#fee2e2",
      color: "#991b1b",
      icon: terlambat,
    },

    {
      label: "Anggota",
      value: stats.members,
      badge: "Terdaftar",
      bg: "#dcfce7",
      color: "#166534",
      icon: anggota,
    },
  ];

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: 16,
        marginBottom: 28,
      }}
    >

      {cards.map((c, i) => (

        <div
          key={c.label}
          className={`stat-card fade-up fade-delay-${i + 1}`}
          style={{
            background:
              "rgba(255,255,255,.92)",
            backdropFilter:
              "blur(12px)",
            border:
              "1px solid rgba(255,255,255,.3)",
            padding: 22,
          }}
        >

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems:
                "center",
              marginBottom: 18,
            }}
          >

            <div>

              <div
                style={{
                  fontSize: 12,
                  color: "#666",
                  fontWeight: 600,
                  marginBottom: 6,
                }}
              >
                {c.label}
              </div>

              <div
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                }}
              >
                {c.value}
              </div>

            </div>

            <div
              className="icon-box"
              style={{
                width: 62,
                height: 62,
                borderRadius: 18,
                background: c.bg,
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
              }}
            >

              <img
                src={c.icon}
                alt={c.label}
                style={{
                  width: 30,
                  height: 30,
                  objectFit:
                    "contain",
                }}
              />

            </div>

          </div>

          <div
            style={{
              display:
                "inline-block",
              padding:
                "6px 12px",
              borderRadius:
                999,
              background: c.bg,
              color: c.color,
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            {c.badge}
          </div>

        </div>

      ))}

    </div>

  );
}

// ═══════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════

const tableWrapStyle = {
  background:"rgba(255,255,255,.92)",
  border:"1px solid rgba(255,255,255,.4)",

  overflowX:"scroll",
  overflowY:"hidden",

  WebkitOverflowScrolling:"touch",
  backdropFilter:"blur(12px)"
};
const tableStyle = {
  width:"100%",
  borderCollapse:"collapse",

  minWidth:"900px"
};

const thStyle = {
  padding: "16px 18px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 700,
  textTransform:
    "uppercase",
  letterSpacing:
    ".06em",
  color: "#666",
  borderBottom:
    "1px solid rgba(0,0,0,.08)",
};

const tdStyle = {
  padding: "16px 18px",
  borderBottom:
    "1px solid rgba(0,0,0,.05)",
};

const btnDangerStyle = {
  background:
    "linear-gradient(135deg,#ef4444,#dc2626)",
  color: "#fff",
  border: "none",
  borderRadius: 12,
  padding: "9px 14px",
  fontSize: 11,
  fontWeight: 700,
  cursor: "pointer",
};