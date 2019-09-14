import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'
import {ApolloProvider, graphql} from 'react-apollo'

import MainNav from "./navigation/MainNav";
import MainScreen from "./screens/users/MainScreen";

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://10.34.244.98:9000/graphql' }),
  cache: new InMemoryCache().restore({}),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainScreen/>
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
