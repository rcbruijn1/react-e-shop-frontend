import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

// Core
import { Box, Button, Divider, Typography } from '@material-ui/core';
import { SelectField, TextField } from '../../fields';

// Queries
import { CREATE_SHOP_ITEM } from '../../../graphql/ShopItem.mutations';


const CreateShopItemForm = ({ categories }) => {
  const { handleSubmit, errors, control } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const itemCategories = categories.filter(item => item !== 'all');

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
      <Typography variant="body1" color="primary" gutterBottom>
          Create Shop Item
      </Typography>

      <Divider />

      <Box py={3} display="flex" flexDirection="column">
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
          
        <Controller
          as={SelectField}
          label="Category"
          name="category"
          control={control}
          errors={errors}
          required
          items={itemCategories}
        />

        <Controller
          as={TextField}
          label="Image URL"
          name="image"
          control={control}
          errors={errors}
          required
        />

        <Box>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </Box>
      </Box>
    </form>
  )
};

CreateShopItemForm.propTypes = {
    categories: PropTypes.array.isRequired,
};

export default CreateShopItemForm;