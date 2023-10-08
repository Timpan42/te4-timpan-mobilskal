import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/te4-mobilskal/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                pages: resolve(__dirname, 'pages/products.html'),
                pages: resolve(__dirname, 'pages/shell.html'),
                pages: resolve(__dirname, 'pages/cart.html'),
                pages: resolve(__dirname, 'pages/contact.html')

            }
        }
    }
})