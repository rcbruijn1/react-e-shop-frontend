import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

// Core
import { 
    Box, Button, Divider, Typography,
} from '@material-ui/core';
import { SelectField } from '../../../fields';
import { THEMES } from '../../../../theme/theme.index';
import { ThemeContext } from '../../../../providers/Theme.provider';



const PreferencesForm = ({ handleClose }) => {
    const { handleSubmit, errors, control } = useForm();
    const { enqueueSnackbar } = useSnackbar();
    const { themeState, setTheme } = useContext(ThemeContext);
    
      const handleSubmitForm = async values => {
        setTheme(values.theme)
      };

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Typography variant="body1" color="primary" gutterBottom>
                Preferences
            </Typography>
            <Divider />
            <Box py={3} height="100%" width="50%" display="flex" flexDirection="column">
                <Typography variant="body2" color="primary" paragraph>
                    Theme
                </Typography>
                
                <Controller
                    as={SelectField}
                    value={themeState}
                    items={THEMES}
                    name="theme"
                    label="Theme"
                    control={control}
                    errors={errors}
                    required
                />
                
                <Button variant="contained" color="primary" fullWidth type="submit">
                    Submit
                </Button>
            </Box>
        </form>
    )
};

export default PreferencesForm;