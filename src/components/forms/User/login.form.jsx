import React from 'react';
import { Controller, useForm } from 'react-hook-form';

// Core
import { 
    Box, Button, Link, Typography,
} from '@material-ui/core';
import TextField from '../../fields/TextField';

import { PersonOutline, VpnKeyOutlined } from '@material-ui/icons';


const LoginForm = () => {
    const { handleSubmit, errors, control, register } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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

                <Link>
                    Forgot your password?
                </Link>
            </Box>

            <Button variant="contained" color="primary" fullWidth type="submit">
                Submit
            </Button>
            <Button variant="outlined" color="primary" fullWidth>
                Close
            </Button>
        </form>
    )
};

export default LoginForm;