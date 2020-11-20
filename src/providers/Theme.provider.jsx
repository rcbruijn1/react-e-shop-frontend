import React, { createContext, useState } from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import { createTheme } from '../theme/theme.index';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = useState(localStorage.getItem('appTheme') || 'defaultTheme');;

  const setTheme = (themeName) => {
    localStorage.setItem('appTheme', themeName);
    setThemeState(themeName);
  }

  return (
    <ThemeContext.Provider value={{ themeState, setTheme }}>
      <MuiThemeProvider theme={createTheme(themeState)}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
