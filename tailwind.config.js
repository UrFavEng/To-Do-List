/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgClr: "#f4f4f4",
        hedingClr: "#0073e6",
        addBtn: "#4caf50",
        remvBtn: "#f44336",
        paraClr: "#333333",
      },
    },
  },
  plugins: [],
};
