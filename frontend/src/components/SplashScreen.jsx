export default function SplashScreen() {

return(

<div
style={{

height:"100vh",

display:"flex",

justifyContent:"center",

alignItems:"center",

flexDirection:"column",

background:"#fff"

}}
>

<img
src="/splashscreen.png"

style={{

width:"clamp(300px,25vw,600px)",

height:"auto",

objectFit:"contain"

}}
/>

<h2
style={{

marginTop:"15px",

fontSize:"clamp(18px,2vw,30px)",

color:"#4f46e5"

}}
>


</h2>

</div>

)

}