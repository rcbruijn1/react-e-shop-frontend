import { makeStyles } from '@material-ui/core';

export const useToolbarStyles = makeStyles(theme => ({
    toolbar: {
        position: 'absolute',
        top: theme.spacing(8),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        minHeight: theme.spacing(7),
        left: 0,
        boxShadow: theme.shadows[2],
    },
}))