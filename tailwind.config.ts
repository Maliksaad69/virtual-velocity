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
        primary: '#0f1a15', // deep near‑black green
        secondary: '#F5F6F2', // warm off‑white
        accent: '#178a66', // brand emerald accent
        emerald: {
          50: '#edf7f2',
          100: '#d3ede2',
          200: '#a7dbc6',
          300: '#74c3a5',
          400: '#40a583',
          500: '#178a66',
          600: '#106e51',
          700: '#0d5941',
          800: '#0b4735',
          900: '#09382a',
          950: '#041f17',
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
