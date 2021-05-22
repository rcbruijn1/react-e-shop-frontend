import React, { Fragment, useState, forwardRef, useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import StoreIcon from '@material-ui/icons/StorefrontOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

// Core
import { 
    AppBar, 
    Badge, 
    Box, 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    Divider, 
    IconButton, 
    List, 
    ListItem, 
    ListItemSecondaryAction, 
    ListItemText, 
    Toolbar, 
    Typography, 
    Zoom,
} from '@material-ui/core';

// Utils
import { OVERVIEW_PATH, SETTINGS_PATH } from '../../../routes/paths';
import { StoreContext } from '../../../providers/store.provider';

// Styles
import { useTopBarStyles } from './topbar.style';

// Assets
import logo from '../../../logo.svg';

const Transition = forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

const TopBar = () => {
    const classes = useTopBarStyles();
    const history = useHistory();
    const location = useLocation();
    const [state, dispatch] = useContext(StoreContext);

    const [shoppingCart, setShoppingCart] = useState(false);

    useEffect(() => {
      if (state.shoppingCart.length === 0) {
        setShoppingCart(false);
      };
    }, [state.shoppingCart]);

    const removeItem = item => {
      dispatch({
        type: 'REMOVE_SHOPPING_CART_ITEM',
        payload: item,
      });
    };

    return (
        <Fragment>
          <AppBar classes={{ root: classes.appBar }} position="static">
            <Toolbar className={classes.toolbar}>
              <Box display="flex" alignItems="center">
                <Typography variant="h6">
                    React E-Shop
                </Typography>
                <img src={logo} width={50} height={50} alt="logo" />
              </Box>
              <Box display="flex">
                <Badge
                  overlap="circle"
                  color="secondary"
                  badgeContent={state.shoppingCart.length}
                  anchorOrigin={{ 
                      horizontal: 'right', 
                      vertical: 'top',
                  }}
                >
                  <IconButton
                    color="secondary"
                    onClick={() => setShoppingCart(true)}
                    disabled={state.shoppingCart.length === 0}
                  >
                    <ShoppingCartIcon/>
                  </IconButton>
                </Badge>

                {location.pathname.includes(OVERVIEW_PATH) ? (
                  <Box ml={2}>
                    <IconButton
                      color="secondary"
                      onClick={() => history.push(SETTINGS_PATH)}
                    >
                      <SettingsIcon/>
                    </IconButton>
                  </Box>
                ) : (
                  <Box ml={2}>
                    <IconButton
                      color="secondary"
                      onClick={() => history.push(OVERVIEW_PATH)}
                    >
                      <StoreIcon/>
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Toolbar>
          </AppBar>

          <Dialog 
            open={shoppingCart} 
            TransitionComponent={Transition} 
            keepMounted 
            classes={{ paper: classes.dialogPaper }} 
            maxWidth="sm" 
            fullWidth
          >
              <DialogContent>
                {state.shoppingCart.length > 0 && (
                  <List>
                    <ListItem divider>
                      <ListItemText primary={`Total items: ${state.shoppingCart.length}`} />
                    </ListItem>
                    {state.shoppingCart.map(item => (
                      <ListItem key={item.id}>
                        <ListItemText primary={item.title} secondary={'$' + item.price} />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" onClick={() => removeItem(item)}>
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                )}
              </DialogContent>
              <Divider light  />
              <DialogActions>
              <Button color="primary" variant="outlined" onClick={() => setShoppingCart(false)}>
                  Close
              </Button>
              <Button color="primary" variant="contained" onClick={() => setShoppingCart(false)}>
                  Done
              </Button>
              </DialogActions>
          </Dialog>
        </Fragment>
    )
};

export default TopBar;