import { ApolloServer } from 'apollo-server';
import MovieResolvers from './graphql/movies/resolvers.js';
import MovieSchemas from './graphql/movies/schema.js';

const typeDefs = MovieSchemas;

const resolvers = MovieResolvers;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});