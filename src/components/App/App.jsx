import React, { useState } from 'react';
import { SnackbarProvider } from 'notistack'; 

// Core
import { Main, TopBar, BottomBar, SideBar } from '../../components' ;
import ItemCardContainer from '../item/item_card_container/item_card_container';
import ItemCard from '../item/item_card/item_card';

// Assets
import shopItems from '../../assets/items.json';

// Styles
import { useAppStyles } from './App.style';
import { Dialog } from '@material-ui/core';
import { ItemCardZoomed } from '../../components';

const App = () => {
  const classes = useAppStyles();
  const [itemCardZoomed, setItemCardZoomed] = useState({ open: false, content: null })

  const renderItemCardZoomed = shopItem => {
    setItemCardZoomed({ open: true, content: shopItem});
  };

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
