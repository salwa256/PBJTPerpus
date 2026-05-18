// ═══════════════════════════════════════════════════════
// components/LoaderOverlay.jsx
// Overlay loading yang menutupi seluruh layar.
// Muncul saat sedang proses API (simpan, hapus, dll).
// ═══════════════════════════════════════════════════════

export default function LoaderOverlay({ visible, message }) {
  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(255,255,255,0.75)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 200,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: "30px 40px",
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
          {/* Spinner */}
          <div
            style={{
              width: 36,
              height: 36,
              border: "4px solid #e5e7eb",
              borderTopColor: "#4f46e5",
              borderRadius: "50%",
              animation: "spin 0.75s linear infinite",
              margin: "0 auto 14px",
            }}
          />
          <p style={{ fontSize: 13, color: "#666" }}>{message}</p>
        </div>
      </div>
    </>
  );
}
