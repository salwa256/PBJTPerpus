import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({

  plugins:[

    react(),

    VitePWA({

      registerType:"autoUpdate",

      includeAssets:[
        "splashscreen.png"
      ],

      devOptions:{
        enabled:true
      },

      workbox:{
        skipWaiting:true,
        clientsClaim:true
      },

      manifest:{

        name:"PBJT",

        short_name:"PBJT",

        theme_color:"#5b3df5",

        background_color:"#ffffff",

        display:"standalone",

        icons:[

          {
            src:"icon.png",
            sizes:"192x192",
            type:"image/png"
          },

          {
            src:"icon.png",
            sizes:"512x512",
            type:"image/png"
          }

        ]

      }

    })

  ],

  build:{

    outDir:"dev-dist",

    emptyOutDir:true,

    assetsDir:"assets"

  }

});