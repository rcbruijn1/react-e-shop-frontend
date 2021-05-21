import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

// Reducer
import { entityReducer } from '../reducers/entity.reducer';

// Check for a graphql solution first!
const initialState = {
  shoppingCart: {},
  favorites: {},
};

export const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entityReducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
