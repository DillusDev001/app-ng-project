/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      // <<<<<< Text >>>>>> //
      // 'color-': '#', // primary-
      'color-white': '#FCFCFF',

      // <<<<<< Text >>>>>> //
      'color-text': '#230e67', // primary-700
      'color-text-unfocus': '#9ca3af', // gray-400
      'color-text-gray': '#9ca3af', // gray-400
      'color-subtitle': '#',
      'color-body': '#',
      'color-click': '#',

      // <<<<<< Button >>>>>> //
      'color-button-1': '#7858fa', // primary-500
      'color-button-1-hover': '#6f42f2', // primary-600
      'color-textbutton-1': 'FCFCFF', // white

      'color-button-2': '#FCFCFF', // white
      'color-button-2-hover': '#f4f3ff', // primary-50
      'color-text-button-2': '#7858fa', // primary-500

      // <<<<<< Border >>>>>> //
      'color-border': '#6f42f2', // primary-600
      'color-border-red': '#d62246', // red-600
      'color-border-unfocus': '#e5e7eb', // gray-200

      // <<<<<< Icon >>>>>> //
      'color-icon-1': '#7858fa', // primary-500
      'color-icon-unfocus': '#e5e7eb', // gray-200
      'color-icon-red': '#d62246', // red-600

      // <<<<<< Color >>>>>> //
      'color-error': '#ef445f', // red-500
      'color-error-hover': '#d62246', // red-600

      'color-info': '#2b59c3', // info-700
      'color-info-hover': '#2a4ba3', // info-800

      // <<<<<< Divide >>>>>> //
      'color-divide': '#7858fa', // primary-500

      // <<<<<< bg submenu >>>>>> //
      'color-bg-submenu': '#f0f7fe', // primary-50

      // <<<<<< bg >>>>>> //
      'color-bg': '#eff1f7',

      //'color_text': '#264a7e', // blue-700

      //'color_focus': '#5a619b', // 700
      //'color_unfocus': '#b6c2da', // 300

      //'color_error': '#d62246',  //red-600
      //'color_error_hover': '#b9173c', // red-700

      //'color_info': '#2FB8FF',
      //'color_info_hover': '#1182E4',

      //'color_btn_accept': '#5a619b', // 700
      //'color_btn_accept_hover': '#7887b9', // 500

      //'color_bg': '#eff1f7',

      'orange': {
        '50': '#fff4ed',
        '100': '#ffe6d4',
        '200': '#ffcaa8',
        '300': '#ffa471',
        '400': '#ff6b2d', // key
        '500': '#fe4d11',
        '600': '#ef3307',
        '700': '#c62208',
        '800': '#9d1d0f',
        '900': '#7e1b10',
        '950': '#440906',
    },
    

      'red': {
        '50': '#fff1f2',
        '100': '#fee5e7',
        '200': '#fdced3',
        '300': '#faa7af',
        '400': '#f77585',
        '500': '#ef445f',
        '600': '#d62246', // key
        '700': '#b9173c',
        '800': '#9b1638',
        '900': '#851636',
        '950': '#4a0719',
      },

      'info': {
        '50': '#f0f7fe',
        '100': '#deebfb',
        '200': '#c4def9',
        '300': '#9cc9f4',
        '400': '#6dabed',
        '500': '#4a8ce7',
        '600': '#3570db',
        '700': '#2b59c3', // key
        '800': '#2a4ba3',
        '900': '#274281',
        '950': '#1c2a4f',
      },

      'primary': {
        '50': '#f4f3ff',
        '100': '#ebe9fe',
        '200': '#d7d5ff',
        '300': '#bab3ff',
        '400': '#9988fd',
        '500': '#7858fa',
        '600': '#6f42f2', //
        '700': '#5724dd',
        '800': '#481eb9',
        '900': '#3d1a98',
        '950': '#230e67',
    },
    
    },
    extend: {
      fontFamily: { 
        libre: ['Ubuntu', 'sans-serif'] 
    } 
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true
    })
  ],
}

