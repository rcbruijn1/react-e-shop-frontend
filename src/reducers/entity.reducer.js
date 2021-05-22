export const entityReducer = (state, action) => {
  const actionTypes = {
    'UPDATE_SHOPPING_CART': {
      ...state,
      shoppingCart: [
        ...state.shoppingCart,
        action.payload,
      ],
    },
    'REMOVE_SHOPPING_CART_ITEM': {
      ...state,
      shoppingCart: state.shoppingCart.filter((x) => x.id !== action.payload.id),
    },
    'UPDATE_FAVORITES': {
      ...state,
      favorites: [
        ...state.favorites,
        action.payload,
      ],
    },
  };
  return actionTypes[action.type] || state;
};
