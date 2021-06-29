import { ApolloServer } from 'apollo-server';
import MovieResolvers from './graphql/resolvers.js';
import MovieSchemas from './graphql/schema.js';

const typeDefs = MovieSchemas;

const resolvers = MovieResolvers;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});