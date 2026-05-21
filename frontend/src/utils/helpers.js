// ═══════════════════════════════════════════════════════
// utils/helpers.js
// Fungsi-fungsi kecil yang dipakai di banyak tempat.
// ═══════════════════════════════════════════════════════

/**
 * Format tanggal ke format Indonesia.
 * Contoh: "2024-12-25" → "25 Des 2024"
 */
export function formatDate(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/**
 * Mengembalikan tanggal hari ini dan 7 hari ke depan
 * dalam format YYYY-MM-DD (sesuai input type="date").
 */
export function getTodayAndDueDate() {
  const today = new Date().toISOString().split("T")[0];
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 7);
  return {
    today,
    due: dueDate.toISOString().split("T")[0],
  };
}
