import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#E3F2FD",
          700: "#1976D2",
          800: "#1565C0",
        },
        gray: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          500: "#9E9E9E",
          600: "#757575",
          800: "#424242",
          900: "##212121",
        },
        red: {
          400: "#EF5350",
          900: "#B71B1C",
        },
        green: {
          600: "#16A75C",
          900: "#006430",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
};
