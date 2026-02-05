import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In GitHub Actions, use the repository name as base path (e.g. /Oliveira-Wesley/).
// In local development, base is '/' so the app works without a prefix.
const base =
  process.env.GITHUB_REPOSITORY != null
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
