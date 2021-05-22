import { createMuiTheme, fade } from '@material-ui/core/styles';

// Colors
import {
  colorsDefault,
  colorsJungle,
} from './colors';

export const THEMES = {
  defaultTheme: 'defaultTheme',
  jungleTheme: 'jungleTheme',
};

const colorsMap = {
  [THEMES.defaultTheme]: colorsDefault,
  [THEMES.jungleTheme]: colorsJungle,
};

export const createTheme = name => createMuiTheme({
  palette: {
      ...colorsMap[name],
  },
  overrides: {
    MuiTypography: {
      colorTextSecondary: {
        color: colorsMap[name].grey[400],
      },
    },
    MuiIconButton: {
      colorSecondary: {
        color: colorsMap[name].secondary.light,
      },
    },
    MuiDialogContent: {
      root: {
        padding: 40,
        '&:first-child': {
          paddingTop: 40,
        },
      },
    },
    MuiDialogActions: {
      root: {
        padding: 16,
        margin: '0px 16px',
        borderTop: `1px solid ${colorsMap[name].grey[50]}`,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: colorsMap[name].primary.main,
      },
    },
  },

  scrollbar: {
    '&::-webkit-scrollbar': {
      width: 10,
      background: fade(colorsMap[name].secondary.main, 0.32),
    },
    '&::-webkit-scrollbar-thumb': {
      background: colorsMap[name].primary.dark,
      borderRadius: 10,
    },
  },
  border: (color, width = 1, style = 'solid') => `${width}px ${style} ${color}`,
});
