import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})