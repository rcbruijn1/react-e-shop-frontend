import { fade, makeStyles } from '@material-ui/core';

export const useMainStyles = makeStyles(theme => ({
    main: {
        padding: theme.spacing(3),
        backgroundColor: fade(theme.palette.secondary.light, 0.22),
        overflowY: 'auto', 
        height: 'calc(100% - 64px)', 
        width: '100%',
        marginTop: theme.spacing(8),
    },
    scrollbar: theme.scrollbar,
}));