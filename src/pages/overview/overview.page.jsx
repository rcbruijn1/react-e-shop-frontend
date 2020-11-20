import React, { Fragment, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

// Core
import { ItemCard, ItemCardContainer, ItemCardZoomed, Main, SideBar, Toolbar } from '../../components';

// Utils
import { filterByCategory, retrieveAllCategories } from '../../helpers/shopItems.helper';

// GraphQL
import { GET_SHOP_ITEMS } from '../../graphql/ShopItem.queries';
import { Box, CircularProgress, Dialog } from '@material-ui/core';
import { SelectField } from '../../components/fields';

const GetShopItems = () => {
  const { loading, data } = useQuery(GET_SHOP_ITEMS, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return { loading: true, shopItems: [] };
  return (data && { loading: false, shopItems: data.getShopItems }) || [];
};

const OverviewPage = () => {
    const [itemCardZoomed, setItemCardZoomed] = useState({ open: false, content: null });

    const [catalogus, setCatalogus] = useState(null);
    const [categoryState, setCategory] = useState('all');

    const { shopItems, loading } = GetShopItems();
    const categories = retrieveAllCategories(shopItems);

    const renderItemCardZoomed = shopItem => {
      setItemCardZoomed({ open: true, content: shopItem});
    };

    const handleChange = value => {
      const newCatalogus = filterByCategory(value, shopItems);
      setCategory(value);
      setCatalogus(newCatalogus);
    }

    useEffect(() => {
      setCatalogus(shopItems);
    }, [!loading])
  
    if (loading) return (
      <Box height="100%" width="100%" display="flex" alignItems="center" justifyContent="center">
          <CircularProgress color="primary" />
      </Box>
      );

    return (
        <Fragment>
          <SideBar categories={categories} />
            <Main>
              <Toolbar>
                <SelectField
                      value={categoryState}
                      items={categories}
                      onChange={event => handleChange(event.target.value)}
                />
              </Toolbar>
                <ItemCardContainer>
                {catalogus && catalogus.map(item => (
                    <ItemCard key={item.id} shopItem={item} handleZoom={() => renderItemCardZoomed(item)} />
                ))}
                </ItemCardContainer>
            </Main>

            <Dialog
                maxWidth={false}
                onBackdropClick={() => setItemCardZoomed({ open: false, content: null })}
                open={itemCardZoomed.open}
                >
                {itemCardZoomed.open && <ItemCardZoomed shopItem={itemCardZoomed.content} handleClose={() => setItemCardZoomed({ open: false, content: null })} />}
            </Dialog>
        </Fragment>
    );
};

export default OverviewPage;