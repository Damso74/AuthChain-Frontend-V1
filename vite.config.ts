import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://authchain-frontend-v1-git-main-damso74s-projects.vercel.app/' : './',
  plugins: [react()],
})
