import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import {Text, View, ScrollView} from 'react-native';
import {Image} from 'react-native-windows';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export function ApolloTestComponent() {
  return (
    <ApolloProvider client={client}>
      <View style={{backgroundColor: '#007700', padding: 32}}>
        <Text>Apollo is working</Text>
        <DisplayLocations />
      </View>
    </ApolloProvider>
  );
}

function DisplayLocations() {
  const {loading, error, data} = useQuery(GET_LOCATIONS);

  if (loading) {
    return <Text>Loading Data</Text>;
  }
  if (error) {
    return <Text>Error : {error.message}</Text>;
  }

  return (
    <ScrollView style={{maxHeight: 320}}>
      {data.locations.map(({id, name, description, photo}) => (
        <View
          key={id}
          style={{backgroundColor: '#005500', padding: 12, marginVertical: 12}}>
          <Text style={{fontSize: 24, marginBottom: 12}}>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: photo}} style={{width: 400, height: 250}} />
            <Text style={{flex: 1, marginLeft: 12}}>
              About this location: {description}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
