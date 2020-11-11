import { makeStyles } from '@material-ui/core/styles';

export const useFieldStyles = makeStyles(theme =>({
    outline: {
        borderColor: theme.palette.primary.dark,
    },
    
    inputLabel: {
        color: theme.palette.primary.dark,
    },
}));