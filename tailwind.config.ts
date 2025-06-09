import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#d7c3f1",
        warning: "#f5f1d5",
      },
      textColor: {
        primary: "#312833",
        danger: "#de9489",
        success: "#577051",
        info: "#4981cf",
        body: "#59495d",
        // light: "#ffffff",
        // dark: "#312833",
      },
    },
  },
  plugins: [],
};
export default config;
