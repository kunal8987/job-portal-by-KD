/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      lora: ["Lora", 'serif'], //paragraph
      merry: ['Merriweather', 'serif'], //heading
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "sm": "2rem",
        "lg": "4rem",
        "xl": "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
