import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ApolloClient} from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

import MainNav from "./navigation/MainNav";

const client = ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:9000/graphql',
  }),
  cache: new InMemoryCache()
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainNav/>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
