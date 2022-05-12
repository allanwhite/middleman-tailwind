
let defaultConfig = require('tailwindcss/defaultConfig')
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: {
        100: 'hsl(222, 1%, 95%)',
        200: 'hsl(222, 2%, 90%)',
        300: 'hsl(222, 2%, 80%)',
        400: 'hsl(222, 2%, 65%)',
        500: 'hsl(222, 2%, 50%)',
        600: 'hsl(222, 2%, 40%)',
        700: 'hsl(222, 2%, 25%)',
        800: 'hsl(222, 3%, 16%)',
        900: 'hsl(222, 5%, 12%)',
        a: 'hsla(31, 5%, 12%, 0.3)',
      },
      orange: {
        default: '#FF6746',
        dark: '#E23B16',
        light: '#FF9779',
        verydark: '#62372A',
      },
      aqua: {
        default: '#00F0E6',
        dark: '#00C4D0',
        light: '#0BFFF0',
        pale: '#D6FFFC',
      },
      blue: {
        default: '#2B3652',
        dark: '#252b39',
        light: '#4077B6',
      },
      tan: {
        default: '#FFF8EB',
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1600px',
    },
    fontFamily: {
      sans: [
        '"IBM Plex Sans"',
        'system-ui',
        'sans-serif',
      ],
      serif: [
        '"Quadon"',
        'Georgia',
        'serif',
      ],
      book: [
        '"IBM Plex Serif"',
        'Georgia',
        'serif',
      ],
      mono: [
        '"IBM Plex Mono"',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'monospace',
      ],
      cond: [
        '"IBM Plex Sans Condensed"',
        'system-ui',
        'sans-serif',
      ],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '2xl-scale': 'calc(0.5vw + 1.5rem)',
      '3xl': '1.875rem',
      '3xl-scale': 'calc(1.5vw + 1.125rem)',
      '4xl': '2.25rem',
      '4xl-scale': 'calc(1.5vw + 2rem)',
      '5xl': '3rem',
      '5xl-scale': 'calc(3vw + 2rem)',
      '6xl': '5rem',
      '6xl-scale': 'calc(4vw + 2rem)',
    },
    fontWeight: {
      // hairline: '100',
      // thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      // semibold: '600',
      bold: '600',
      // extrabold: '800',
      // black: '900',
    },
    lineHeight: {
      none: 1,
      tighter: 1.15,
      tight: 1.35,
      normal: 1.6,
      relaxed: 1.8,
      loose: 2
    },
    extend: {
      maxWidth: {
        '7xl': '96rem',
      },
      borderRadius: {
        lg: '0.75rem',
        scale: '0.4vw'
      },
      leading: {
        snug: '1.5'
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwind-css-variables')(
      {
        // modules
        // colors: false,
        // screens: false,
        // fontFamily: false,
        // fontSize: false,
        // fontWeight: false,
        lineHeight: false,
        letterSpacing: false,
        backgroundSize: false,
        borderWidth: false,
        borderRadius: false,
        width: false,
        height: false,
        minWidth: false,
        minHeight: false,
        maxWidth: false,
        maxHeight: false,
        padding: false,
        margin: false,
        boxShadow: false,
        zIndex: false,
        // opacity: false,
      },
      {
        // options
        // postcssEachVariables: true;
      }
    )
  ]
}
