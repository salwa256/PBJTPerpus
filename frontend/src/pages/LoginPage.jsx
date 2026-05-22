// ═══════════════════════════════════════════════════════
// pages/LoginPage.jsx
// Modern Responsive Glassmorphism Login
// ═══════════════════════════════════════════════════════

import { useState } from "react";

import perpusImg from "../assets/logo.png";

import bg2 from "../assets/bg2.png";

import { apiFetch } from "../utils/api";
import { Icon }
from "@iconify/react";

export default function LoginPage({
  onLogin,
  showToast,
  setLoader,
}) {

  const [username,setUsername] =
    useState("");

  const [password,setPassword] =
    useState("");

  async function handleLogin(){

    if(
      !username ||
      !password
    ){

      showToast(
        "Isi username dan password",
        "err"
      );

      return;

    }

    setLoader(
      true,
      "Masuk..."
    );

    try{

      const data =
        await apiFetch(
          "/login",
          "POST",
          {
            username,
            password,
          }
        );

      onLogin(data);

      showToast(
        "Selamat datang, "
        + username +
        "!",
        "ok"
      );

    }catch(e){

      showToast(
        e.message ||
        "Login gagal",
        "err"
      );

    }finally{

      setLoader(false);

    }

  }

  function handleKeyDown(e){

    if(
      e.key==="Enter"
    ){

      handleLogin();

    }

  }

  return(

<>
<style>{`

*{
box-sizing:border-box;
margin:0;
padding:0;
}

/* ========================= */
/* ANIMATION */
/* ========================= */

.login-card{

animation:
fadeUp .8s ease;

position:relative;

overflow:hidden;

}

.login-card::before{

content:"";

position:absolute;

width:220px;
height:220px;

background:
rgba(255,255,255,.08);

border-radius:50%;

top:-80px;
right:-80px;

filter:blur(10px);

}

.login-card::after{

content:"";

position:absolute;

width:180px;
height:180px;

background:
rgba(255,255,255,.06);

border-radius:50%;

bottom:-70px;
left:-70px;

filter:blur(10px);

}

@keyframes fadeUp{

from{

opacity:0;

transform:
translateY(40px);

}

to{

opacity:1;

transform:
translateY(0);

}

}


/* ========================= */
/* INPUT */
/* ========================= */

.input-group{

position:relative;

margin-bottom:22px;

}

.input-icon{

position:absolute;

left:18px;
top:50%;

transform:
translateY(-50%);

font-size:18px;

color:
rgba(255,255,255,.7);

z-index:2;

}

.login-input{

width:100%;

background:
rgba(255,255,255,.06);

border:
1px solid rgba(255,255,255,.14);

border-radius:18px;

padding:
18px 18px 18px 52px;

color:#fff;

font-size:15px;

outline:none;

transition:.25s;

backdrop-filter:blur(10px);

}

.login-input:focus{

border-color:#8bb8ff;

box-shadow:
0 0 0 4px
rgba(139,184,255,.15);

background:
rgba(255,255,255,.08);

}

.input-label{

position:absolute;

left:52px;

top:17px;

color:
rgba(255,255,255,.65);

pointer-events:none;

transition:.25s;

font-size:14px;

}

.login-input:focus + .input-label,

.login-input:not(:placeholder-shown)
+ .input-label{

top:-10px;

left:16px;

background:
rgba(20,20,40,.8);

padding:2px 8px;

border-radius:999px;

font-size:11px;

color:#b8d7ff;

}


/* ========================= */
/* BUTTON */
/* ========================= */

.login-btn{

width:100%;

border:none;

border-radius:18px;

padding:16px;

background: rgb(47, 53, 215);

color:#fff;

font-size:16px;

font-weight:700;

cursor:pointer;

transition:.25s;

box-shadow:
0 12px 24px
rgba(79,70,229,.35);

margin-top:10px;

}

.login-btn:hover{

transform:
translateY(-2px);

box-shadow:
0 16px 32px
rgba(79,70,229,.45);

}

.login-btn:active{

transform:
scale(.98);

}


/* ========================= */
/* RESPONSIVE */
/* ========================= */

@media(max-width:1024px){

.login-card{

max-width:420px!important;

}

}

@media(max-width:768px){

.login-card{

padding:
40px 24px!important;

border-radius:24px!important;

}

.login-title{

font-size:32px!important;

}

.login-input{

padding:
16px 16px 16px 48px;

font-size:14px;

}

}

@media(max-width:480px){

.login-card{

padding:
34px 18px!important;

}

.login-title{

font-size:26px!important;

}

.login-input{

font-size:13px;

padding:
14px 14px 14px 45px;

}

.login-btn{

height:50px;

font-size:14px;

}

}

`}</style>

{/* ========================= */
/* MAIN */
/* ========================= */}

<div
style={{

minHeight:"100vh",

backgroundImage:
`url(${bg2})`,

backgroundSize:"cover",

backgroundPosition:"center",

display:"flex",

alignItems:"center",

justifyContent:"center",

padding:20,

position:"relative",

overflow:"hidden",

}}
>

{/* OVERLAY */}

<div
style={{

position:"absolute",

inset:0,

background:
"rgba(0,0,0,.35)",

backdropFilter:
"blur(3px)",

}}
/>


{/* ========================= */
/* LOGIN CARD */
/* ========================= */}

<div
className="login-card"

style={{

width:"100%",

maxWidth:450,

padding:"50px 40px",

borderRadius:28,

background:
"rgba(255,255,255,.12)",

border:
"1px solid rgba(255,255,255,.2)",

backdropFilter:
"blur(20px)",

WebkitBackdropFilter:
"blur(20px)",

boxShadow:
"0 8px 32px rgba(0,0,0,.3)",

position:"relative",

zIndex:2,

}}
>

{/* LOGO */}

<div
style={{

display:"flex",

justifyContent:"center",

marginBottom:24

}}
>

<img
src={perpusImg}
alt="logo"

style={{

width:
"clamp(90px,10vw,120px)",

height:"auto",

objectFit:"contain",

filter:
"drop-shadow(0 10px 20px rgba(0,0,0,.25))"

}}
/>

</div>


{/* TITLE */}

<h1
className="login-title"

style={{

textAlign:"center",

color:"#fff",

fontSize:42,

fontWeight:700,

marginBottom:10,

letterSpacing:1,

}}
>

LOGIN

</h1>

<p
style={{

textAlign:"center",

color:
"rgba(255,255,255,.75)",

marginBottom:40,

fontSize:14,

lineHeight:1.6

}}
>

Selamat Datang di Sistem
Informasi Perpustakaan Politeknik Baja Tegal

</p>


{/* USERNAME */}

<div className="input-group">

<div className="input-icon">

<Icon

icon="solar:user-rounded-bold"

style={{

fontSize:22,

color:"#fff",

opacity:.9

}}

/>

</div>
<input
className="login-input"

value={username}

onChange={(e)=>
setUsername(
e.target.value
)
}

onKeyDown={handleKeyDown}

placeholder=" "
/>

<label className="input-label">
Username
</label>

</div>


{/* PASSWORD */}

<div className="input-group">

<div className="input-icon">

<Icon

icon="solar:lock-password-bold"

style={{

fontSize:22,

color:"#fff",

opacity:.9

}}

/>

</div>
<input
type="password"

className="login-input"

value={password}

onChange={(e)=>
setPassword(
e.target.value
)
}

onKeyDown={handleKeyDown}

placeholder=" "
/>

<label className="input-label">
Password
</label>

</div>


{/* BUTTON */}

<button
className="login-btn"

onClick={handleLogin}
>

Masuk

</button>


{/* FOOTER */}

<p
style={{

marginTop:24,

textAlign:"center",

fontSize:12,

color:
"rgba(255,255,255,.6)"

}}
>

© PBJT Library System

</p>

</div>

</div>

</>

  );

}