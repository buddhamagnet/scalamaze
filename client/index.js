import { ApolloServer, gql } from "apollo-server";
import { ThingsAPI } from "./datasource";

const typeDefs = gql`
  type Thing {
    question: Boolean
    text: String
  }
  type Query {
    questions: [Thing]
  }
`;

const resolvers = {
  Query: {
    questions: async (_root, _, { dataSources }) => {
      const b = await dataSources.thingsAPI.getQuestions();
      console.dir(b);
      return dataSources.thingsAPI.getQuestions();
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
