/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        'vmin': '80vmin',
        'w100': '100%',
        // 'widthCal': 'calc(36.2% * var(--p))'
      },
      height: {
        'vmin': '80vmin',
        'tvmin': '10vmin',
        'h100': '100%'
      },
      typography: {
        fontSize: {
          'custom-font': 'min(1vmin, 0.5rem)'
        }
      },

      fontFamily: {
        'phont': 'Grandstander'
      }

    },
  },
  plugins: [],
}

