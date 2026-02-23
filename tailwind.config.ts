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
        primary: '#bef264',
        'primary-foreground': '#1e1e24',
        secondary: '#33333d',
        'secondary-foreground': '#cbd5e1',
        muted: '#33333d',
        'muted-foreground': '#94a3b8',
        accent: '#d9f99d',
        'accent-foreground': '#1e1e24',
        border: '#33333d',
        ring: '#bef264',
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
