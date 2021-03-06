import React, { useState } from 'react';
import clsx from 'clsx';
import { useHistory, useLocation } from 'react-router-dom';

// Icons
import SettingsIcon from '@material-ui/icons/Settings';
import OverviewIcon from '@material-ui/icons/AppsOutlined';
import FavouritesIcon from '@material-ui/icons/FavoriteBorderOutlined';

// Core
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

// Routing
import { SETTINGS_PATH, OVERVIEW_PATH } from '../../../routes/paths';

// Style
import { useSideBarStyles } from './sidebar.style';

const SideBar = () => {
  const classes = useSideBarStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const isActive = path => path === location.pathname;

  const listItems = [
    {
      label: 'Overview',
      path: OVERVIEW_PATH,
      icon: <OverviewIcon color="primary" />,
      disabled: false,
    },
    {
      label: 'Favourites',
      path: '',
      icon: <FavouritesIcon color="primary" />,
      disabled: true,
    },
  ]

  return (
    <Drawer
      anchor="left"
      open={isMobile ? drawerOpen : true}
      variant={isMobile ? 'persistent' : 'permanent'}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen,
      })}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        }),
      }}
      onMouseEnter={() => setDrawerOpen(true)}
      onMouseLeave={() => setDrawerOpen(false)}
    >
      <List disablePadding>
        {listItems.map(listItem => (
          <ListItem
            key={listItem.label}
            button={!isActive(listItem.path)}
            className={isActive(listItem.path) ? classes.listItemActive : classes.listItem}
            onClick={() => history.push(listItem.path)}
            disabled={listItem.disabled}
          >
            <ListItemIcon>
              {listItem.icon}
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary={listItem.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;