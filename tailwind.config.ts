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
        accent: '#00A29F', // brand emerald/teal accent
        emerald: {
          50: '#e6f9f8',
          100: '#c1f0ef',
          200: '#8ee4e2',
          300: '#52d3d0',
          400: '#22bcba',
          500: '#00A29F',
          600: '#008280',
          700: '#006766',
          800: '#035251',
          900: '#074443',
          950: '#012727',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        roboto: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        lora: ['var(--font-lora)', ...defaultTheme.fontFamily.serif],
        serif: ['var(--font-lora)', ...defaultTheme.fontFamily.serif],
        body: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        outfit: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        inter: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
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
