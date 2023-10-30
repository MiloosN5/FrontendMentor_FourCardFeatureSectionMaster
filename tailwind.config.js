/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      's': '18.75rem', // [small] [300px]
      'd': '64rem' // [desktop] [1024px]
    },
    extend: {
      colors: {
        // primary
        'myRed': 'hsl(0, 78%, 62%)',
        'myCyan': 'hsl(180, 62%, 55%)',
        'myOrange': 'hsl(34, 97%, 64%)',
        'myBlue': 'hsl(212, 86%, 64%)',
        // neutral
        'VeryDarkBlue': 'hsl(234, 12%, 34%)',
        'GrayishBlue': 'hsl(229, 6%, 66%)',
        'VeryLightGray': 'hsl(0, 0%, 98%)'
      },
      fontFamily: {
        'Poppins': ['Poppins']
      },
      fontSize: {
        'h1': 'clamp(1.5625rem, 1.1rem + 1.92vw, 2.3125rem)', // [25px -> 37px] [clamp -> min[375] max[1000]]
        'h1--sub': 'clamp(1.5625rem, 1.1rem + 1.92vw, 2.3125rem)', // [25px -> 37px]
        'h4': '1.25rem', // [20px]
        'desc--1': '0.9375rem', // [15px]
        'desc--2': '0.8125rem' // [13px]
      },
      lineHeight: {
        'h1': 'clamp(2.375rem, 1.81rem + 2.4vw, 3.3125rem)', // [38px -> 53px]
        'h1--sub': 'clamp(2.375rem, 1.81rem + 2.4vw, 3.3125rem)', // [38px -> 53px]
        'h4': '1.5625rem', // [25px]
        'desc--1': '1.5625rem', // [25px]
        'desc--2': '1.375rem' // [22px]
      },
      letterSpacing: {
        'h1': '-0.015em', // [-1.5%]
        'h1--d': '-0.01em', // [-1%]
        'h1--sub': '-0.01em', // [-1%]
        'h1--sub--d': '-0.005em', // [-0.5%]
        'h4': '-0.005em', // [-0.5%]
        'desc--1': '0.005em', // [0.5%]
        'desc--2': '0.01em', // [1%]
        'desc--2--d': '0.005em' // [0.5%]
      },
      padding: {
        'body_X': '1rem', // [16px]
        'body_X--s': '2rem', // [32px]
        'body_T': '3.75rem', // [60px]
        'body_T--s': '5.125rem', // [82px]
        'h1_B': '0.9375rem', // [15px]
        'h1_B--d': '0.8125rem', // [13px]
        'h4_B': '0.375rem', // [6px]
        'h4_B--d': '0.75rem', // [12px]
        'card_X': '1.75rem', // [28px]
        'card_X--d': '2rem', // [32rem]
        'card_T': '1.5rem', // [24px]
        'card_T--d': '1.75rem', // [28px]
        'card_B': '1.75rem', // [28px]
        'card_B--d': '2rem' // [32px]
      },
      gap: {
        'page': '4.625rem', // [74px]
        'page--d': '3.9375rem', // [63px]
        'cards': '1.5rem', // [24px]
        'cards--d': '1.875rem' // [30px]
      },
      width: {
        'desc--d': '31.875rem' // [510px]
      },
      maxWidth: {
        'cards': '69.375rem', // [1110px]
        'icon': '3.625rem', // [58px]
        'icon--d': '4.0625rem', // [65px]
      },
      height: {
        'indicator': '0.3125rem', // [5px]
        'card': '13.9375rem', // [223px]
        'card--d': '15.625rem' // [250px]
      },
      maxHeight: {
        'icon': '3.625rem', // [58px]
        'icon--d': '4.0625rem' // [65px]
      },
      boxShadow: {
        'card': '0 1.5625rem 2.5rem -0.625rem rgb(50 50 120 / 0.2);' // [0 25px 40px -10px rgb(50 50 120 / 0.2)]
      }
    },
  },
  plugins: [],
}

