/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#69E584",
        "primary-black": "#111111",
        "secondary-text": "#CDCBD1",
        "primary-white": "#FFFFFF",
        "primary-gray": "#151515",

      },
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        'flip-twice': 'flip 1s ease-in-out', // run the animation twice
      },
    },
  },
  plugins: [],
};
