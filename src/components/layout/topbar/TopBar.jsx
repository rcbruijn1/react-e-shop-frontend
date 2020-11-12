import React, { Fragment, useState, forwardRef } from 'react';

// Icons
import { ShoppingCartOutlined } from '@material-ui/icons';
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
    Toolbar, 
    Typography, 
    Zoom,
} from '@material-ui/core';

// Styles
import { useTopBarStyles } from './topbar.style';

// Assets
import logo from '../../../logo.svg';
import { RegisterForm } from '../../forms/User';

const Transition = forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

const TopBar = () => {
    const classes = useTopBarStyles();
    const [basketOpen, setBasketOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const basketCounter = Math.floor(Math.random(1) * Math.floor(10));

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
                                <ShoppingCartOutlined/>
                            </IconButton>
                        </Badge>
                        <IconButton
                        color="secondary"
                        onClick={() => setAccountOpen(true)}
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
                open={accountOpen} 
                TransitionComponent={Transition} 
                keepMounted 
            >
                <DialogContent>
                    <RegisterForm handleClose={() => setAccountOpen(false)} />
                </DialogContent>
            </Dialog>
        </Fragment>
    )
};

export default TopBar;