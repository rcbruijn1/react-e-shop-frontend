import { makeStyles } from '@material-ui/core/styles';

export const useBottomBarStyles = makeStyles(theme =>({
    bottomBar: {
        position: 'sticky',
        backgroundColor: theme.palette.primary.main,
        bottom: 0,
        width: '100%',
    },
}));