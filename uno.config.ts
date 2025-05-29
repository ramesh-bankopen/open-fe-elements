import { defineConfig, presetUno, presetAttributify, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), // Default preset with Tailwind-like utilities
    presetAttributify(), // Enables attributify mode
    presetTypography(), // Typography utilities
  ],
  // Add custom rules if needed
  rules: [
    // Custom rule example: ['custom-rule', { color: 'red' }]
  ],
  // Add shortcuts for common patterns
  shortcuts: [
    // Shortcut example: ['btn', 'px-4 py-2 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50']
  ],
  // Configure theme
  theme: {
    colors: {
      // Custom colors
      primary: '#3b82f6',
      secondary: '#64748b',
    }
  },
  // Configure content detection
  content: {
    filesystem: [
      'src/**/*.{js,ts,jsx,tsx,html,lit}',
      'index.html'
    ]
  }
})