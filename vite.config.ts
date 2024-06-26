import { defineConfig, splitVendorChunkPlugin } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: [
      { find: '@/Assets', replacement: '/src/assets' },
      { find: '@/Components', replacement: '/src/components' },
      { find: '@', replacement: '/src' },
      { find: '~', replacement: '/tests' }
    ],
  }
})
