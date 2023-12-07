/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const tabUtilities = {
        ".tab-down": {
          display: "flex",
          flexDirection: "column-reverse",
          // 他の必要なスタイルを追加することも可能
        },
      };

      addUtilities(tabUtilities);
    },
    function ({ addUtilities }) {
      const underlineUtilities = {
        ".underline-hover": {
          textDecoration: "none",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "2px",
            bottom: "0",
            left: "0",
            backgroundColor: "currentColor",
            transition: "width 0.3s ease-in-out",
          },
          "&:hover::after": {
            width: "0%",
          },
        },
      };

      addUtilities(underlineUtilities);
    },
    // 他のカスタムプラグインを追加
  ],
};
