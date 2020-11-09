import React from 'react';
import PropTypes from 'prop-types';

//Core
import { Box, Grid } from '@material-ui/core';

const ItemCardContainer = ({ children }) => {

    return (
        <Box maxWidth={1280} m="auto">
            <Grid container spacing={3}>
                {children}
            </Grid>
        </Box>
    );
};

ItemCardContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ItemCardContainer;