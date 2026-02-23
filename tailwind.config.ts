import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        foreground: '#F8FAFC',
        card: '#1E293B',
        'card-foreground': '#F8FAFC',
        primary: '#D97706',
        'primary-foreground': '#0F172A',
        secondary: '#334155',
        'secondary-foreground': '#CBD5E1',
        muted: '#334155',
        'muted-foreground': '#64748B',
        accent: '#F59E0B',
        'accent-foreground': '#0F172A',
        border: '#334155',
        ring: '#D97706',
        earth: '#92400E',
        copper: '#B45309',
        cream: '#FFFBEB',
        'red-angus': '#9A3412',
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
