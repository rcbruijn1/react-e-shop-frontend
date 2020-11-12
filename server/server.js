const path = require('path');
const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const userResolvers = require('./graphql/resolvers/User.resolver');
const userSchema = require('./graphql/schemas/User.schema');

const typeDefs = [userSchema];
const resolvers = [userResolvers];

const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3011;
const graphQlServer = new GraphQLServer({ typeDefs, resolvers })

mongoose.connect("mongodb://localhost:27017/ReactEShop");

mongoose.connection.once("open", function(){
   graphQlServer.start(() => console.log('Server is running on localhost:4000'))
});


app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}!`);
});