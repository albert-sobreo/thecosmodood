// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//     modules: ['@nuxtjs/tailwindcss']
// })
import { fileURLToPath } from "node:url"
import fs from 'fs'
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-adsense'],
    'google-adsense': {
        id: 'ca-pub-1472925723025064'
    },
    devServer: {
        host: "thecosmodood.com",
        port: 443,
        https: {
            key: fs.readFileSync('/etc/letsencrypt/live/thecosmodood.com/privkey.pem').toString(),
            cert: fs.readFileSync('/etc/letsencrypt/live/thecosmodood.com/fullchain.pem').toString()
        }
    }
})

// HELLO THERE