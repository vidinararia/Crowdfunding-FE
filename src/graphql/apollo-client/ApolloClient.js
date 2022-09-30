import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://strong-unicorn-74.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "b0eSRZSrXJuaod2iG39qZpiPEbjxq9dTDh6XANDMenOwzAwhu13iVQD1jwIs3NZb",
  },
});

export default client;
