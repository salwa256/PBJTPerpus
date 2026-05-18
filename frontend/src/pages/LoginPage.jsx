// ═══════════════════════════════════════════════════════
// pages/LoginPage.jsx
// Login modern glassmorphism + animasi
// ═══════════════════════════════════════════════════════

import { useState } from "react";
import perpusImg from "../assets/pltkbaja.png";
import { apiFetch } from "../utils/api";

export default function LoginPage({ onLogin, showToast, setLoader }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!username || !password) {
      showToast("Isi username dan password", "err");
      return;
    }

    setLoader(true, "Masuk...");

    try {
      const data = await apiFetch("/login", "POST", {
        username,
        password,
      });

      onLogin(data);
      showToast("Selamat datang, " + username + "!", "ok");
    } catch (e) {
      showToast(e.message || "Login gagal", "err");
    } finally {
      setLoader(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleLogin();
  }

  return (
    <>
      {/* ───────── CSS ANIMATION ───────── */}
      <style>{`
        .login-card {
          animation: fadeUp 0.8s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .login-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 2px solid rgba(255,255,255,0.5);
          padding: 16px 4px 10px;
          color: #fff;
          font-size: 17px;
          outline: none;
          transition: 0.3s;
        }

        .login-input:focus {
          border-bottom: 2px solid #9bc7ff;
          box-shadow: 0 10px 25px rgba(124,180,255,0.3);
        }

        .input-group {
          position: relative;
          margin-bottom: 30px;
        }

        .input-label {
          position: absolute;
          left: 4px;
          top: 14px;
          color: rgba(255,255,255,0.7);
          pointer-events: none;
          transition: 0.3s;
          font-size: 16px;
        }

        .login-input:focus + .input-label,
        .login-input:not(:placeholder-shown) + .input-label {
          top: -10px;
          font-size: 12px;
          color: #b8d7ff;
        }

        .login-btn {
          width: 100%;
          border: none;
          border-radius: 30px;
          padding: 15px;
          background: #2f35d7;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s;
          box-shadow: 0 8px 24px rgba(79,124,255,0.4);
        }

        .login-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 28px rgba(79,124,255,0.55);
        }

        .login-btn:active {
          transform: scale(0.98);
        }

        @media (max-width: 640px) {
          .login-card {
            padding: 35px 24px !important;
          }

          .login-title {
            font-size: 32px !important;
          }
        }
      `}</style>

      {/* ───────── MAIN ───────── */}
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${perpusImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(3px)",
          }}
        />

        {/* ───────── LOGIN CARD ───────── */}
        <div
          className="login-card"
          style={{
            width: "100%",
            maxWidth: 450,
            padding: "50px 40px",
            borderRadius: 28,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* LOGO */}
          

          {/* TITLE */}
          <h1
            className="login-title"
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 42,
              fontWeight: 700,
              marginBottom: 10,
              letterSpacing: 1,
            }}
          >
            LOGIN
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.75)",
              marginBottom: 40,
              fontSize: 14,
            }}
          >
            Selamat Datang di Sistem Perpustakaan PBJT
          </p>

          {/* USERNAME */}
          <div className="input-group">
            <input
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder=" "
            />

            <label className="input-label">
              Username
            </label>
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder=" "
            />

            <label className="input-label">
              Password
            </label>
          </div>

          {/* BUTTON */}
          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          {/* FOOTER */}
          
        </div>
      </div>
    </>
  );
}