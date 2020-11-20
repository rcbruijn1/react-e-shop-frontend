import React, { Fragment } from 'react';

// Core
import { Box, Card, CircularProgress } from '@material-ui/core';
import { Main } from '../../components';
import { CreateShopItemForm, PreferencesForm } from '../../components/forms';
import { useQuery } from '@apollo/client';

// Utils
import { retrieveAllCategories } from '../../helpers/shopItems.helper';

// GraphQL
import { GET_SHOP_ITEMS } from '../../graphql/ShopItem.queries';

const GetShopItems = () => {
    const { loading, data } = useQuery(GET_SHOP_ITEMS, {
      fetchPolicy: 'cache-and-network',
    });
  
    if (loading) return { loading: true, shopItems: [] };
    return (data && { loading: false, shopItems: data.getShopItems }) || [];
  };

const AdminPage = () => {
    const { shopItems, loading } = GetShopItems();
    const categories = retrieveAllCategories(shopItems);

    if (loading) return (
        <Box height="100%" width="100%" display="flex" alignItems="center" justifyContent="center">
            <CircularProgress color="primary" />
        </Box>
        );

    return (
        <Fragment>
            <Main>
                <Card style={{ width: '100%', maxWidth: 1280, padding: 24, margin: 'auto' }}>
                    <Box p={3}>
                        <PreferencesForm />
                    </Box>
                    <Box p={3}>
                        <CreateShopItemForm categories={categories} />
                    </Box>
                </Card>
            </Main>
        </Fragment>
    );
};

export default AdminPage;