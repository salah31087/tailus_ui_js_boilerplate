import { animations, components, palettes, rounded, shade, visualizations } from "@tailus/themer"


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    './node_modules/@tailus/themer/dist/components/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: palettes.romance,
    },
  },
  plugins : [
    rounded,
    shade,
    components,
    animations,
    visualizations
]
}
