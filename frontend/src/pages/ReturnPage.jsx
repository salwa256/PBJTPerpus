// ═══════════════════════════════════════════════════════
// pages/ReturnPage.jsx
// Pengembalian modern + animasi hidup
// ═══════════════════════════════════════════════════════

import Tesseract from "tesseract.js";
import {
  useState,
  useEffect,
  useRef,
} from "react";

import { apiFetch } from "../utils/api";
import { formatDate } from "../utils/helpers";

import FormField, {
  inputStyle,
} from "../components/FormField";

export default function ReturnPage({
  showToast,
  setLoader,
}) {

  // ───────── STATE ─────────

  const [camStream, setCamStream] =
    useState(null);

  const [scanLabel, setScanLabel] =
    useState(
      "Aktifkan kamera terlebih dahulu"
    );

  const [isScanning, setIsScanning] =
    useState(false);

  const [detectedBook, setDetectedBook] =
    useState(null);

  const [manualId, setManualId] =
    useState("");

  const videoRef = useRef(null);
  const scanIntervalRef = useRef(null);

  // ───────── INIT ─────────

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  useEffect(() => {
    if (!camStream) {
      return;
    }

    if (scanIntervalRef.current) {
      return;
    }

    scanIntervalRef.current = setInterval(() => {
      if (
        camStream &&
        !isScanning &&
        !detectedBook
      ) {
        captureAndDetect();
      }
    }, 5000);

    return () => {
      if (scanIntervalRef.current) {
        clearInterval(scanIntervalRef.current);
        scanIntervalRef.current = null;
      }
    };
  }, [camStream, isScanning, detectedBook]);

  // ───────── CAMERA ─────────

  async function startCamera() {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
          },
        });

      videoRef.current.srcObject =
        stream;

      setCamStream(stream);

      setScanLabel(
        "Arahkan ke cover buku"
      );

      showToast("Kamera aktif", "ok");

      setTimeout(() => {
        if (
          videoRef.current &&
          !isScanning &&
          !detectedBook
        ) {
          captureAndDetect();
        }
      }, 1200);

    } catch (e) {

      showToast(
        "Gagal akses kamera: " +
        e.message,
        "err"
      );

    }
  }

  function stopCamera() {

    if (camStream) {

      camStream
        .getTracks()
        .forEach((t) => t.stop());

      if (videoRef.current) {
        videoRef.current.srcObject =
          null;
      }

      setCamStream(null);
      setDetectedBook(null);

      if (scanIntervalRef.current) {
        clearInterval(scanIntervalRef.current);
        scanIntervalRef.current = null;
      }

      setScanLabel(
        "Aktifkan kamera terlebih dahulu"
      );
    }
  }

  // ───────── OCR ─────────

  async function captureAndDetect() {

    const video = videoRef.current;

    const canvas =
      document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas
      .getContext("2d")
      .drawImage(video, 0, 0);

    setIsScanning(true);

    setDetectedBook(null);

    setScanLabel(
      "Membaca cover buku..."
    );

    try {

      const {
        data: { text },
      } = await Tesseract.recognize(
        canvas,
        "ind"
      );

      const scannedText =
        text.toLowerCase().trim();

      if (!scannedText) {

        throw new Error(
          "Tidak ada teks terbaca"
        );
      }

      setScanLabel(
        "Mencari buku..."
      );

      const activeLoans =
        await apiFetch(
          "/loans/active"
        );

      const matched =
        activeLoans.find((loan) => {

          const title =
            loan.book_title.toLowerCase();

          const firstWord =
            title.split(" ")[0];

          return (
            scannedText.includes(title) ||
            scannedText.includes(firstWord)
          );
        });

      if (matched) {

        setDetectedBook(matched);

        setScanLabel(
          "✓ Buku berhasil dideteksi"
        );

        showToast(
          "Buku berhasil dideteksi",
          "ok"
        );

      } else {

        setScanLabel(
          "Buku tidak ditemukan"
        );

        showToast(
          "Buku tidak ditemukan",
          "err"
        );
      }

    } catch (e) {

      setScanLabel(
        "Gagal membaca cover"
      );

      showToast(
        "Gagal memindai: " +
        e.message,
        "err"
      );

    } finally {

      setIsScanning(false);

    }
  }

  // ───────── RETURN ─────────

  async function processReturn(
    bookId
  ) {

    setLoader(
      true,
      "Memproses pengembalian..."
    );

    try {

      const r = await apiFetch(
        "/loans/return",
        "POST",
        {
          book_id: bookId,
        }
      );

      showToast(r.message, "ok");

      setDetectedBook(null);

      setScanLabel(
        "Arahkan ke cover buku"
      );

    } catch (e) {

      showToast(e.message, "err");

    } finally {

      setLoader(false);

    }
  }

  async function handleManualReturn() {

    if (!manualId.trim()) {

      showToast(
        "Masukkan ID buku",
        "err"
      );

      return;
    }

    await processReturn(
      manualId.trim()
    );

    setManualId("");
  }

  // ───────── UI ─────────

  return (
    <>
      {/* ───────── ANIMATION STYLE ───────── */}

      <style>{`

        .return-page {
          animation: fadePage .5s ease;
        }

        @keyframes fadePage {

          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .modern-card {
          transition: .25s ease;
        }

        .modern-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 18px 34px rgba(0,0,0,.08);
        }

        .modern-btn {
          transition: .2s;
        }

        .modern-btn:hover {
          transform: scale(1.03);
          opacity: .95;
        }

        .modern-input {
          transition: .2s;
        }

        .modern-input:focus {
          border-color:
            #4f46e5 !important;

          box-shadow:
            0 0 0 4px
            rgba(79,70,229,.12);
        }

        .scan-frame {
          animation:
            pulse 2s infinite;
        }

        @keyframes pulse {

          0% {
            box-shadow:
              0 0 0 0
              rgba(124,58,237,.4);
          }

          70% {
            box-shadow:
              0 0 0 18px
              rgba(124,58,237,0);
          }

          100% {
            box-shadow:
              0 0 0 0
              rgba(124,58,237,0);
          }

        }

        .floating-card {
          animation:
            floatCard 3s ease-in-out infinite;
        }

        @keyframes floatCard {

          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }

          100% {
            transform: translateY(0);
          }

        }

        @media (max-width: 900px) {

          .return-grid {
            grid-template-columns:
              1fr !important;
          }

        }

      `}</style>

      <div
        className="return-page return-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "1.1fr .9fr",
          gap: 24,
        }}
      >

        {/* ───────── LEFT ───────── */}

        <div
          className="modern-card"
          style={{
            background:
              "rgba(255,255,255,.92)",
            backdropFilter:
              "blur(12px)",
            border:
              "1px solid rgba(255,255,255,.4)",
            borderRadius: 28,
            padding: 30,
            boxShadow:
              "0 10px 30px rgba(0,0,0,.05)",
          }}
        >

          {/* HEADER */}

          <div
            style={{
              marginBottom: 24,
            }}
          >

            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Pengembalian Buku
            </div>

            <div
              style={{
                fontSize: 14,
                color: "#666",
                lineHeight: 1.7,
              }}
            >
              Scan cover buku atau input manual.
            </div>

          </div>

          {/* VIDEO */}

          <div
            style={{
              position: "relative",
              borderRadius: 26,
              overflow: "hidden",
              background: "#111",
              aspectRatio: "4/3",
              marginBottom: 24,
            }}
          >

            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* SCANNER */}

            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >

              <div
                className="scan-frame"
                style={{
                  width: 200,
                  height: 200,
                  border:
                    "3px solid rgba(124,58,237,.9)",
                  borderRadius: 20,
                  position: "relative",
                }}
              >

                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                      "linear-gradient(90deg,transparent,#7c3aed,transparent)",
                    animation:
                      "scan 1.8s linear infinite",
                  }}
                />

              </div>

              <div
                style={{
                  marginTop: 14,
                  background:
                    "rgba(0,0,0,.55)",
                  color: "#fff",
                  padding:
                    "8px 16px",
                  borderRadius: 999,
                  fontSize: 13,
                }}
              >
                {scanLabel}
              </div>

            </div>

          </div>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent:
                "center",
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >

            {!camStream && (

              <button
                onClick={startCamera}
                className="modern-btn"
                style={
                  btnPrimaryStyle
                }
              >
                ▶ Aktifkan Kamera
              </button>

            )}

            {camStream && (
              <>
                <button
                  onClick={stopCamera}
                  className="modern-btn"
                  style={
                    btnOutlineStyle
                  }
                >
                  ⏹ Stop
                </button>

                <button
                  onClick={
                    captureAndDetect
                  }
                  className="modern-btn"
                  style={
                    btnPrimaryStyle
                  }
                >
                  Scan Buku
                </button>
              </>
            )}

          </div>

          {/* LOADING */}

          {isScanning && (

            <div
              style={{
                textAlign: "center",
                padding: 30,
                color: "#666",
              }}
            >

              <div
                style={{
                  width: 34,
                  height: 34,
                  border:
                    "3px solid #e5e7eb",
                  borderTopColor:
                    "#4f46e5",
                  borderRadius:
                    "50%",
                  animation:
                    "spin .7s linear infinite",
                  margin:
                    "0 auto 14px",
                }}
              />

              AI sedang menganalisis
              gambar...

            </div>

          )}

          {/* LOADING */}

          {isScanning && (

            <div
              style={{
                textAlign: "center",
                padding: 30,
                color: "#666",
              }}
            >

              <div
                style={{
                  width: 34,
                  height: 34,
                  border:
                    "3px solid #e5e7eb",
                  borderTopColor:
                    "#4f46e5",
                  borderRadius:
                    "50%",
                  animation:
                    "spin .7s linear infinite",
                  margin:
                    "0 auto 14px",
                }}
              />

              AI sedang menganalisis
              gambar...

            </div>

          )}

        </div>

        {/* ───────── RIGHT ───────── */}

        <div
          className="modern-card"
          style={{
            background:
              "rgba(255,255,255,.92)",
            backdropFilter:
              "blur(12px)",
            border:
              "1px solid rgba(255,255,255,.4)",
            borderRadius: 28,
            padding: 30,
            boxShadow:
              "0 10px 30px rgba(0,0,0,.05)",
            height: "fit-content",
          }}
        >

          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            Manual Return
          </div>

          <div
            style={{
              fontSize: 14,
              color: "#666",
              lineHeight: 1.7,
              marginBottom: 22,
            }}
          >
            Gunakan jika scan kamera
            gagal mendeteksi buku.
          </div>

          <FormField label="ID Buku">

            <input
              value={manualId}
              onChange={(e) =>
                setManualId(
                  e.target.value
                )
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                handleManualReturn()
              }
              placeholder="Contoh: BOOK-001"
              style={{
                ...inputStyle,
                borderRadius: 14,
                padding: 14,
              }}
              className="modern-input"
            />

          </FormField>

          <button
            onClick={
              handleManualReturn
            }
            className="modern-btn"
            style={{
              ...btnPrimaryStyle,
              width: "100%",
              marginTop: 20,
            }}
          >
            Proses Pengembalian
          </button>

          {detectedBook && (

            <div
              className="floating-card"
              style={{
                background:
                  "linear-gradient(135deg,#ecfdf5,#dcfce7)",
                border:
                  "1px solid #86efac",
                borderRadius: 22,
                padding: 22,
                marginTop: 24,
              }}
            >

              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#15803d",
                  marginBottom: 18,
                }}
              >
                ✅ Buku Terdeteksi
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: 14,
                  marginBottom: 20,
                }}
              >

                {[
                  {
                    label:
                      "Judul Buku",
                    value:
                      detectedBook.book_title,
                  },

                  {
                    label:
                      "ID Buku",
                    value:
                      detectedBook.book_id,
                  },

                  {
                    label:
                      "Peminjam",
                    value:
                      detectedBook.borrower_name,
                  },

                  {
                    label:
                      "Jatuh Tempo",
                    value:
                      formatDate(
                        detectedBook.due_date
                      ),
                  },

                ].map((f) => (

                  <div
                    key={f.label}
                    style={{
                      background:
                        "#fff",
                      borderRadius: 14,
                      padding: 14,
                    }}
                  >

                    <div
                      style={{
                        fontSize: 11,
                        color: "#666",
                        marginBottom: 4,
                        textTransform:
                          "uppercase",
                      }}
                    >
                      {f.label}
                    </div>

                    <div
                      style={{
                        fontWeight: 700,
                      }}
                    >
                      {f.value}
                    </div>

                  </div>

                ))}

              </div>

              <button
                onClick={() =>
                  processReturn(
                    detectedBook.book_id
                  )
                }
                className="modern-btn"
                style={{
                  width: "100%",
                  background:
                    "#2f35d7",
                  color: "#fff",
                  border: "none",
                  borderRadius: 16,
                  padding:
                    "14px 18px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                ✔ Konfirmasi Pengembalian
              </button>

            </div>

          )}

        </div>

      </div>
    </>
  );
}

// ───────── STYLES ─────────

const btnPrimaryStyle = {
  background:
    "linear-gradient(135deg,#4f46e5,#7c3aed)",
  color: "#fff",
  border: "none",
  borderRadius: 14,
  padding: "13px 22px",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
};

const btnOutlineStyle = {
  background: "#f4f4f5",
  color: "#111",
  border:
    "1px solid rgba(0,0,0,.1)",
  borderRadius: 14,
  padding: "13px 22px",
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
};