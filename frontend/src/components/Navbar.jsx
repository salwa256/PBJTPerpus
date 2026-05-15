// ═══════════════════════════════════════════════════════
// components/Navbar.jsx
// ═══════════════════════════════════════════════════════

import { Link, useLocation } from "react-router-dom";

import home from "../assets/home.png";
import borrow from "../assets/borrow.png";
import search from "../assets/search.png";
import returnIcon from "../assets/return.png";
import addbooks from "../assets/addbooks.png";
import rekomen from "../assets/rekomen.png";
import out from "../assets/keluar.png";
import anggota from "../assets/anggota.png";
import chatbot from "../assets/chatbot.png";

const TABS = [

  {
    id: "home",
    label: "Beranda",
    icon: home,
    path: "/",
    roles: ["admin"],
  },

  {
    id: "carianggota",
    label: "Cari Anggota",
    icon: search,
    path: "/carianggota",
    roles: ["admin", "petugas"],
  },

  {
    id: "borrow",
    label: "Peminjaman",
    icon: borrow,
    path: "/borrow",
    roles: ["admin", "petugas"],
  },

  {
    id: "return",
    label: "Pengembalian",
    icon: returnIcon,
    path: "/return",
    roles: ["admin", "petugas"],
  },

  {
    id: "search",
    label: "Cari Buku",
    icon: search,
    path: "/search",
    roles: ["admin", "petugas"],
  },

  {
    id: "rekomendasi",
    label: "Rekomendasi Buku",
    icon: rekomen,
    path: "/rekomendasi",
    roles: ["admin", "petugas"],
  },

  {
    id: "chatbot",
    label: "Asisten Perpus",
    icon: chatbot,
    path: "/chatbot",
    roles: ["admin", "petugas"],
  },

  {
    id: "members",
    label: "Tambah Anggota",
    icon: anggota,
    path: "/members",
    roles: ["admin"],
  },

  {
    id: "books",
    label: "Tambah Koleksi Buku",
    icon: addbooks,
    path: "/books",
    roles: ["admin"],
  },

];

export default function Navbar({
  username,
  role,
  onLogout,
  sidebarOpen,
  setSidebarOpen,
}) {

  const location =
    useLocation();

  const sidebarStyle = `

 
  `;

  return (
    <>

      <style>{sidebarStyle}</style>

      {/* TOGGLE */}

      <button
        onClick={() =>
          setSidebarOpen(
            !sidebarOpen
          )
        }
        style={{
          position: "fixed",

          top: 16,

          left:
            sidebarOpen
              ? 220
              : 70,

          zIndex: 300,

          background:
            "#4f46e5",

          color: "#fff",

          border: "none",

          borderRadius: 10,

          width: 36,

          height: 36,

          cursor: "pointer",

          transition:
  "all .4s cubic-bezier(.175,.885,.32,1.1)",

          boxShadow:
            "0 8px 18px rgba(79,70,229,0.3)",
        }}
      >

        {sidebarOpen
          ? "←"
          : "→"}

      </button>

      {/* SIDEBAR */}

      <div
        style={{
          position: "fixed",

          top: 0,

          left: 0,

          width:
            sidebarOpen
              ? 220
              : 70,

          height: "100vh",

          background: "#fff",

          borderRight:
            "1px solid rgba(0,0,0,0.08)",

          padding: 16,

          transition:
            "all 0.3s ease",

          zIndex: 200,

          overflow: "visible",

          boxShadow:
            "0 0 30px rgba(0,0,0,0.03)",
        }}
      >

        {/* HEADER */}

        <div
          style={{
            marginBottom: 24,

            display: "flex",

            alignItems: "center",

            gap: 10,

            minHeight: 40,
          }}
        >

          {sidebarOpen && (

            <div>

              <div
                style={{

                  fontSize: 18,

                  marginLeft: 45,

                  marginTop: 30,
                  marginBottom: 15,
                }}
              >
                PBJT Perpus
              </div>

            </div>

          )}

        </div>

        {/* MENU */}

        <div
          style={{
            display: "flex",

            flexDirection:
              "column",

            gap: 4,

            fontSize: 12,
          }}
        >

          {TABS
            .filter((tab) =>
              tab.roles.includes(
                role
              )
            )
            .map((tab) => {

              const active =
                location.pathname ===
                tab.path;

              return (

                <Link
                  key={tab.id}

                  to={tab.path}

                  className={
                    active
                      ? "sidebar-active"
                      : ""
                  }

                  style={{
                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      sidebarOpen
                        ? "flex-start"
                        : "center",

                    gap:
                      sidebarOpen
                        ? 12
                        : 0,

                    padding: "12px",

                    textDecoration:
                      "none",

                    transition:
                      ".25s ease",

                    background:
                      active
                        ? "#dcdbec"
                        : "transparent",

                    marginRight:
                      active
                        ? "-16px"
                        : "0",

                    paddingRight:
                      active
                        ? "14px"
                        : "16px",

                    borderRadius:
                      active
                        ? "20px 0 0 20px"
                        : "18px",

                    color:
                      active
                        ? "#170ebb"
                        : "#333",

                    fontWeight:
                      active
                        ? 700
                        : 500,

                    whiteSpace:
                      sidebarOpen
                        ? "normal"
                        : "nowrap",

                    wordWrap:
                      "break-word",

                    overflow:
                      "visible",

                    minHeight: 24,

                    position:
                      "relative",

                    zIndex:
                      active
                        ? 2
                        : 1,

                    boxShadow:
                      active
                        ? "0 10px 25px rgba(0,0,0,.08)"
                        : "none",
                  }}
                >

                  {/* ICON */}

                  <span
                    style={{
                      fontSize: 8,

                      minWidth: 24,

                      textAlign:
                        "center",

                      flexShrink: 0,
                    }}
                  >

                    <img
                      src={tab.icon}

                      alt={tab.label}

                      style={{
                        width: 20,

                        height: 20,

                        objectFit:
                          "contain",
                      }}
                    />

                  </span>

                  {/* TEXT */}

                  {sidebarOpen && (

                    <span
                      style={{
                        flex: 1,

                        lineHeight:
                          1.3,
                      }}
                    >
                      {tab.label}
                    </span>

                  )}

                </Link>

              );

            })}

        </div>

        {/* USER */}

        <div
          style={{
            position: "absolute",

            bottom: 20,

            left: 16,

            right: 16,
          }}
        >

          {/* USER INFO */}

          <div
            style={{
              display: "flex",

              alignItems:
                "center",

              gap: 10,

              marginBottom: 12,
            }}
          >

            {/* AVATAR */}

            <div
              style={{
                width: 38,

                height: 38,

                borderRadius:
                  "50%",

                background:
                  "linear-gradient(135deg,#4f46e5,#7c3aed)",

                color: "#fff",

                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                fontWeight: 700,

                flexShrink: 0,
              }}
            >

              {username
                ?.substring(0, 2)
                .toUpperCase()}

            </div>

            {/* USERNAME */}

            {sidebarOpen && (

              <div>

                <div
                  style={{

                    fontSize: 13,
                  }}
                >
                  {username}
                </div>

                <div
                  style={{
                    fontSize: 11,

                    color: "#777",

                    textTransform:
                      "capitalize",
                  }}
                >
                  {role}
                </div>

              </div>

            )}

          </div>

          {/* LOGOUT */}

          <button
            onClick={onLogout}
            style={{
              width: "100%",

              border: "none",

              background:
                "linear-gradient(135deg,#ef4444,#dc2626)",

              color: "#fff",

              padding:
                "10px 12px",

              borderRadius: 10,

              cursor: "pointer",

              fontWeight: 600,

              transition:
                "0.2s",
            }}
          >

            {sidebarOpen
              ? "Keluar"
              : (

                <img
                  src={out}

                  alt="Logout"

                  style={{
                    width: 18,

                    height: 18,

                    objectFit:
                      "contain",
                  }}
                />

              )}

          </button>

        </div>

      </div>

    </>
  );

}