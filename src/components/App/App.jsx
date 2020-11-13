import React, { useState } from 'react';
import { SnackbarProvider } from 'notistack'; 
import { useQuery } from '@apollo/client';

// Core
import { Main, TopBar, BottomBar, SideBar } from '../../components' ;
import ItemCardContainer from '../item/item_card_container/item_card_container';
import ItemCard from '../item/item_card/item_card';

// Styles
import { useAppStyles } from './App.style';
import { Dialog } from '@material-ui/core';
import { ItemCardZoomed } from '../../components';

// GraphQL
import { GET_SHOP_ITEMS } from '../../grapql/ShopItem.queries';

const GetShopItems = () => {
  const { loading, data } = useQuery(GET_SHOP_ITEMS, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return { loading: true, shopItems: [] };
  return (data && { loading: false, shopItems: data.getShopItems }) || [];
};

const App = () => {
  const classes = useAppStyles();
  const [itemCardZoomed, setItemCardZoomed] = useState({ open: false, content: null });

  const { shopItems, loading } = GetShopItems();

  console.log(shopItems, loading);

  const renderItemCardZoomed = shopItem => {
    setItemCardZoomed({ open: true, content: shopItem});
  };

  if (loading) return null;

  return (
    <div className={classes.wrapper}>
      <SnackbarProvider 
        maxSnack={3}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
      >
        <TopBar />
        <SideBar />

        <Main>
          <ItemCardContainer>
            {shopItems.map(item => (
              <ItemCard key={item.id} shopItem={item} handleZoom={() => renderItemCardZoomed(item)} />
            ))}
          </ItemCardContainer>
        </Main>

        <BottomBar />
      </SnackbarProvider>

      <Dialog
        maxWidth={false}
        onBackdropClick={() => setItemCardZoomed({ open: false, content: null })}
        open={itemCardZoomed.open}
      >
        {itemCardZoomed.open && <ItemCardZoomed shopItem={itemCardZoomed.content} handleClose={() => setItemCardZoomed({ open: false, content: null })} />}
      </Dialog>
    </div>
  );
}

export default App;
