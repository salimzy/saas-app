import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0d0b12',
        'purple-primary': '#8a5cf6',
        'purple-dark': '#3f2b6f',
        'pink-accent': '#ec4899',
        'blue-accent': '#06b6d4',
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(135deg, #8a5cf6, #ec4899)',
        'gradient-purple-blue': 'linear-gradient(135deg, #8a5cf6, #06b6d4)',
        'gradient-dark-vignette': 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(138, 92, 246, 0.5), 0 0 40px rgba(138, 92, 246, 0.3)',
        'glow-purple-lg': '0 0 40px rgba(138, 92, 246, 0.6), 0 0 80px rgba(138, 92, 246, 0.4)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'soft': '0 10px 30px rgba(0, 0, 0, 0.3)',
        'soft-lg': '0 20px 50px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.6s ease-out',
        gradient: 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'slide-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      transitionDuration: {
        300: '300ms',
      },
    },
  },
  plugins: [],
};

export default config;
