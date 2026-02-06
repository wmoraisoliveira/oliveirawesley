import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Usando domínio customizado (oliveirawesley.com), o site é servido na raiz.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
