module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'neon-blue': '#3B27BA',
        'neon-blue-2': '#21006F',
        'neon-light-blue': '#450EFF',
        'neon-sky': '#027A9F',
        'neon-green': '#13CA91',
        'neon-violet': '#e100f5',
        'neon-violet-light': '#eb3cfc',
        'deep-red': '#330408',
        'deep-blue': '#111935',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      plex: ['IBM Plex Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
