/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)'],
        syne2: ['var(--font-syne2)'],
        jak: ['var(--font-jak)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'lbg': "url('/assets/sp.png')",
          'pbg': "url('/assets/pp.png')",
          'csf': "url('/csf.png')",
          'p1bg': "url('/assets/LATC1.jpeg')",
          'p3bg': "url('/assets/Agb1.jpeg')",
          'p4bg': "url('/assets/koro1.jpeg')",
          'p2bg': "url('/assets/Otuan1.jpg')",

      },

      animation: {
        'fade-in-up': 'fadeInUp 1s ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        stagger: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
      },
      animation: {
        shake: 'shake 1500s ',
        stagger: 'stagger 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
