/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6d9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "reverse-spin": "reverse-spin 8s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      backgroundImage: {
        circularLight:
          "background: repeating-radial-gradient(rgba(0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
      },
    },
  },
  plugins: [],
};
