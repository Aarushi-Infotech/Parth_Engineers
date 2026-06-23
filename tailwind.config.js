/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        industrial: {
          navy: '#0B1F3A',
          orange: '#FF6B00',
          gray: '#F5F7FA'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        panel: '0 20px 50px rgba(11, 31, 58, 0.12)'
      }
    }
  },
  plugins: []
};
