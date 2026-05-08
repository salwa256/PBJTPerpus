// ═══════════════════════════════════════════════════════
// components/FormField.jsx
// Wrapper untuk label + input agar tampilannya konsisten
// di semua form (peminjaman, tambah buku, dll).
// ═══════════════════════════════════════════════════════

export default function FormField({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label
        style={{
          display: "block",
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: ".05em",
          color: "#666",
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

// Style input/select yang dipakai di semua form
// Diekspor agar bisa dipakai langsung: style={inputStyle}
export const inputStyle = {
  width: "100%",
  background: "#f0efeb",
  border: "1px solid rgba(0,0,0,0.2)",
  borderRadius: 8,
  padding: "10px 12px",
  fontSize: 13,
  fontFamily: "inherit",
  color: "#1a1a1a",
  outline: "none",
};
