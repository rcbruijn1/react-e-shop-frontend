export const colorsJungle = {
    primary: {
      light: '#ABBF63',
      main: '#768C56',
      dark: '#314035',
    },
    secondary: {
      dark: '#A68965',
      main: '#B3936D',
      light: '#F2C894',
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
    ...colorsJungle,
    text: {
      primary: colorsJungle.grey[800],
      secondary: colorsJungle.grey[0],
    },
    layout: {
        default: colorsJungle.secondary.dark,
        ligth: colorsJungle.secondary.main,
    },
    container: {
      default: colorsJungle.grey[0],
    },
  };
  