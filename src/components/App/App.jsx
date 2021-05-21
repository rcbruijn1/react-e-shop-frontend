import React from 'react';
import { SnackbarProvider } from 'notistack'; 
import { Route, Redirect, Switch } from 'react-router-dom';

// Core
import { TopBar, BottomBar } from '../../components' ;

// Routing
import { ROUTES } from '../../routes/routes';
import { OVERVIEW_PATH } from '../../routes/paths';

// Styles
import { useAppStyles } from './App.style';

const App = () => {
  const classes = useAppStyles();

  return (
    <div className={classes.wrapper}>
      <SnackbarProvider 
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <TopBar />

        <Switch>
          {ROUTES.map(routeProps => <Route {...routeProps} />)}
          <Redirect to={OVERVIEW_PATH} />
        </Switch>

        <BottomBar />
      </SnackbarProvider>
    </div>
  );
}

export default App;
