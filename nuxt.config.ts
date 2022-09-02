import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    head: {
        title: 'Vue.JS Technology & Blog Template',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
        ]
    },
    css: ['~/assets/css/tailwind.css', '~/assets/scss/style.scss'],
    router: {
        linkExactActiveClass: 'active-link',
    },
    modules: ['@pinia/nuxt', '@nuxtjs/google-fonts', '@nuxt/image-edge'],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    image: {
        presets: {
            test: {
                modifiers: {
                    format: 'webp',
                    width: 300,
                    height: 200
                }
            }
        },
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
    },
    googleFonts: {
        families: {
            Roboto: true
        }
    }
})
