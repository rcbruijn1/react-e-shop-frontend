import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/client';

// Core
import { ItemCard, ItemCardContainer, ItemCardZoomed, Main } from '../../components';

// GraphQL
import { GET_SHOP_ITEMS } from '../../grapql/ShopItem.queries';
import { Dialog } from '@material-ui/core';

const GetShopItems = () => {
  const { loading, data } = useQuery(GET_SHOP_ITEMS, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return { loading: true, shopItems: [] };
  return (data && { loading: false, shopItems: data.getShopItems }) || [];
};

const OverviewPage = () => {
    const [itemCardZoomed, setItemCardZoomed] = useState({ open: false, content: null });

    const { shopItems, loading } = GetShopItems();
  
    const renderItemCardZoomed = shopItem => {
      setItemCardZoomed({ open: true, content: shopItem});
    };
  
    if (loading) return null;

    return (
        <Fragment>
            <Main>
                <ItemCardContainer>
                {shopItems.map(item => (
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