export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-img': "url('./src/ust.png')",
      }
    },
  },
  plugins: [],
}