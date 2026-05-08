// ═══════════════════════════════════════════════════════
// components/StatusPill.jsx
// Badge berwarna untuk menampilkan status buku.
// ═══════════════════════════════════════════════════════

// Warna dan teks untuk setiap status
const STATUS_STYLES = {
  dipinjam:     { background: "#fef3c7", color: "#92400e", label: "Dipinjam" },
  terlambat:    { background: "#fee2e2", color: "#991b1b", label: "Terlambat" },
  tersedia:     { background: "#eaf3de", color: "#3b6d11", label: "Tersedia" },
  dikembalikan: { background: "#dbeafe", color: "#1e40af", label: "Dikembalikan" },
};

export default function StatusPill({ status }) {
  const style = STATUS_STYLES[status] || {
    background: "#f3f4f6",
    color: "#6b7280",
    label: status,
  };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 600,
        background: style.background,
        color: style.color,
      }}
    >
      {style.label}
    </span>
  );
}
