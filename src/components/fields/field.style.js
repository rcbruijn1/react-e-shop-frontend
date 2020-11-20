import { makeStyles } from '@material-ui/core/styles';

export const useFieldStyles = makeStyles(theme =>({
    inputRoot: {
        marginBottom: theme.spacing(1.5),
    },
    
    outline: {
        borderColor: theme.palette.primary.dark,
    },
    
    inputLabel: {
        color: theme.palette.primary.dark,
    },
}));