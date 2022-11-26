/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
    mytheme: {
          
      "primary": "#8a82dd",
               
      "secondary": "#3082a0",
               
      "accent": "#2a77fc",
               
      "neutral": "#1B1C22",
               
      "base-100": "#322F37",
               
      "info": "#71C2DA",
               
      "success": "#19A955",
               
      "warning": "#F59A24",
               
      "error": "#DE402B",
               },
  },
  plugins: [require("daisyui")],
}
