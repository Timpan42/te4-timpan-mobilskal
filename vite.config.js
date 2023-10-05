import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/te4-mobilskal/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // pages: resolve(__dirname, 'pages/about.html')
            }
        }
    }
})