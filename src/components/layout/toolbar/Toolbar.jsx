import React from 'react';

// Core
import { Toolbar as MuiToolbar } from '@material-ui/core';

// Style
import { useToolbarStyles } from './Toolbar.style';

const Toolbar = ({ children }) => {
    const classes = useToolbarStyles();

    return (
        <MuiToolbar variant="dense" classes={{ root: classes.toolbar }}>
            {children}
        </MuiToolbar>
    );
};

export default Toolbar;