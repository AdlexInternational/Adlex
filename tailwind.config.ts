import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        foreground: "#171717",
        primaryYellow: "#F5B100",
        primaryOrange: "#EE7F00",
        "dark-black": "#222222",
        black: "#494949",
        "white-ededed66": "#EDEDED66",
        mute:"#B9B9B9"
      },
      backgroundImage: {
        "base-gradient": "linear-gradient(0deg, #fafafa 0%, #f2f2f229 45%)",
        "gray-gradient": "linear-gradient(132.19deg, rgba(255, 255, 255, 0.2) 13.63%, rgba(168, 168, 168, 0.6) 86.57%)",
        "yellow-gradient": "linear-gradient(180deg, #F6C00B 55.26%, #D19600 100.21%)",
        "orange-gradient": "linear-gradient(180deg, #EE7F00 40%, #D16000 70%, #A94500 100%)",



      },
      backgroundColor: {
        base: "#FAFAFA",
        yellow: "#F5B100"
      },
      screens: {
        'xl1': '1260px',
        'xl2': '1100px',
        'xl3': '1000px',
        'xl4': '900px',
        'xl5': '850px',
        'lg1': '745px',
        'lg2': '720px',
        'sm1': '600px',
        'xs1': '450px',
        'xs4': '425px',
        'xs2': '480px',
        'xs3': '400px',
        'xs5': '375px',
        'xs7': '350px',
        'xs6': '330px',
      },
      boxShadow: {
        base: "0px 0px 86.69px 43.34px #00000008"
      }
    },
  },
  plugins: [],
} satisfies Config;
