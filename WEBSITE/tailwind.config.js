module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        back: '#020303',
        originalBack: '#0c0c0c'
      },
      backgroundImage: {
        'pic1': "url('./assets/slidingCards/pic1.png')",
        'pic2': "url('./assets/slidingCards/pic2.png')",
        'pic3': "url('./assets/slidingCards/pic3.png')",
        'origin': "url('./assets/original.png')",
        'adventure': "url('./assets/genre/1.jpg')",
        'comedy': "url('./assets/genre/comedy.jpg')",
        'drama': "url('./assets/genre/drama.jpg')",
        'horror': "url('./assets/genre/horror.jpg')",
        'romantic': "url('./assets/genre/romantic.jpg')",
        'scifi': "url('./assets/genre/Scifi.jpeg')",
        'creator': "url('./assets/creators_back.jpg')",
      },
    },
    fontFamily: {
      original: ['Source Sans Pro', 'sans-serif'],
    }
  },
  plugins: [],
}
