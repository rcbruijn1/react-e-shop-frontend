import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';

// Icons
import { Category, ExpandLess, ExpandMore, Favorite } from '@material-ui/icons';

// Core
import { Box, CircularProgress, Collapse, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from '@material-ui/core';
import { ItemCard, ItemCardContainer, Main } from '../../components';

// Utils
import { filterByCategory, retrieveAllCategories } from '../../helpers/shopItems.helper';
import { StoreContext } from '../../providers/store.provider';

// GraphQL
import { GET_SHOP_ITEMS } from '../../graphql/ShopItem.queries';

const GetShopItems = () => {
  const { loading, data } = useQuery(GET_SHOP_ITEMS, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return { loading: true, shopItems: [] };
  return (data && { loading: false, shopItems: data.getShopItems }) || [];
};

const OverviewPage = () => {
  const theme = useTheme();
  const { shopItems, loading } = GetShopItems();
  const [state] = useContext(StoreContext);
  const categories = retrieveAllCategories(shopItems);

  const [catalogus, setCatalogus] = useState(null);
  const [collapse, setCollapse] = useState(false);

  const handleChange = (event, value) => {
    event.preventDefault();
    const newCatalogus = filterByCategory(value, shopItems);
    setCatalogus(newCatalogus);
  };

  const setFavorites = () => {
    if(state.favorites.length > 0) {
      setCatalogus(state.favorites);
    }
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
    <Box display="flex" height="100%" minHeight="100%">
      <Box
        py={3}
        height="calc(100% - 64px)"
        position="fixed"
        top={64}
        width={250}
        borderRight={`1px solid ${theme.palette.primary.main}`}
      >
        <List>
          <ListItem button onClick={() => setCollapse(!collapse)}>
            <ListItemIcon>
              <Category color="primary" />
            </ListItemIcon>
            <ListItemText primary="Categories" />
            {collapse ? <ExpandLess color="primary" /> : <ExpandMore color="primary" />}
          </ListItem>

          <Collapse in={collapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {categories.map(item => (
                <ListItem
                  button
                  key={item}
                  onClick={event => handleChange(event, item)}
                >
                  <Typography>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Collapse>

          <ListItem button onClick={setFavorites}>
            <ListItemIcon>
              <Favorite color="primary" />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
        </List>
      </Box>

      <Main withSidebar>
        <ItemCardContainer>
          {catalogus && catalogus.map(item => (
            <ItemCard key={item.id} shopItem={item} />
          ))}
        </ItemCardContainer>
      </Main>
    </Box>
  );
};

export default OverviewPage;