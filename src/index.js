import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { ThemeProvider } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';

//Core
import { CssBaseline } from '@material-ui/core';
import { createTheme } from './theme/theme.index';

ReactDOM.render(
  <ThemeProvider theme={createTheme('defaultTheme')}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
