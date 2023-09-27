import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Text, View} from 'react-native';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

export function ApolloTestComponent() {
  return (
    <ApolloProvider client={client}>
      <View style={{backgroundColor: '#f00', padding: 32}}>
        <Text>Apollo is working</Text>
      </View>
    </ApolloProvider>
  );
}
