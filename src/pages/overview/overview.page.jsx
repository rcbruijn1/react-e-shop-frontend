import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/client';

// Core
import { ItemCard, ItemCardContainer, ItemCardZoomed, Main } from '../../components';

// Utils
import { filterByCategory, retrieveAllCategories } from '../../helpers/shopItems.helper';

// GraphQL
import { GET_SHOP_ITEMS } from '../../graphql/ShopItem.queries';
import { Box, Dialog, MenuItem, Select } from '@material-ui/core';
import { useEffect } from 'react';

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
  
    if (loading) return null;

    return (
        <Fragment>
            <Main>
                <Box width="100%" p={2} bgcolor="rgba(0,0,0, 0.12)" display="flex" justifyContent="center">
                  <Select
                    variant="outlined"
                    value={categoryState}
                    onChange={event => handleChange(event.target.value)}
                  >
                    <MenuItem value="all">All</MenuItem>
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </Box>
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