// @flow

import { ApolloServer } from 'apollo-server';

import Schema from './Schema';

const port = 4001;
const startServer = async () => {
  const server = new ApolloServer({
    schema: Schema,
    tracing: true,
  });

  server.listen(port).then(({ url }) => {
    console.log(`GraphQL server ready at ${url}`); // eslint-disable-line no-console
  });
};

startServer().catch((error: Error) => {
  console.error(error); // eslint-disable-line no-console
});
