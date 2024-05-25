/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'lbg': "url('/assets/pl.png')",
          'pbg': "url('/assets/pp.png')",
          'p1bg': "url('/assets/LATC1.jpeg')",
          'p3bg': "url('/assets/Agb1.jpeg')",
          'p4bg': "url('/assets/koro1.jpeg')",
          'p2bg': "url('/assets/Otuan1.jpg')",

      },
    },
  },
  plugins: [],
};
