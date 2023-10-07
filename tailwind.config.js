/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html}", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        celeste: "#84fab0",
        yellow: "#d4fc79",
        green: "#96e6a1",
        red: "#f5576c",
        pink: "#f093fb",
        night: "#0f172a",
        nightless: "#1e293b"
      }
    }
  }
}
