import React, { Fragment, useState, forwardRef } from 'react';

// Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import UserIcon from '@material-ui/icons/PersonOutline';

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
    Link, 
    Toolbar, 
    Typography, 
    Zoom,
} from '@material-ui/core';
import { RegisterForm, LoginForm, CreateShopItemForm } from '../../forms';

// Styles
import { useTopBarStyles } from './topbar.style';

// Assets
import logo from '../../../logo.svg';

const Transition = forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

const TopBar = () => {
    const classes = useTopBarStyles();
    const [basketOpen, setBasketOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState({ dialogOpen: false, tab: null });
    const basketCounter = Math.floor(Math.random(1) * Math.floor(10));

    console.log(accountOpen);

    return (
        <Fragment>
            <AppBar classes={{ root: classes.appBar }} position="fixed">
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
                            badgeContent={basketCounter}
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
                        <IconButton
                        color="secondary"
                        onClick={() => setAccountOpen({ dialogOpen: true, tab: null })}
                        >
                            <UserIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Dialog open={basketOpen} TransitionComponent={Transition} keepMounted classes={{ paper: classes.dialogPaper }}>
                <DialogContent>
                    <Typography variant="body1" color="textPrimary">Your shopping cart is still empty</Typography>
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

            <Dialog
                fullWidth
                maxWidth="sm"
                open={accountOpen.dialogOpen} 
                TransitionComponent={Transition} 
                keepMounted 
            >
                <DialogContent>
                    {!accountOpen.tab && (
                        <Box display="flex" minHeight={250}>
                            <Box width="50%" display="flex" justifyContent="center" alignItems="center">
                                <Link onClick={() => setAccountOpen({ dialogOpen: accountOpen.dialogOpen, tab: 'login'})}>
                                    <Typography variant="h6">
                                        Login
                                    </Typography>
                                </Link>
                            </Box>
                            <Divider flexItem orientation="vertical" />                          
                            <Box width="50%" display="flex" justifyContent="center" alignItems="center">
                                <Link onClick={() => setAccountOpen({ dialogOpen: accountOpen.dialogOpen, tab: 'register'})}>
                                    <Typography variant="h6">
                                        Register
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    )}
                    {accountOpen.tab === 'login' &&  <LoginForm handleClose={() => setAccountOpen({ dialogOpen: false, tab: null })} />}
                    {accountOpen.tab === 'register' && <RegisterForm handleClose={() => setAccountOpen({ dialogOpen: false, tab: null })} />}
                </DialogContent>
            </Dialog>
        </Fragment>
    )
};

export default TopBar;