import { makeStyles } from '@material-ui/core';

export const useItemCardStyles = (shopItemImage) => makeStyles(theme => ({
    root: {
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    media: {
        height: 300,
        margin: theme.spacing(0, 2),
        display: 'flex',
        justifyContent: 'center',
        background: `url(${shopItemImage})`, 
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
    },
    cardActions: {
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.dark,
    },
}));

export const useItemCardZoomedStyles = (shopItemImage) => makeStyles(theme => ({

}));