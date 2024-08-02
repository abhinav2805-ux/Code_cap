import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({

  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173       // Optional: specify the port you want to use
  },

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
