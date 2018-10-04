// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'World',
    },
  },
});
