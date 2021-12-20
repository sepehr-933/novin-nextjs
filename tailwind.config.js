module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '900px',
      'laptop': '1024px',
      'desktop': '1280px',
      'mobile': '600px'
    },
    colors: {
      'primary':'#063bbc',
      'secondary':'#ff7840',
      'primary__dark':'#35488b',
      'gray':'#666666',
      'black':'#000000',
      'white':'#ffffff',
      'light__gray':'#fafafa',
      'light__gray2':'#f0f0f0',
      'dark__gray':'#d0d0d0',
      'primary__light':'#35488b'
    },
  },
  plugins: [],
}