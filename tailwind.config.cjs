module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#5eead4',
        card: '#0b1220',
        glass: 'rgba(255,255,255,0.03)',
        
      },
      fontFamily: {
        // This creates the utility class: font-pacifico
        pacifico: ['Pacifico', 'cursive'], 
      },
      // You can also define the custom background color here if you want:
      colors: {
        'pale-beige': '#FCF6F4', 
      }
    },
  },
  plugins: [],
}
