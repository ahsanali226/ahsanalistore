import type { Config } from 'tailwindcss';

export default <Config>{
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C8963C', // Gold/Amber
        secondary: '#1A1A1A', // Near-Black
        bgLight: '#F5F5F0', // Off-white
        textPrimary: '#FFFFFF',
        textMuted: '#9A9A9A',
        accentRed: '#E74C3C',
        success: '#27AE60',
        border: '#2A2A2A',
      },
    },
  },
  plugins: [],
};
