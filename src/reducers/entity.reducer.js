export const entityReducer = (state, action) => {
  const actionTypes = {
    'UPDATE_SHOPPING_CART': {
      ...state,
      shoppingCart: {
        ...state.shoppingCart,
        [action.payload.id]: action.payload,
      },
    },
    'UPDATE_FAVORITES': {
      ...state,
      favorites: {
        ...state.favorites,
        [action.payload.id]: action.payload,
      },
    },
  };

  return actionTypes[action.type] || state;
};
