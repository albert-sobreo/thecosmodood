// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//     modules: ['@nuxtjs/tailwindcss']
// })
import { fileURLToPath } from "node:url"
import fs from 'fs'
export default defineNuxtConfig({
    devServer: {
        host: "thecosmodood.com",
        port: 443,
        https: {
            key: fs.readFileSync('/etc/letsencrypt/live/thecosmodood.com/privkey.pem').toString(),
            cert: fs.readFileSync('/etc/letsencrypt/live/thecosmodood.com/fullchain.pem').toString()
        }
    }
})