import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#1e1e24',
        foreground: '#F8FAFC',
        card: '#2a2a32',
        'card-foreground': '#F8FAFC',
        primary: '#84cc16',
        'primary-foreground': '#1e1e24',
        secondary: '#33333d',
        'secondary-foreground': '#cbd5e1',
        muted: '#33333d',
        'muted-foreground': '#94a3b8',
        accent: '#a3e635',
        'accent-foreground': '#1e1e24',
        border: '#33333d',
        ring: '#84cc16',
        // Sample color options
        'lime-electric': '#84cc16',
        'lime-neon': '#bef264',
        'lime-sage': '#65a30d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
