import { defineConfig, } from 'unocss'

export default defineConfig({
  content : {
     pipeline: {
      include: [
        // Include .ts and .js files
        'src/**/*.{ts,js}',
      ],
    },
  }
})