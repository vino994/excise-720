/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      'brand-dark': '#176F8A',
      'brand-mid': '#2A93AE',
      'brand-light': '#E6F4F8',
    }
  }
}
,
  plugins: [],
};
