/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {ApolloTestComponent} from './App-apollo';

function App(): JSX.Element {
  const [isApolloComponentVisible, setIsApolloComponentVisible] =
    React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: '#333'}}>
      <Button
        title="Click me"
        onPress={() => setIsApolloComponentVisible(true)}
      />
      {isApolloComponentVisible && <ApolloTestComponent />}
    </SafeAreaView>
  );
}

export default App;
