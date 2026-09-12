import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Config>{
  content: [
    './src/**/*.{js,ts,tsx,jsx,mdx}',
    './public/**/*.html',
  ],
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    extend: {
      maxWidth: {
        reading: '70ch',
      },
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: '#111111', // near‑black
        secondary: '#F5F5F0', // warm off‑white
        accent: '#00aeac', // brand green/teal accent
        emerald: {
          50: '#e6f7f7',
          100: '#c2eff0',
          200: '#99e5e4',
          300: '#66d7d5',
          400: '#33c9c6',
          500: '#00aeac',
          600: '#00aeac',
          700: '#00a29f',
          800: '#008280',
          900: '#006160',
          950: '#003b3a',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', ...defaultTheme.fontFamily.sans],
        body: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        display: ['clamp(2.5rem,7vw,9.5rem)', { lineHeight: '1.05' }],
        'section-title': ['clamp(2rem,5vw,6.5rem)', { lineHeight: '1.15' }],
        base: ['17px', { lineHeight: '1.6' }],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
