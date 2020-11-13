import { gql } from '@apollo/client';

/**
 * Retrieve all Shop Items
 */
export const GET_SHOP_ITEMS = gql`
  query {
      getShopItems {
        id
        title
        price
        description
        category
        image
  }
}
`;