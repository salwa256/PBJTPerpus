import { useState, useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Hooks
import { useToast } from "./hooks/useToast";
import { useLoader } from "./hooks/useLoader";

// Components
import Toast from "./components/Toast";
import LoaderOverlay from "./components/LoaderOverlay";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

// Pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import BorrowPage from "./pages/BorrowPage";
import ReturnPage from "./pages/ReturnPage";
import BooksPage from "./pages/BooksPage";
import SearchBookPage from "./pages/SearchBookPage";
import RekomendasiPage from "./pages/rekomendasi";
import MembersPage from "./pages/MembersPage";
import Carianggota from "./pages/Carianggota";
import ChatBotPage from "./pages/ChatBotPage";

export default function App() {

  // SPLASH
  const [loading, setLoading] =
    useState(true);

  // SESSION
  const [session, setSession] =
    useState(null);

  // SIDEBAR
  const [
    sidebarOpen,
    setSidebarOpen
  ] = useState(
    window.innerWidth > 768
  );

  // MEMBER
  const [
    selectedMember,
    setSelectedMember
  ] = useState(null);

  // HOOKS
  const {
    toast,
    showToast
  } = useToast();

  const {
    loader,
    setLoader
  } = useLoader();

  // SPLASH EFFECT
  useEffect(() => {

    const timer =
      setTimeout(() => {

      setLoading(false);

    },2500);

    return () =>
      clearTimeout(timer);

  },[]);

  // RESPONSIVE SIDEBAR
  useEffect(()=>{

    const handleResize=()=>{

      if(
        window.innerWidth<=768
      ){

        setSidebarOpen(false);

      }else{

        setSidebarOpen(true);

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

  },[]);

  function handleLogin(data){

    setSession(data);

  }

  function handleLogout(){

    setSession(null);

    showToast(
      "Berhasil keluar",
      "info"
    );

  }

  // WAJIB setelah semua hook
  if(loading){

    return <SplashScreen/>

  }

  return (

<>
<style>{`

@import url(
'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
);

*{
box-sizing:border-box;
margin:0;
padding:0;
}

body{

font-family:
'Plus Jakarta Sans',
sans-serif;

background:#f5f4f0;

overflow-x:hidden;

}

a{
text-decoration:none;
}

`}</style>

<LoaderOverlay
visible={loader.visible}
message={loader.message}
/>

<Toast
message={toast.message}
type={toast.type}
visible={toast.visible}
/>

{!session&&(

<LoginPage
onLogin={handleLogin}
showToast={showToast}
setLoader={setLoader}
/>

)}

{session&&(

<BrowserRouter>

<Navbar
username={
session.username
}
onLogout={
handleLogout
}
sidebarOpen={
sidebarOpen
}
setSidebarOpen={
setSidebarOpen
}
role={session.role}
/>

<div

style={{

marginLeft:

window.innerWidth<=768

?0

:(sidebarOpen
?220
:70),

transition:
".3s",

padding:

window.innerWidth<=768
?15
:25,

minHeight:
"100vh",

width:

window.innerWidth<=768

?"100%"

:`calc(
100% - ${
sidebarOpen
?220
:70
}px
)`,

overflowX:
"hidden"

}}

>

<Routes>

<Route
path="/"
element={

session.role==="admin"

?

<HomePage
showToast={
showToast
}
setLoader={
setLoader
}
/>

:

<BorrowPage
session={
session
}
showToast={
showToast
}
setLoader={
setLoader
}
selectedMember={
selectedMember
}
/>

}
/>

<Route
path="/borrow"
element={
<BorrowPage
session={session}
showToast={showToast}
setLoader={setLoader}
selectedMember={selectedMember}
/>
}
/>

<Route
path="/return"
element={
<ReturnPage
showToast={showToast}
setLoader={setLoader}
/>
}
/>

<Route
path="/books"
element={

<BooksPage
showToast={
showToast
}
setLoader={
setLoader
}
/>

}
/>

<Route
path="/search"
element={
<SearchBookPage
showToast={
showToast
}
/>
}
/>

<Route
path="/rekomendasi"
element={
<RekomendasiPage
showToast={
showToast
}
setLoader={
setLoader
}
/>
}
/>

<Route
path="/members"
element={
<MembersPage
showToast={
showToast
}
setLoader={
setLoader
}
setSelectedMember={
setSelectedMember
}
/>
}
/>

<Route
path="/carianggota"
element={
<Carianggota
showToast={
showToast
}
setLoader={
setLoader
}
/>
}
/>

<Route
path="/chatbot"
element={
<ChatBotPage/>
}
/>

</Routes>

</div>

</BrowserRouter>

)}

</>

);

}