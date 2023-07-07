/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html}", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0f172a",
        nightless: "#1e293b"
      }
    }
  }
}
