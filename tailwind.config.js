/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b98708',
          dark: '#946b05',
          light: '#d9a62a',
        },
        ink: '#292929',
        body: '#565656',
        muted: '#8a8a8a',
      },
      fontFamily: {
        sans: ['Urbanist', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-home': "url('/images/home-header-bg.png')",
        'estate': "url('/images/estate-bg-img.png')",
        'featured': "url('/images/featured-bg.png')",
        'agency': "url('/images/exp-bg-img.png')",
        'dream': "url('/images/list-black-img.png')",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        ring: {
          '0%': { opacity: '0.55', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.9)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.45s ease-out both',
        float: 'float 3.5s ease-in-out infinite',
        ring: 'ring 2.4s ease-out infinite',
        'slow-zoom': 'slow-zoom 2.4s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      boxShadow: {
        card: '0 1px 6px 0 rgba(171, 169, 169, 0.35)',
        'card-hover': '0 18px 40px -12px rgba(41, 41, 41, 0.22)',
      },
    },
  },
  plugins: [],
};
