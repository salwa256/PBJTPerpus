# 📚 Perpustakaan Digital — React

Aplikasi sistem perpustakaan yang dikonversi dari vanilla HTML ke React.

---

## 📁 Struktur Folder

```
src/
│
├── App.jsx                  ← Komponen utama (root)
│
├── utils/
│   ├── api.js               ← Semua pemanggilan API (fetch)
│   └── helpers.js           ← Fungsi bantu: format tanggal, dll
│
├── hooks/
│   ├── useToast.js          ← Custom hook untuk notifikasi toast
│   └── useLoader.js         ← Custom hook untuk loading overlay
│
├── components/              ← Komponen UI yang dipakai berulang
│   ├── Toast.jsx            ← Notifikasi pojok kanan bawah
│   ├── LoaderOverlay.jsx    ← Overlay loading saat proses API
│   ├── StatusPill.jsx       ← Badge berwarna untuk status buku
│   ├── FormField.jsx        ← Label + input yang konsisten
│   └── Navbar.jsx           ← Topbar + navigasi tab
│
└── pages/                   ← Satu file = satu halaman/tab
    ├── LoginPage.jsx        ← Halaman login
    ├── HomePage.jsx         ← Beranda: statistik + tabel peminjaman
    ├── BorrowPage.jsx       ← Form peminjaman + pencarian buku
    ├── ReturnPage.jsx       ← Scan kamera (OCR) + pengembalian manual
    └── BooksPage.jsx        ← Tambah & lihat koleksi buku
```

---

## 🔧 Setup

1. Buat project React baru:
   ```bash
   npm create vite@latest perpustakaan -- --template react
   cd perpustakaan
   ```

2. Install dependencies:
   ```bash
   npm install
   npm install tesseract.js
   ```

3. Tambahkan Tesseract CDN di `index.html` (sebelum `</body>`):
   ```html
   <script src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"></script>
   ```

4. Salin semua file dari folder `src/` ini ke folder `src/` project kamu.

5. Ganti isi `src/main.jsx` menjadi:
   ```jsx
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import App from './App'
   ReactDOM.createRoot(document.getElementById('root')).render(<App />)
   ```

6. Jalankan backend di `http://localhost:8000`, lalu:
   ```bash
   npm run dev
   ```

---

## 💡 Penjelasan Singkat

| File | Isi |
|------|-----|
| `utils/api.js` | Kalau URL backend berubah, cukup edit di sini |
| `hooks/useToast.js` | Logika toast dipisah agar tidak duplikat |
| `components/` | Komponen kecil yang dipakai di banyak halaman |
| `pages/` | Setiap tab punya file sendiri, mudah diedit |
| `App.jsx` | Hanya mengatur "siapa yang ditampilkan" |
