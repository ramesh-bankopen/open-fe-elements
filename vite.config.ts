import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { presetAttributify, presetTypography } from 'unocss';
import presetWind3 from '@unocss/preset-wind3';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      mode  : 'shadow-dom',
      configFile : './uno.config.ts',
      presets: [
        presetWind3(),
        presetAttributify(), // Enables attributify mode
        presetTypography(),
      ],
    }),
  ],
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
