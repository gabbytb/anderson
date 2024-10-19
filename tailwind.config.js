/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    backgroundPosition: {
      'double-center': 'center center',
    },
    extend: {   
      backgroundImage: {              
        'fp': "url('/src/assets/img/allcard.png')",    
      },
      flex: {
        '33': '0 0 33.33333%',
        '55': '0 0 50%',
      },
      maxWidth: {
        '8xl': '33.33333%',
        '9xl': '50%',
      },
      minHeight: {
        '128': '90vh',    
      },        
    },
  },
  plugins: [],
}

