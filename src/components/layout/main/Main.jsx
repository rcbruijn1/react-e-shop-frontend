import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Styles
import { useMainStyles } from './main.style';

const Main = ({ children, withToolbar }) => {
    const classes = useMainStyles();

    return (
        <div className={
            clsx(
                classes.main, 
                {[classes.mainWithToolbar]:withToolbar}, 
                classes.scrollbar
            )}
        >
            {children}
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
    withToolbar: PropTypes.bool,
};

export default Main;