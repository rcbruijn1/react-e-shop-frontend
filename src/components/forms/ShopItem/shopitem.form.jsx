import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';

// Core
import { 
    Box, Button, Divider, Typography,
} from '@material-ui/core';
import TextField from '../../fields/TextField';

// Queries
import { CREATE_SHOP_ITEM } from '../../../grapql/ShopItem.mutations';


const CreateShopItemForm = () => {
    const { handleSubmit, errors, control } = useForm();
    const { enqueueSnackbar } = useSnackbar();

    const [createShopItem] = useMutation(CREATE_SHOP_ITEM, {
        onCompleted: data => {
            console.log(data);
            enqueueSnackbar(`Create item successfuly!`, { variant: 'success' });
        },
        onError: () => { enqueueSnackbar(`Something went wrong!`, { variant: 'error' }); },
      });
    
      const handleSubmitForm = async values => {
          let inputValues = values
          inputValues.price = parseFloat(inputValues.price);
        await createShopItem({ variables: { ...inputValues } });
      };

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Typography variant="h6" color="primary" gutterBottom>
                Create Shop Item
            </Typography>

            <Divider light />

            <Box py={3} height="100%" display="flex" flexDirection="column">

                <Controller
                    as={TextField}
                    name="title"
                    label="Title"
                    control={control}
                    errors={errors}
                    required
                />

                <Controller
                    as={TextField}                    
                    label="Price"
                    name="price"
                    control={control}
                    errors={errors}
                    required
                />

                <Controller
                    as={TextField}
                    label="Description"
                    name="description"
                    control={control}
                    errors={errors}
                    required
                />
                
                {/* Make SelectField */}
                <Controller
                    as={TextField}
                    label="Category"
                    name="category"
                    control={control}
                    errors={errors}
                    required
                />

                <Controller
                    as={TextField}
                    label="Image URL"
                    name="image"
                    control={control}
                    errors={errors}
                    required
                />
            </Box>

            <Button variant="contained" color="primary" fullWidth type="submit">
                Submit
            </Button>
        </form>
    )
};

export default CreateShopItemForm;