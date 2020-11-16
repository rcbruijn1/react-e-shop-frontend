import { gql } from '@apollo/client';

/**
 * Create a new Shop Item
 */
export const CREATE_SHOP_ITEM = gql`
  mutation (
    $title: String!
    $price: Float!
    $description: String!
    $category: String!
    $image: String!
    ) {
    addShopItem(
        title: $title
        price: $price
        description: $description
        category: $category
        image: $image
    ) {
        title
        price
        description
        category
        image
    }
  }
`;