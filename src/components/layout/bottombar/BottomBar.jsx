import React from 'react';

//Icons
import { FavoriteBorderOutlined, PersonOutline, SearchOutlined } from '@material-ui/icons';

// Core
import { BottomNavigation, BottomNavigationAction, useMediaQuery, useTheme } from '@material-ui/core';

// Styles
import { useBottomBarStyles } from './bottombar.style';

const BottomBar = () => {
    const classes = useBottomBarStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (!isMobile) return null;
    
    return (
        <BottomNavigation
            showLabels
            classes={{ root: classes.bottomBar }}
        >
            <BottomNavigationAction color="secondary"  label="Search" icon={<SearchOutlined /> } />
            <BottomNavigationAction color="secondary" label="Favorites" icon={<FavoriteBorderOutlined />} />
            <BottomNavigationAction color="secondary" label="Account" icon={<PersonOutline />} />
        </BottomNavigation>
    );
};

export default BottomBar;