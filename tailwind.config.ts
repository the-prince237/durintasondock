import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-title':
          'linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)',
        'gradient-divider': 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
        'gradient-divider-alt': 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)',
        'gradient-btn': 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)',
        'gradient-btn-alt': 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)',
      },
      colors: {
        transWhite00: 'rgba(255, 255, 255, 0.75)',
        transWhite01: 'rgba(255, 255, 255, 0.5)',
        transWhite02: 'rgba(255, 255, 255, 0.33)',
        transWhite03: 'rgba(255, 255, 255, 0.1)',
      },
      transitionDuration: {
        td00: '0.4s',
      },
      screens: {
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
      },
      boxShadow: {
        btnActive:
          'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)',
        dropDownItemHover: '0 3px 6px 3px rgba(0, 0, 0, 0.3)',
        'dropDownItem-2n-hover': '0 0px 8px 4px rgba(0, 0, 0, 0.3)',
        'dropDownItem-3n-hover': '0 -3px 6px 3px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        dropDownItemHover: '0 3px 6px 3px rgba(0, 0, 0, 0.3)',
        'dropDownItem-2n-hover': '0 0px 8px 4px rgba(0, 0, 0, 0.3)',
        'dropDownItem-3n-hover': '0 -3px 6px 3px rgba(0, 0, 0, 0.3)',
        BlogCard: '3px 3px 20px rgba(80, 78, 78, 0.5)',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(400px, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(400px, 1fr))',
        linkList: 'repeat(3, minmax(85px, 220px))',
      },
      margin: {
        'boxes-sm': '20px 0 32px',
        'boxes-md': '24px 0 40px',
      },
    },
  },
  plugins: [],
};
export default config;
