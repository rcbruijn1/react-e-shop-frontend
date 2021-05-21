import { makeStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles(theme =>({
    '@global': {
      '@media only screen and (min-width: 960px)': {
        html: {
          overflow: 'hidden'
        },
        body: {
          overflow: 'hidden'
        }
      }
    },

    wrapper: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '100%',
      }
    },
}));