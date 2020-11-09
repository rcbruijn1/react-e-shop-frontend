import React from 'react';
import PropTypes from 'prop-types';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import PlusIcon from '@material-ui/icons/AddCircleOutlineOutlined';

//Core
import { Card, Box, Typography, Button, IconButton } from '@material-ui/core';

// Styles
import { useItemCardZoomedStyles } from './item_card.style';

const ItemCardZoomed = ({ shopItem, handleClose }) => {
    const classes = useItemCardZoomedStyles()();

    return (
        <Card style={{ width: '50vw', height: '50vh' }}>
            <IconButton onClick={handleClose} style={{ position: 'absolute', top: 0, right: 0 }}>
                <CloseIcon color="primary" />
            </IconButton>
            <Box display="flex" p={5} height="100%">
                <Box display="flex" flexDirection="column" justifyContent="space-between" width="75%">
                    <img src={shopItem.image} width="50%" height="auto" alt="img" />
                    <Typography variant="h6">
                        {`$${shopItem.price}`}
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="space-between" width="25%">
                    <Typography variant="h6">
                        {shopItem.title}
                    </Typography>
                    <Button variant="contained" color="primary">
                        Add
                    </Button>
                </Box>
            </Box>
        </Card>
    );
};

ItemCardZoomed.propTypes = {
    shopItem: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default ItemCardZoomed;