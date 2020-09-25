import { ApolloServer, gql } from "apollo-server";
import { ThingsAPI } from "./datasource";

const typeDefs = gql`
  type Thing {
    question: Boolean
    text: String
  }
  type Query {
    things(format: String): [Thing!]!
  }
`;

const resolvers = {
  Query: {
    things: async (_root, args, { dataSources }) => {
      const data = await dataSources.thingsAPI.getThings(args.format);
      console.dir(args);
      return JSON.parse(data);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    thingsAPI: new ThingsAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
