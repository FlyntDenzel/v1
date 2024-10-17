/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pp: {
          light: {
            primary: '#00c298',
            secondary: '#128C7E',
            secondary_lighter: '#8696a0',
            background: '#f0f2f5',
            meadow: '#25d366',
            text: '#000000',
            bush: '#ece5dd',
            gossip: '#dcf8c6',
            icon: '#bbc5cb',
            blue: '#34b7f1',
          },
        },
        dark: {
          primary: '#233138',
            secondary: '#676f73',
            secondary_lighter: '#667781',
            background: '#111b21',
            'background_lighter': '#233138',
            text: 'rgba(233, 237, 239, 0.88)',
            green: '#0b846d',
            icon: '#676f73',
            blue: '#34b7f1'
        }
      },
    },
  },
  plugins: [],
};
