import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({

plugins:[

react(),

VitePWA({

registerType:"autoUpdate",

includeAssets:[
"3.png"
],
devOptions:{
enabled:true
},
manifest:{

name:"Perpustakaan PBJT",

short_name:"PBJT",

description:
"Sistem Perpustakaan PBJT",

theme_color:"#5b3df5",

background_color:"#ffffff",

display:"standalone",

orientation:"portrait",

start_url:"/",

icons:[

{
src:"5.png",
sizes:"192x192",
type:"image/png"
},

{
src:"5.png",
sizes:"512x512",
type:"image/png"
}

]

}

})

]

});