import React, { Fragment } from 'react';

// Core
import { Box, Card, CardContent, CircularProgress } from '@material-ui/core';
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
          <Box maxWidth={1280} m="auto">
            <Box mb={3} width="100%">
              <Card>
                <CardContent>
                    <PreferencesForm />
                </CardContent>
              </Card>
            </Box>

            <Box mb={3} width="100%">
              <Card>
                <CardContent>
                  <CreateShopItemForm categories={categories} />
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Main>
      </Fragment>
    );
};

export default AdminPage;