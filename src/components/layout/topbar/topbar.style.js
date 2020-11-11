import { makeStyles } from '@material-ui/core/styles';

export const useTopBarStyles = makeStyles(theme =>({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
    },

    toolbar: {
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 0, 0, 1.5),
        },
    },
}));