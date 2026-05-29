import React,{useEffect,useState} from "react";
import { Link,useLocation } from "react-router-dom";

import logo from "../assets/logo.png";

import { Icon }
from "@iconify/react";

const TABS=[

  {
    id: "home",
    label: "Dashboard",
    icon: "material-symbols:dashboard",
    path: "/",
    roles: ["admin"],
  },

{
id:"carianggota",
label:"Cari Anggota",
icon:"mingcute:user-search-fill",
path:"/carianggota",
roles:["admin","petugas"]
},

{
id:"borrow",
label:"Peminjaman",
icon:"solar:user-id-bold",
path:"/borrow",
roles:["admin","petugas"]
},

{
id:"return",
label:"Pengembalian",
icon:"solar:book-bookmark-bold",
path:"/return",
roles:["admin","petugas"]
},

{
id:"search",
label:"Cari Buku",
icon:"garden:search-fill-12",
path:"/search",
roles:["admin","petugas"]
},

{
id:"rekomendasi",
label:"Rekomendasi Buku",
icon:"solar:star-bold",
path:"/rekomendasi",
roles:["admin","petugas"]
},

{
id:"chatbot",
label:"Asisten Perpus",
icon:"tabler:message-chatbot-filled",
path:"/chatbot",
roles:["admin","petugas"]
},

{
id:"members",
label:"Tambah Anggota",
icon:"solar:users-group-rounded-bold",
path:"/members",
roles:["admin"]
},

{
id:"books",
label:"Tambah Koleksi Buku",
icon:"solar:library-bold",
path:"/books",
roles:["admin"]
}

];
export default function Navbar({

username,
role,
onLogout,
sidebarOpen,
setSidebarOpen

}){

const location=useLocation();

const [isMobile,setIsMobile]=
useState(
window.innerWidth<=768
);

useEffect(()=>{

const handleResize=()=>{

const mobile=
window.innerWidth<=768;

setIsMobile(mobile);

if(mobile){

setSidebarOpen(false);

}

};

window.addEventListener(
"resize",
handleResize
);

return()=>{

window.removeEventListener(
"resize",
handleResize
);

};

},[setSidebarOpen]);


const sidebarStyle=`

::-webkit-scrollbar{

width:6px;

}

::-webkit-scrollbar-thumb{

background:#ddd;

border-radius:20px;

}

`;

return(

<>

<style>
{sidebarStyle}
</style>


<button

onClick={()=>
setSidebarOpen(
!sidebarOpen
)
}

style={{

position:"fixed",

top:16,

left:
sidebarOpen
?(isMobile?16:220)
:16,

zIndex:999,

background:"#2f35d7",

color:"#fff",

border:"none",

borderRadius:30,

width:38,

height:38,

cursor:"pointer",

boxShadow:
"0 8px 18px rgba(79,70,229,.3)",

transition:
".3s"

}}

>

{sidebarOpen
?"←"
:"→"}

</button>


<div

style={{

position:"fixed",

top:0,

left:0,

width:

isMobile

?(sidebarOpen?220:0)

:(sidebarOpen?220:70),

height:"100vh",

background:"#fff",

borderRight:
"1px solid rgba(0,0,0,.08)",

padding:16,

zIndex:200,

display:"flex",

flexDirection:"column",

overflow:"hidden",

transition:
".3s",

transform:

isMobile&&!sidebarOpen

?"translateX(-100%)"

:"translateX(0)",

opacity:

isMobile&&!sidebarOpen

?0

:1,

boxShadow:
"0 0 30px rgba(0,0,0,.03)"

}}

>


<div
style={{

marginBottom:24,

minHeight:40

}}
>

{sidebarOpen&&(

<div
style={{

marginLeft:70,

marginTop:20,

display:"flex",

alignItems:"center",

gap:12

}}
>

<img
  src={logo}
  alt="PBJT Perpus"
  style={{
    width: 50,
    height: 50,
    objectFit: "contain",
  }}
/>

</div>

)}

</div>


<div

style={{

display:"flex",

flexDirection:"column",

gap:4,

fontSize:12,

flex:1,

overflowY:"auto",

paddingBottom:20

}}

>

{TABS
.filter(tab=>
tab.roles.includes(role)
)

.map(tab=>{

const active=
location.pathname===
tab.path;

return(

<Link

key={tab.id}

to={tab.path}

style={{

display:"flex",

alignItems:"center",

justifyContent:
sidebarOpen
?"flex-start"
:"center",

gap:
sidebarOpen
?12
:0,

padding:"12px",

textDecoration:
"none",

background:
active
?"#dcdbec"
:"transparent",

borderRadius:
active
?"10px 10px 10px 10px"
:"30px",

color:
active
?"#170ebb"
:"#333",

fontWeight:
active
?700
:500,

marginRight:0

}}

>

<Icon

icon={tab.icon}

style={{

fontSize:20,

color:
active
?"#170ebb"
:"#050505",

flexShrink:0,

display:"block"

}}

/>
{sidebarOpen&&(

<span>

{tab.label}

</span>

)}

</Link>

)

})}

</div>


<div

style={{

marginTop:"auto",

paddingTop:12,

borderTop:
"1px solid rgba(0,0,0,.08)"

}}

>

<div

style={{

display:"flex",

alignItems:"center",

gap:10,

marginBottom:12

}}

>

<div

style={{

width:38,
height:38,

borderRadius:"50%",

background:
"linear-gradient(135deg,#4f46e5,#7c3aed)",

display:"flex",

justifyContent:"center",

alignItems:"center",

color:"#fff"

}}

>

{username
?.substring(0,2)
.toUpperCase()}

</div>

{sidebarOpen&&(

<div>

<div>
{username}
</div>

<div
style={{
fontSize:11,
color:"#777"
}}
>

{role}

</div>

</div>

)}

</div>

<button

onClick={onLogout}

style={{

width:"100%",

border:"none",

background:
"linear-gradient(135deg,#ef4444,#dc2626)",

padding:"10px",

color:"#fff",

borderRadius:10

}}

>

{sidebarOpen
?"Keluar"
:
<Icon
icon="solar:logout-2-bold"
width="20"
height="20"
color="#fff"
/>
}

</button>

</div>

</div>

</>

)

}