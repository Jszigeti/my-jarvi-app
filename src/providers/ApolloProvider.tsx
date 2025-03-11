"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";

const ApolloProviderContext = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderContext;
