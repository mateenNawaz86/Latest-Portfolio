/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        geist: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "inner-custom":
          "inset 5px 5px 4.1px rgba(0,0,0,0.1), inset -5px -5px 7.4px rgba(255,255,255,0.2)",
      },
    },
  },
  plugins: [],
};
