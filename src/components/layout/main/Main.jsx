import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Styles
import { useMainStyles } from './main.style';

const Main = ({ children }) => {
    const classes = useMainStyles();

    return (
        <div className={clsx(classes.main, classes.scrollbar)}>
            {children}
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;