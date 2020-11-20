import { fade, makeStyles } from '@material-ui/core/styles';

export const useSideBarStyles = makeStyles(theme =>({
    drawer: {
        position: 'fixed',
        left: 0,
        height: `calc(100% - ${theme.spacing(8)}px)`,
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowX: 'hidden',
        zIndex: theme.zIndex.drawer,
    },

    drawerOpen: {
      width: 200,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 60,
      [theme.breakpoints.up('sm')]: {
        width: 60,
      },
    },

    listItem: {
      minHeight: theme.spacing(7),
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },

    listItemActive: {
      minHeight: theme.spacing(7),
      backgroundColor: theme.palette.secondary.light,
      borderBottom: theme.border(theme.palette.primary.dark),
    },
}));