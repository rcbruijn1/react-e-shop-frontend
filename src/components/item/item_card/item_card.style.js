import { makeStyles, fade } from '@material-ui/core';

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
    addButton: {
        color: theme.palette.success.main,
        '&:hover': {
            backgroundColor: fade(theme.palette.success.main, 0.12),
        }
    },
    cardActions: {
        justifyContent: 'space-between',
        backgroundColor: theme.palette.secondary.light,
    },
}));

export const useItemCardZoomedStyles = (shopItemImage) => makeStyles(theme => ({

}));