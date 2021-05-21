import React from 'react';

// Core
import * as Paths from './paths';
import * as Pages from '../pages';

/**
 * Routes
 */
export const ROUTES = [
  {
    key: Paths.OVERVIEW_PATH,
    path: Paths.OVERVIEW_PATH,
    render: props => <Pages.OverviewPage {...props} />,
  },
  {
    key: Paths.SETTINGS_PATH,
    path: Paths.SETTINGS_PATH,
    render: props => <Pages.AdminPage {...props} />,
  },
];