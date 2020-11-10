import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';

// Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import PlusIcon from '@material-ui/icons/AddCircleOutlineOutlined';

//Core
import { Card, CardActions, CardHeader, CardMedia, Grid, IconButton, Typography } from '@material-ui/core';

// Styles
import { useItemCardStyles } from './item_card.style';

const ItemCard = ({ shopItem, handleZoom }) => {
    const classes = useItemCardStyles(shopItem.image)();
    const [favourite, setFavourite] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const addToFavourites = () => {
        setFavourite(!favourite);
        if (!favourite) {
         enqueueSnackbar('Added to favourites!', { variant: 'success' });
        } else {
            enqueueSnackbar('Removed from favourites!', { variant: 'warning' });
        }
    }

    const addToShoppingCart = () => {
         enqueueSnackbar('Added to shopping cart!', { variant: 'success' });
    };

    return (
        <Grid item xs={12} sm={6} lg={3}>
            <Card className={classes.root}>
            <CardHeader
                title={<Typography variant="body1">{shopItem.title}</Typography>}
                subheader={<Typography variant="caption">{shopItem.price}</Typography>}
            />
            <CardMedia
                component="div"
                className={classes.media}
                style={{ background: `url(${shopItem.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                title={shopItem.title}
            />
            <CardActions disableSpacing className={classes.cardActions}>
                <div>
                    <IconButton
                        onClick={addToFavourites}
                    >
                        {favourite ? <FavoriteIcon color="error" /> : <FavoriteOutlinedIcon color="secondary" />}
                    </IconButton>
                    <IconButton
                        onClick={handleZoom}
                    >
                        <InfoIcon color="secondary" />
                    </IconButton>
                </div>
                <IconButton
                    onClick={addToShoppingCart}
                >
                    <PlusIcon color="secondary" />
                </IconButton>
            </CardActions>
            </Card>
        </Grid>
    );
};

ItemCard.propTypes = {
    shopItem: PropTypes.object.isRequired,
    handleZoom: PropTypes.func.isRequired,
};

export default ItemCard;