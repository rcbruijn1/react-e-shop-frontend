const userSchema = 

`type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }
  type User {
      id: ID!
      fullname: String!
      username: String!
      password: String!
  }
  type Mutation {
      addUser(fullname: String!, username: String!, password: String!): User!,
      deleteUser(id: ID!): String
  }`;

  module.exports = userSchema;