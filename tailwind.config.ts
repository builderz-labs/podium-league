import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'background-illustration': "url('/images/background-illustration.png')",
      },
      colors: {
        'podium-green': '#E2F0CB',
        'bg-light': '#FFF7EA',
        'bg-mid': '#FFEFD8',
        'first-place': '#F6EAC2',
        'second-place': '#DFCCF1',
        'third-place': '#FFB8B1',
      }
    },
  },
  plugins: [],
};
export default config;
