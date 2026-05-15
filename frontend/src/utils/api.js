// ═══════════════════════════════════════════════════════
// utils/api.js
// Semua komunikasi dengan backend ada di sini.
// Kalau URL backend berubah, cukup ganti di sini saja.
// ═══════════════════════════════════════════════════════

const API_URL = "https://project-7ixze.vercel.app";

/**
 * Fungsi utama untuk memanggil API.
 * @param {string} path   - endpoint, contoh: '/books'
 * @param {string} method - 'GET', 'POST', 'DELETE', dll
 * @param {object} body   - data yang dikirim (opsional)
 */
export async function apiFetch(path, method = "GET", body = null) {
  const opts = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (body) {
    opts.body = JSON.stringify(body);
  }

  const response = await fetch(API_URL + path, opts);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Terjadi kesalahan");
  }

  return data;
}
