import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";

import { createUploadLink } from "apollo-upload-client";

import { split, HttpLink } from "@apollo/client";
// import { WebSocketLink } from "@apollo/client/link/ws";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const isServer = () => typeof window === "undefined";

const uploadLink = createUploadLink({
  uri: "/api/graphql",
});

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:3000/api/graphql`,
//   options: {
//     reconnect: true,
//   },
// });

function createIsomorphicLink() {
  if (isServer()) {
    // server
    const { SchemaLink } = require("@apollo/client/link/schema");
    const { schema } = require("src/schema");
    return new SchemaLink({ schema });
  } else {
    // client
    return uploadLink;
  }
}

function createApolloClient(initialState) {
  return new ApolloClient({
    ssrMode: isServer(),
    link: createIsomorphicLink(),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient(initialState);

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (isServer()) return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}
