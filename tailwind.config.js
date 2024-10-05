// tailwind.config.js
module.exports = {
  content: ["./index.html"], // Updated to use index.html
  theme: {
    fontSize: {
      "h2": "54px",
      "h3": "30px",
      "p": "16px"
    },
    extend: {
      colors: {
        pinkGradientStart: '#ff459f',
        pinkGradientEnd: '#ff9532',
        orangeGradient: '#ff9532',
        yellow: '#ffd700',
        limeGreen: '#32cd32',
        blue: '#1e90ff',
        purple: '#8a2be2',
        darkGray: '#444444',
        loginGradientStart: '#fb5283',
        loginGradientEnd: '#ff3527',
        lightGray: '#a1a1a1',
        darkGrayText: '#707070',
        discount: '#ff3c6d',
        ratingGray: '#707070',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
        custom: ['"Your Custom Font"', 'sans-serif'],
        trebunchet: ["Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", "Arial", "sans-serif"]
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(90deg, #ff459f, #ff9532, #ffd700, #32cd32, #1e90ff, #8a2be2, #ff459f)',
        'login-gradient': 'linear-gradient(to right, #fb5283, #ff3527)',
        'scroll-gradient': 'linear-gradient(145deg, #ff459f, #ff6062)',
        'color-box-gradient': 'linear-gradient(#ff459f, #ff9532)',
        'pink-orange-gradient': 'linear-gradient(to right, #ff3527, #fb5283, #ffd700)',
        'buyNow-gradient': 'linear-gradient(to right, #ff3527, #fb5283, #ffd700)',
        'color-box-gradient': 'linear-gradient(#ff459f, #ff9532)',
      },
      keyframes: {
        rainbow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulse: {
          '0%': { boxShadow: '0 5px 15px rgba(255, 69, 159, 0.4)' },
          '50%': { boxShadow: '0 5px 15px rgba(255, 69, 159, 0.7)' },
          '100%': { boxShadow: '0 5px 15px rgba(255, 69, 159, 0.4)' },
        }
      },
      animation: {
        rainbow: 'rainbow 5s linear infinite',
        pulse: 'pulse 1.5s infinite',
      },
    },
  },
  plugins: [],
};