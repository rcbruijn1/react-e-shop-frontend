import { gql } from '@apollo/client';

/**
 * Create a new User
 */
export const CREATE_USER = gql`
  mutation (
    $fullname: String!
    $username: String!
    $password: String!
    ) {
    addUser(
      fullname: $fullname
      username: $username
      password: $password
    ) {
        id
        fullname
        username
        password
    }
  }
`;