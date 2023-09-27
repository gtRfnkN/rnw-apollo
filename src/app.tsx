import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {ApolloTestComponent} from './apollo-component';
import {Text, View} from 'react-native';

function App(): JSX.Element {
  const [isApolloComponentVisible, setIsApolloComponentVisible] =
    React.useState(false);
  const [hasResponseFromFetch, setHasResponseFromFetch] = React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: '#333'}}>
      <Button
        title="load apollo component"
        onPress={() => setIsApolloComponentVisible(true)}
      />
      {isApolloComponentVisible && <ApolloTestComponent />}

      <Button
        title="fetch google.com"
        onPress={() => {
          setHasResponseFromFetch(false);
          fetch('https://google.com')
            .then(result => result.text())
            .then(() => setHasResponseFromFetch(true));
        }}
      />
      {hasResponseFromFetch && (
        <View style={{backgroundColor: '#007700', padding: 32}}>
          <Text>Fetch was successful</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default App;
