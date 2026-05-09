import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Hooks
import { useToast } from "./hooks/useToast";
import { useLoader } from "./hooks/useLoader";

// Components
import Toast from "./components/Toast";
import LoaderOverlay from "./components/LoaderOverlay";
import Navbar from "./components/Navbar";

// Pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import BorrowPage from "./pages/BorrowPage";
import ReturnPage from "./pages/ReturnPage";
import BooksPage from "./pages/BooksPage";
import SearchBookPage from "./pages/SearchBookPage";
import RekomendasiPage from "./pages/rekomendasi";
import MembersPage from "./pages/MembersPage";
import Carianggota from "./pages/Carianggota";
import ChatBotPage from "./pages/ChatBotPage";

export default function App() {

  // ───────── SESSION ─────────

  const [session, setSession] =
    useState(null);

  // ───────── SIDEBAR ─────────

  const [
    sidebarOpen,
    setSidebarOpen
  ] = useState(true);

  // ───────── SELECTED MEMBER ─────────

  const [
    selectedMember,
    setSelectedMember
  ] = useState(null);

  // ───────── HOOKS ─────────

  const {
    toast,
    showToast
  } = useToast();

  const {
    loader,
    setLoader
  } = useLoader();

  // ───────── LOGIN ─────────

  function handleLogin(data) {

    setSession(data);

  }

  // ───────── LOGOUT ─────────

  function handleLogout() {

    setSession(null);

    showToast(
      "Berhasil keluar",
      "info"
    );

  }

  return (
    <>

      {/* ───────── GLOBAL STYLE ───────── */}

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {

          font-family:
            'Plus Jakarta Sans',
            sans-serif;

          background: #f5f4f0;

          color: #1a1a1a;

          font-size: 14px;

        }

        a {
          text-decoration: none;
        }

      `}</style>

      {/* ───────── GLOBAL COMPONENTS ───────── */}

      <LoaderOverlay
        visible={loader.visible}
        message={loader.message}
      />

      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
      />

      {/* ───────── LOGIN PAGE ───────── */}

      {!session && (

        <LoginPage
          onLogin={handleLogin}
          showToast={showToast}
          setLoader={setLoader}
        />

      )}

      {/* ───────── DASHBOARD ───────── */}

      {session && (

        <BrowserRouter>

          {/* ───────── SIDEBAR ───────── */}

          <Navbar
            username={session.username}
            onLogout={handleLogout}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={
              setSidebarOpen
            }
            role={session.role}
          />

          {/* ───────── CONTENT ───────── */}

          <div
            style={{
              marginLeft:
                sidebarOpen
                  ? 220
                  : 70,

              transition:
                "margin-left 0.3s ease",

              minHeight: "100vh",

              padding: 24,

              width:
                `calc(100% - ${
                  sidebarOpen
                    ? 220
                    : 70
                }px)`,
            }}
          >

            <Routes>

              {/* HOME */}

              <Route
                path="/"
                element={
                  session.role ===
                  "admin"
                    ? (
                      <HomePage
                        showToast={
                          showToast
                        }
                        setLoader={
                          setLoader
                        }
                      />
                    )
                    : (
                      <BorrowPage
                        session={
                          session
                        }
                        showToast={
                          showToast
                        }
                        setLoader={
                          setLoader
                        }
                        selectedMember={
                          selectedMember
                        }
                      />
                    )
                }
              />

              {/* BORROW */}

              <Route
                path="/borrow"
                element={
                  <BorrowPage
                    session={session}
                    showToast={
                      showToast
                    }
                    setLoader={
                      setLoader
                    }
                    selectedMember={
                      selectedMember
                    }
                  />
                }
              />

              {/* SEARCH */}

              <Route
                path="/search"
                element={
                  <SearchBookPage
                    showToast={
                      showToast
                    }
                    onSelectBook={(
                      book
                    ) => {

                      localStorage.setItem(
                        "selectedBook",
                        JSON.stringify(
                          book
                        )
                      );

                      window.location.href =
                        "/borrow";

                    }}
                  />
                }
              />

              {/* RETURN */}

              <Route
                path="/return"
                element={
                  <ReturnPage
                    showToast={
                      showToast
                    }
                    setLoader={
                      setLoader
                    }
                  />
                }
              />

              {/* BOOKS */}

              <Route
                path="/books"
                element={
                  session.role ===
                  "admin"
                    ? (
                      <BooksPage
                        showToast={
                          showToast
                        }
                        setLoader={
                          setLoader
                        }
                      />
                    )
                    : (
                      <div
                        style={{
                          background:
                            "#fff",

                          padding: 30,

                          borderRadius: 20,

                          textAlign:
                            "center",

                          fontWeight: 600,
                        }}
                      >
                        Tidak punya akses
                      </div>
                    )
                }
              />

              {/* REKOMENDASI */}

              <Route
                path="/rekomendasi"
                element={
                  <RekomendasiPage
                    showToast={
                      showToast
                    }
                    setLoader={
                      setLoader
                    }
                  />
                }
              />

              {/* MEMBERS */}

              <Route
                path="/members"
                element={
                  <MembersPage
                    showToast={
                      showToast
                    }
                    setLoader={
                      setLoader
                    }
                    setSelectedMember={
                      setSelectedMember
                    }
                  />
                }
              />

              {/* CARI ANGGOTA */}

              <Route
                path="/carianggota"
                element={
                  <Carianggota
                    showToast={
                      showToast
                    }
                    setLoader={
                      setLoader
                    }
                  />
                }
              />

              {/* CHATBOT */}

              <Route
                path="/chatbot"
                element={
                  <ChatBotPage />
                }
              />

            </Routes>

          </div>

        </BrowserRouter>

      )}

    </>
  );
}