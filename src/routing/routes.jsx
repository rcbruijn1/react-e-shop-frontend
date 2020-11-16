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
    key: Paths.ADMIN_PATH,
    path: Paths.ADMIN_PATH,
    render: props => <Pages.AdminPage {...props} />,
  },
];