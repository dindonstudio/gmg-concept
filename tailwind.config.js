/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'p-font-size': ['clamp(13px, calc(11px + 0.38vw), 21px)', {
      
          fontWeight: '400',
        }],
    
      },
      colors: {
        'dark-blue': '#003955',
        "light-blue": "#E6EEF1",
        "soft-white": "#FCFBF8",
        "opacity-white": "#CDC9C1",
        "soft-grey": "#E9E7E2",
        "mid-grey": "#726F6A",
        "soft-black-text": "#32312F",
        "spec-black": "#13181F",
      "bronze": "#F7A674",
      },
    },
  },
  plugins: [],
}
