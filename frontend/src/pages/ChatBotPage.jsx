import { useState } from "react";

function ChatBotPage() {

  const [messages, setMessages] =
    useState([]);

  const [input, setInput] =
    useState("");

  function handleSend() {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    setTimeout(() => {

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "Halo 😊 saya siap membantu rekomendasi buku dan layanan perpustakaan.",
        },
      ]);

    }, 700);

  }

  return (
    <>

      <style>{`

        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          font-family:
            'Plus Jakarta Sans',
            sans-serif
        }

        .ai-page{

          min-height:100vh;

          background:#f5f5f7;

          display:flex;

          flex-direction:column;

          justify-content:center;

          align-items:center;

          padding:40px 30px 20px;

        }

        .hero{

          text-align:center;

          margin-bottom:50px;

          animation:
            fadeUp .5s ease;

        }

        .hero h1{

          font-size:48px;

          margin-bottom:12px;

          color:#111;

          font-weight:700;

        }

        .hero p{

          color:#777;

          font-size:17px;

        }

        @keyframes fadeUp{

          from{

            opacity:0;

            transform:
              translateY(20px);

          }

          to{

            opacity:1;

            transform:
              translateY(0);

          }

        }

        .chat-box{

          width:100%;
          max-width:950px;

        }

        .messages{

          display:flex;

          flex-direction:column;

          gap:18px;

          margin-bottom:30px;

          max-height:50vh;

          overflow-y:auto;

        }

        .msg-wrap{

          display:flex;

        }

        .msg-wrap.user{

          justify-content:flex-end;

        }

        .msg-wrap.bot{

          justify-content:flex-start;

        }

        .msg{

          max-width:70%;

          padding:16px 20px;

          border-radius:22px;

          font-size:14px;

          line-height:1.7;

          animation:
            fadeMessage .3s ease;

        }

        @keyframes fadeMessage{

          from{

            opacity:0;

            transform:
              translateY(10px);

          }

          to{

            opacity:1;

            transform:
              translateY(0);

          }

        }

        .msg.user{

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #4f46e5
            );

          color:white;

          border-bottom-right-radius:8px;

          box-shadow:
            0 10px 25px
            rgba(79,70,229,.25);

        }

        .msg.bot{

          background:white;

          color:#222;

          border:
            1px solid #eee;

          border-bottom-left-radius:8px;

          box-shadow:
            0 10px 25px
            rgba(0,0,0,.04);

        }

        .input-area{

          background:white;
          border:
            2px solid #4f46e5;

          border-radius:999px;

          padding:5px;

          display:flex;

          align-items:center;

          gap:10px;

          box-shadow:
            0 10px 30px
            rgba(79,70,229,.12);

        }

        .input-area input{

          flex:1;

          border:none;

          outline:none;

          background:none;

          padding:14px 16px;

          font-size:15px;

        }

        .send-btn{

          width:52px;

          height:52px;

          border:none;

          border-radius:50%;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #4f46e5
            );

          color:white;

          cursor:pointer;

          font-size:18px;

          transition:.2s;

        }

        .send-btn:hover{

          transform:scale(1.06);

        }

        @media(max-width:768px){

          .hero h1{

            font-size:32px;

          }

          .hero p{

            font-size:14px;

          }

          .msg{

            max-width:90%;

          }

          .input-area{

            border-radius:24px;

          }

        }

      `}</style>

      <div className="ai-page">

        {/* HERO */}

        {messages.length === 0 && (

          <div className="hero">

            <h1>
              Selamat Datang di Asisten <br />Perpus PBJT
            </h1>

            <p>
              Temukan buku yang sempurna untuk kamu hari ini.
            </p>

          </div>

        )}

        {/* CHAT */}

        <div className="chat-box">

          <div className="messages">

            {messages.map((m, i) => (

              <div
                key={i}
                className={`msg-wrap ${m.sender}`}
              >

                <div
                  className={`msg ${m.sender}`}
                >
                  {m.text}
                </div>

              </div>

            ))}

          </div>

          {/* INPUT */}

          <div className="input-area">

            <input
              placeholder="Ask Anything"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  handleSend();

                }

              }}
            />

            <button
              className="send-btn"
              onClick={handleSend}
            >
              ➤
            </button>

          </div>

        </div>

      </div>

    </>
  );
}

export default ChatBotPage;