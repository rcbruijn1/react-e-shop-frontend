import React, { useState, Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';

// Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import PlusIcon from '@material-ui/icons/AddCircleOutlineOutlined';

//Core
import { 
  Button, 
  Card, 
  CardActions, 
  CardHeader, 
  CardMedia, 
  Dialog, 
  DialogActions, 
  Grid, 
  IconButton, 
  Typography,
} from '@material-ui/core';
import ItemCardZoomed from './item_card_zoomed';
import { StoreContext } from '../../../providers/store.provider';

// Styles
import { useItemCardStyles } from './item_card.style';


const ItemCard = ({ shopItem }) => {
    const classes = useItemCardStyles(shopItem.image)();
    const { enqueueSnackbar } = useSnackbar();
    
    const [state, dispatch] = useContext(StoreContext);

    const [favourite, setFavourite] = useState(false);
    const [itemCardZoomed, setItemCardZoomed] = useState(false);

    const addToFavourites = () => {
        dispatch({
          type: 'UPDATE_FAVORITES',
          payload: shopItem,
        });
        setFavourite(!favourite);
        if (!favourite) {
         enqueueSnackbar('Added to favourites!', { variant: 'success' });
        } else {
            enqueueSnackbar('Removed from favourites!', { variant: 'warning' });
        }
    }

    const addToShoppingCart = async () => {
      await dispatch({
        type: 'UPDATE_SHOPPING_CART',
        payload: shopItem,
      });
      enqueueSnackbar('Added to shopping cart!', { variant: 'success' });
    };

    return (
      <Fragment>
        <Grid item xs={12} sm={6} lg={3}>
            <Card className={classes.root}>
            <CardHeader
                title={<Typography variant="body1">{shopItem.title}</Typography>}
                subheader={<Typography variant="caption">${shopItem.price}</Typography>}
            />
            <CardMedia
                component="div"
                className={classes.media}
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
                        onClick={() => setItemCardZoomed(true)}
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

        {itemCardZoomed && (
          <Dialog
            maxWidth="md"
            open={itemCardZoomed}
            onClose={() => setItemCardZoomed(false)} 
          >
            {itemCardZoomed && (
              <ItemCardZoomed 
                shopItem={shopItem} 
              />
            )}
            <DialogActions>
              <Button 
                color="primary" 
                variant="outlined"
                onClick={() => setItemCardZoomed(false)} 
              >
                Close
              </Button>
              <Button 
                color="primary" 
                variant="contained"
                onClick={() => setItemCardZoomed(false)} 
              >
                Add
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Fragment>
    );
};

ItemCard.propTypes = {
  shopItem: PropTypes.object.isRequired,
};

export default ItemCard;