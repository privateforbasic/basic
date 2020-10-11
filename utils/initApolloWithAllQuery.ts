import { initializeApollo } from "src/apolloClient";
import { RootQuery } from "graphql/queries";

export const initApolloWithAllQuery = async (
  query = RootQuery,
  variables = {}
) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query, variables });

  return apolloClient.cache.extract();
};
