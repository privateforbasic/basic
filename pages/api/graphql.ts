import { ApolloServer } from "apollo-server-micro";

// import { initializeDB } from "src/db";
import { schema } from "src/schema";

const apolloServer = new ApolloServer({
  schema,
  // context: async () => {
  //   const db = await initializeDB();
  //   console.log({ db });
  //   return { db };
  // },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
