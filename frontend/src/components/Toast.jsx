// ═══════════════════════════════════════════════════════
// components/Toast.jsx
// Notifikasi kecil yang muncul di pojok kanan bawah.
// ═══════════════════════════════════════════════════════

export default function Toast({ message, type, visible }) {
  const bgColor =
    type === "ok" ? "#15803d" : type === "err" ? "#e24b4a" : "#4f46e5";
  const icon = type === "ok" ? "✓" : type === "err" ? "✕" : "ℹ";

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        background: bgColor,
        color: "#fff",
        borderRadius: 12,
        padding: "13px 20px",
        fontSize: 13,
        fontWeight: 500,
        maxWidth: 320,
        zIndex: 9999,
        transform: visible ? "translateY(0)" : "translateY(100px)",
        opacity: visible ? 1 : 0,
        transition: "all 0.3s cubic-bezier(.175,.885,.32,1.275)",
        pointerEvents: "none",
      }}
    >
      {icon} {message}
    </div>
  );
}
