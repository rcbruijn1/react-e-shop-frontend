export const colorsDefault = {
    primary: {
        light: '#94A6A4',
        main: '#5A7370',
        dark: '#2B4040',
    },
    secondary: {
        light: '#DFE6E4',
        main: '#D2D9D8',
        dark: '#575959',
    },
    error: {
        main: '#fa2d48',
    },
    warning: {
        main: '#ff9e00',
    },
    success: {
        main: '#00983c',
      },
    grey: {
      0: '#ffffff',
      25: '#f2f2f2',
      50: '#e3e5e9',
      100: '#c3c7d0',
      200: '#959caa',
      300: '#7b8598',
      400: '#6b7689',
      500: '#5e6778',
      600: '#515867',
      700: '#434a56',
      800: '#363b45',
      900: '#282c33',
      1000: '#000000',
      A100: '#e2e8f3',
      A200: '#99aed6',
      A400: '#637aa6',
      A700: '#63718c',
    }
  };
  
  export default {
    ...colorsDefault,
    text: {
      primary: colorsDefault.grey[800],
      secondary: colorsDefault.grey[0],
    },
    layout: {
        default: colorsDefault.secondary.dark,
        ligth: colorsDefault.secondary.main,
    },
    container: {
      default: colorsDefault.grey[0],
    },
  };
  