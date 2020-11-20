import React from 'react';
import PropTypes from 'prop-types';

// Core
import { 
    TextField as MuiTextField,
} from '@material-ui/core';

// Styles
import { useFieldStyles } from './field.style';

const TextField = props => {
    const {
        icon,
        disabled,
        errors,
        helperText,
        id,
        label,
        margin,
        value,
        required,
        ...rest
      } = props;

    const classes = useFieldStyles();

    // const errorText = errors && errors[id];
    
    return (
        <MuiTextField 
            {...rest}
            label={label}
            value={value || ''}
            required={required}
            disabled={disabled}
            helperText={helperText}
            // error={!!errorText}
            variant="outlined" 
            margin="dense" 
            color="primary"
            InputProps={{
                startAdornment: icon,
                classes: {
                    root: classes.inputRoot,
                    notchedOutline: classes.outline,
                },
            }}
            InputLabelProps={{
                className: classes.inputLabel,
            }}
        />
    )
};

TextField.propTypes = {
    icon: PropTypes.node,
    disabled: PropTypes.bool,
    // errors: PropTypes.object,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    helperText: PropTypes.string,
};

export default TextField;