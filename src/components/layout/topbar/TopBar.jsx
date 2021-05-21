import React, { Fragment, useState, forwardRef, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import StoreIcon from '@material-ui/icons/StorefrontOutlined';

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
    Toolbar, 
    Typography, 
    Zoom,
} from '@material-ui/core';
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
    const [state] = useContext(StoreContext);

    const [basketOpen, setBasketOpen] = useState(false);

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
                  badgeContent={Object.keys(state.shoppingCart).length}
                  anchorOrigin={{ 
                      horizontal: 'right', 
                      vertical: 'top',
                  }}
                >
                  <IconButton
                    color="secondary"
                    onClick={() => setBasketOpen(true)}
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

          <Dialog open={basketOpen} TransitionComponent={Transition} keepMounted classes={{ paper: classes.dialogPaper }}>
              <DialogContent>
                {Object.keys(state.shoppingCart).length === 0 ? (
                  <Typography variant="body1" color="textPrimary">Your shopping cart is still empty</Typography>
                ) : (
                  Object.values(state.shoppingCart).map(item => (
                    <p>{item.title}</p>
                  ))
                )}
              </DialogContent>
              <Divider light  />
              <DialogActions>
              <Button color="primary" variant="outlined" onClick={() => setBasketOpen(false)}>
                  Close
              </Button>
              <Button color="primary" variant="contained" onClick={() => setBasketOpen(false)}>
                  Done
              </Button>
              </DialogActions>
          </Dialog>
        </Fragment>
    )
};

export default TopBar;