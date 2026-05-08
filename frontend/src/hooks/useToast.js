// ═══════════════════════════════════════════════════════
// hooks/useToast.js
// Custom hook untuk mengelola notifikasi toast.
// Dipakai di App.jsx dan diteruskan ke semua halaman.
// ═══════════════════════════════════════════════════════

import { useState, useRef, useCallback } from "react";

export function useToast() {
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "info", // 'ok' | 'err' | 'info'
  });

  const timerRef = useRef(null);

  /**
   * Tampilkan toast. Otomatis hilang setelah 3.5 detik.
   * @param {string} message - teks yang ditampilkan
   * @param {string} type    - 'ok' (hijau), 'err' (merah), 'info' (biru)
   */
  const showToast = useCallback((message, type = "info") => {
    clearTimeout(timerRef.current);
    setToast({ visible: true, message, type });
    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3500);
  }, []);

  return { toast, showToast };
}
