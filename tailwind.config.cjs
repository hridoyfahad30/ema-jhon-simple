/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#2e56a0",
        
"secondary": "#cbadf4",
        
"accent": "#9ded7b",
        
"neutral": "#262432",
        
"base-100": "#F2F2F8",
        
"info": "#5F8ACE",
        
"success": "#196752",
        
"warning": "#E5AD15",
        
"error": "#F22821",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
