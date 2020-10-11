import { makeExecutableSchema } from "@graphql-tools/schema";
// import { makeExecutableSchema } from "apollo-server";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
