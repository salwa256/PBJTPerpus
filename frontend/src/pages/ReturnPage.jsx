// ═══════════════════════════════════════════════════════
// src/pages/ReturnPage.jsx
// FINAL SUPER FLEXIBLE OCR + INPUT MANUAL
// ═══════════════════════════════════════════════════════

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Tesseract
from "tesseract.js";

import {
  apiFetch,
} from "../utils/api";

import { Icon }
from "@iconify/react";

import {
  formatDate,
} from "../utils/helpers";

export default function ReturnPage({
  showToast,
  setLoader,
}) {

  // ───────── STATE ─────────

  const videoRef =
    useRef(null);

  const canvasRef =
    useRef(null);

  const [member, setMember] =
    useState(null);

  const [loans, setLoans] =
    useState([]);

  const [scanning, setScanning] =
    useState(false);

  const [manualNim, setManualNim] =
    useState("");

  // ───────── START CAMERA ─────────

  useEffect(() => {

    let stream;

    async function startCamera() {

      try {

        stream =
          await navigator
            .mediaDevices
            .getUserMedia({
              video: {
                facingMode:
                  "environment",
              },
              audio: false,
            });

        if (videoRef.current) {

          videoRef.current.srcObject =
            stream;

        }

      } catch (e) {

        console.error(e);

        showToast(
          "Camera tidak bisa diakses",
          "err"
        );

      }

    }

    startCamera();

    return () => {

      if (stream) {

        stream
          .getTracks()
          .forEach(
            (track) =>
              track.stop()
          );

      }

    };

  }, []);

  // ───────── FETCH DATA ─────────

  async function fetchLoans(
    nim
  ) {

    try {

      setLoader(
        true,
        "Mengambil data..."
      );

      const data =
        await apiFetch(
          "/member-loans/" +
          nim
        );

      if (!data.length) {

        showToast(
          "Tidak ada peminjaman aktif",
          "err"
        );

        return;

      }

      setMember(data[0]);

      setLoans(data);

      showToast(
        "Data ditemukan",
        "ok"
      );

    } catch (e) {

      console.error(e);

      showToast(
        e.message ||
        "Data tidak ditemukan",
        "err"
      );

    } finally {

      setLoader(false);

    }

  }

  // ───────── FORMAT NIM ─────────

  function formatNim(
    raw
  ) {

    // HAPUS SEMUA SELAIN ANGKA
    const digits =
      raw.replace(/\D/g, "");

    // FORMAT:
    // 23190024
    // MENJADI:
    // 23.1.9.0024

    if (
      digits.length === 8
    ) {

      return (
        `${digits.slice(0,2)}.` +
        `${digits.slice(2,3)}.` +
        `${digits.slice(3,4)}.` +
        `${digits.slice(4)}`
      );

    }

    return raw;

  }

  // ───────── OCR SCAN ─────────

  async function scanCard() {

    try {

      setScanning(true);

      const video =
        videoRef.current;

      const canvas =
        canvasRef.current;

      const ctx =
        canvas.getContext("2d");

      canvas.width =
        video.videoWidth;

      canvas.height =
        video.videoHeight;

      // FILTER AGAR OCR LEBIH AKURAT
      ctx.filter =
        "grayscale(100%) contrast(200%)";

      ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );

      showToast(
        "Membaca kartu...",
        "ok"
      );

      // OCR
      const result =
        await Tesseract
          .recognize(
            canvas,
            "eng"
          );

      const text =
        result.data.text;

      console.log(
        "OCR TEXT:",
        text
      );

      // HAPUS SPASI
      const cleanedText =
        text.replace(/\s/g, "");

      // DETEKSI NIM
      const nimMatch =

        // FORMAT:
        // 23190024
        cleanedText.match(
          /\d{8}/
        )

        ||

        // FORMAT:
        // 23.19.0024
        cleanedText.match(
          /\d{2}\.\d{2}\.\d{4}/
        )

        ||

        // FORMAT:
        // 23.1.9.0024
        cleanedText.match(
          /\d{2}\.\d\.\d\.\d{4}/
        );

      if (!nimMatch) {

        showToast(
          "NIM tidak ditemukan",
          "err"
        );

        setScanning(false);

        return;

      }

      // FORMAT OTOMATIS
      let nim =
        formatNim(
          nimMatch[0]
        );

      console.log(
        "FORMAT NIM:",
        nim
      );

      // AUTO ISI INPUT
      setManualNim(nim);

      // FETCH DATA
      await fetchLoans(
        nim
      );

    } catch (e) {

      console.error(e);

      showToast(
        "Gagal scan kartu",
        "err"
      );

    } finally {

      setScanning(false);

    }

  }

  // ───────── SEARCH MANUAL ─────────

  async function searchManual() {

    if (!manualNim) {

      showToast(
        "Masukkan NIM",
        "err"
      );

      return;

    }

    const formattedNim =
      formatNim(
        manualNim
      );

    setManualNim(
      formattedNim
    );

    await fetchLoans(
      formattedNim
    );

  }

  // ───────── RETURN BOOK ─────────

  async function processReturn(
    bookId
  ) {

    try {

      setLoader(
        true,
        "Memproses pengembalian..."
      );

      const response =
        await apiFetch(
          "/loans/return",
          "POST",
          {
            book_id: bookId,
          }
        );

      showToast(
        response.message,
        "ok"
      );

      // UPDATE UI
      const updatedLoans =
        loans.filter(
          (loan) =>
            loan.book_id !==
            bookId
        );

      setLoans(
        updatedLoans
      );

      // KOSONGKAN MEMBER
      if (
        updatedLoans.length === 0
      ) {

        setMember(null);

      }

    } catch (e) {

      console.error(e);

      showToast(
        "Gagal mengembalikan buku",
        "err"
      );

    } finally {

      setLoader(false);

    }

  }

  // ───────── UI ─────────

  return (
    <>
      <style>{`

        .return-page {

          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 24px;

        }

        .card {

          background: #fff;

          border-radius: 28px;

          padding: 28px;

          box-shadow:
            0 10px 30px
            rgba(0,0,0,.05);

        }

        .scan-btn {

          width: 100%;

          padding: 16px;

          border: none;

          border-radius: 16px;

          background:
            #2f35d7;

          color: white;

          font-size: 16px;

          font-weight: 700;

          cursor: pointer;

          transition: .2s;

          margin-top: 16px;

        }

        .scan-btn:hover {

          transform:
            scale(1.02);

        }

        .manual-input {

          width: 100%;

          padding: 14px;

          border:
            1px solid #ddd;

          border-radius: 14px;

          font-size: 15px;

          margin-top: 18px;

          outline: none;

        }

        .book-card {

          border:
            1px solid #eee;

          border-radius: 18px;

          padding: 18px;

          margin-top: 18px;

        }

        .return-btn {

          width: 100%;

          padding: 14px;

          border: none;

          border-radius: 14px;

          background:
            #2f35d7;

          color: white;

          font-weight: 700;

          cursor: pointer;

          margin-top: 14px;

        }

        @media
        (max-width:900px) {

          .return-page {

            grid-template-columns:
              1fr;

          }

        }

      `}</style>

      <div className="return-page">

        {/* LEFT */}

        <div className="card">


          <p
            style={{
              color: "#666",
              marginBottom: 20,
            }}
          >
            Scan kartu anggota
            atau masukkan NIM secara manual.
          </p>

          {/* CAMERA */}

          <div
            style={{
              border:
                "2px dashed #c4b5fd",

              borderRadius: 24,

              overflow: "hidden",

              padding: 10,

              background:
                "#faf5ff",
            }}
          >

            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{
                width: "100%",
                borderRadius: 18,
              }}
            />

          </div>

          {/* HIDDEN CANVAS */}

          <canvas
            ref={canvasRef}
            style={{
              display: "none",
            }}
          />

          {/* BUTTON OCR */}

          <button
            onClick={scanCard}
            className="scan-btn"
            disabled={scanning}
            style={{
              opacity:
                scanning
                  ? .7
                  : 1,
            }}
          >

            <div
style={{

display:"flex",

alignItems:"center",

justifyContent:"center",

gap:8

}}
>

<Icon
icon="solar:camera-bold"
width="22"
height="22"
/>

{scanning
? "Membaca Kartu..."
: "Scan Kartu"}

</div>
          </button>

          {/* INPUT MANUAL */}

          <input
            type="text"
            className="manual-input"
            placeholder="23.1.9.0000"
            value={manualNim}
            onChange={(e) =>
              setManualNim(
                e.target.value
              )
            }
          />

          {/* BUTTON MANUAL */}

          <button
            onClick={searchManual}
            className="scan-btn"
          >
<div
style={{

display:"flex",

alignItems:"center",

justifyContent:"center",

gap:8

}}
>

<Icon
icon="hugeicons:search-02"
width="20"
height="20"
/>

Cari Manual

</div>          </button>

        </div>

        {/* RIGHT */}

        <div className="card">

          {!member && (

            <div
              style={{
                textAlign: "center",
                marginTop: 100,
                color: "#777",
              }}
            >

              <Icon

icon="solar:book-bold"

style={{

fontSize:80,

color:"#4f46e5",

marginBottom:12

}}

/>
              <h2>
                Belum Ada Data Peminjam
              </h2>


            </div>

          )}

          {/* MEMBER */}

          {member && (

            <>

              <div
                style={{
                  marginBottom: 24,
                }}
              >

                <h2>
                  {member.borrower_name}
                </h2>

                <p
                  style={{
                    color: "#666",
                  }}
                >
                  NIM:
                  {" "}
                  {member.nim}
                </p>

              </div>

              {/* BOOK LIST */}

              {loans.map(
                (loan) => (

                  <div
                    key={loan.id}
                    className="book-card"
                  >

                    <h3>
                      {loan.book_title}
                    </h3>

                    <p
                      style={{
                        color:
                          "#666",

                        marginTop: 8,
                      }}
                    >
                      Jatuh tempo:
                      {" "}
                      {formatDate(
                        loan.due_date
                      )}
                    </p>

                    <button
                      onClick={() =>
                        processReturn(
                          loan.book_id
                        )
                      }
                      className="return-btn"
                    >
<div
style={{

display:"flex",

alignItems:"center",

justifyContent:"center",

gap:8

}}
>

<Icon
icon="solar:book-bookmark-bold"
width="20"
height="20"
/>

Kembalikan Buku

</div>                    </button>

                  </div>

                )
              )}

            </>

          )}

        </div>

      </div>

    </>
  );

}