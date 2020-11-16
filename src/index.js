import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//Core
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createTheme } from './theme/theme.index';

const client = new ApolloClient({
  uri: 'https://react-e-shop-backend.herokuapp.com/graphql' || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={createTheme('defaultTheme')}>
    <CssBaseline>
      <ApolloProvider client={client}>
        <Router history={history}>
          <App />
        </Router>
      </ApolloProvider>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);
