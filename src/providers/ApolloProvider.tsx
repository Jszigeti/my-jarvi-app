"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";

const ApolloProviderContext = ({ children }: any) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderContext;
