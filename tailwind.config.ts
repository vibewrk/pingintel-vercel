import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ping-red': '#f32c01',
        'ping-red-1': '#b00000',
        'ping-red-2': '#d30000',
        'ping-gold': '#d39b00',
        'ping-gold-2': '#b08100',
        'ping-dark': '#171100',
        'ping-dark-2': '#170000',
        'ping-dark-3': '#141414',
        'ping-dark-4': '#191919',
        'ping-warm': '#fff0e7',
        'ping-warm-2': '#f2e3da',
        'ping-neutral': '#e2cece',
        'ping-purple': '#c94dff',
        'ping-blue': '#4da0ff',
        'ping-orange': '#ffac4d',
      },
      fontFamily: {
        'macan': ['MacanPan', 'sans-serif'],
        'macan-stencil': ['MacanStencilPan', 'sans-serif'],
        'ivar': ['IvarDisplay', 'serif'],
        'mono': ['ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
