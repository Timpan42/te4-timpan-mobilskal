import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/te4-mobilskal/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                product: resolve(__dirname, 'pages/products.html'),
                shell: resolve(__dirname, 'pages/shell.html'),
                cart: resolve(__dirname, 'pages/cart.html'),
                contact: resolve(__dirname, 'pages/contact.html')

            }
        }
    }
})