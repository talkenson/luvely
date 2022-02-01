import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Icons({ autoInstall: true, compiler: 'jsx', jsx: 'react' }),
    svgrPlugin({
      svgrOptions: {},
    }),
    react(),
  ],
})
