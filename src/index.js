import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';

//Core
import { CssBaseline } from '@material-ui/core';
import { createTheme } from './theme/theme.index';

const client = new ApolloClient({
  uri: 'https://react-e-shop-backend.herokuapp.com/graphql' || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ThemeProvider theme={createTheme('defaultTheme')}>
    <CssBaseline>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
