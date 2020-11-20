import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';

// Core
import { 
    Box, Button, Typography,
} from '@material-ui/core';
import { TextField } from '../../../fields';

// Queries
// import { LOGIN } from '../../../../grapql/User.mutations';


const LoginForm = ({ handleClose }) => {
    const { handleSubmit, errors, control } = useForm();
    const { enqueueSnackbar } = useSnackbar();

    // const [login] = useMutation(LOGIN, {
    //     onCompleted: data => {
    //         console.log(data);
    //         enqueueSnackbar(`Logged in ${data.addUser.username} successfuly!`, { variant: 'success' });
    //     },
    //     onError: () => { enqueueSnackbar(`Something went wrong!`, { variant: 'error' }); },
    //   });
    
      const handleSubmitForm = async values => {
        // await login({ variables: { ...values } });
        handleClose();
      };

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Typography variant="h5" color="primary" gutterBottom>
                Login
            </Typography>

            <Box py={3} height="100%" display="flex" flexDirection="column">

                <Controller
                    as={TextField}
                    name="username"
                    label="Username"
                    control={control}
                    errors={errors}
                    required
                />

                <Controller
                    as={TextField}
                    label="Password"
                    type="password"
                    name="password"
                    control={control}
                    errors={errors}
                    required
                />
            </Box>

            <Button variant="contained" color="primary" fullWidth type="submit">
                Login
            </Button>
            <Button variant="outlined" color="primary" fullWidth onClick={handleClose}>
                Close
            </Button>
        </form>
    )
};

LoginForm.propTypes = {
    handleClose: PropTypes.func.isRequired,
};

export default LoginForm;