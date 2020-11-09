import React from 'react';
import clsx from 'clsx';

// Icons
import SecurityIcon from '@material-ui/icons/Security';

// Core
import { 
    Drawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    useMediaQuery, 
    useTheme, 
} from '@material-ui/core';

// Style
import { useSideBarStyles } from './sidebar.style';
import { useState } from 'react';
import { ContactSupportOutlined, FavoriteBorderOutlined, ListOutlined, SearchOutlined } from '@material-ui/icons';

const SideBar = () => {
    const classes = useSideBarStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Drawer
            anchor="left" 
            open={isMobile ? drawerOpen : true} 
            variant={isMobile ? 'persistent' : 'permanent'}
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
            })}
            classes={{
            paper: clsx(classes.drawer, {
                [classes.drawerOpen]: drawerOpen,
                [classes.drawerClose]: !drawerOpen,
            }),
            }}
            onMouseEnter={() => setDrawerOpen(true)}
            onMouseLeave={() => setDrawerOpen(false)}
        >
            <List disablePadding>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <SearchOutlined color="primary" />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary="Search" />
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon><ListOutlined color="primary" /></ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary="Categories" />
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <FavoriteBorderOutlined color="primary" />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary="Favourites" />
                </ListItem>
            </List>

            <List disablePadding>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <SecurityIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary="Admin Panel" />
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <ContactSupportOutlined color="primary" />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary="Support" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideBar;