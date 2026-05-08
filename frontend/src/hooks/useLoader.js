// ═══════════════════════════════════════════════════════
// hooks/useLoader.js
// Custom hook untuk mengelola loading overlay.
// ═══════════════════════════════════════════════════════

import { useState } from "react";

export function useLoader() {
  const [loader, setLoaderState] = useState({
    visible: false,
    message: "Memuat...",
  });

  /**
   * Tampilkan atau sembunyikan loader.
   * @param {boolean} visible  - true = tampil, false = sembunyi
   * @param {string}  message  - teks di bawah spinner
   */
  function setLoader(visible, message = "Memuat...") {
    setLoaderState({ visible, message });
  }

  return { loader, setLoader };
}
