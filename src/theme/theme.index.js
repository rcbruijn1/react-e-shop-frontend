import { createMuiTheme } from '@material-ui/core/styles';

// Colors
import {
  colorsDefault,
  colorsDark,
} from './colors';

export const THEMES = {
  defaultTheme: 'defaultTheme',
  darkTheme: 'darkTheme',
};

const colorsMap = {
  [THEMES.defaultTheme]: colorsDefault,
  [THEMES.darkTheme]: colorsDark,
};

export const createTheme = name => createMuiTheme({
  palette: {
      ...colorsMap[name],
  },

  overrides: {
    MuiDialogContent: {
      root: {
        padding: 24,
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
      background: 'rgba(0, 0, 0, 0.12) !important',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(43, 64, 64, 0.21) !important',
      borderRadius: 2,
    },
  },
  border: (color, width = 1, style = 'solid') => `${width}px ${style} ${color}`,
});
