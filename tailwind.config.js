/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navGreenCol: "#1FA64C",
        headGreen: "#0E7240",
        subHeadGreen: "#009349",
        mediaIcons: "#0E7240",
        heroYellow: "#FDBC13",
        cardBlue: "#000BC7",
        cardYellow: "#BB8700",
        cardBrown: "#AF0217",
        borderVar1: "#DF311D",
        borderVar2: "#5A045D",
        borderVar3: "#046D7B",
      },
      borderRadius: {
        heroRadius: "200px",
        aboutUsHeroRadius: "100px",
        '4xl': '37px',
      },
      height: {
        100: "38rem",
        98: "30rem",
        'teamH': '417px'
      },
      spacing: {
        'team': '587px',
      }
    },
  },
  plugins: [],
};
