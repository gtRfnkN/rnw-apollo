import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {ApolloTestComponent} from './App-apollo';

function App(): JSX.Element {
  const [isApolloComponentVisible, setIsApolloComponentVisible] =
    React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: '#333'}}>
      <Button
        title="Load Apollo Component"
        onPress={() => setIsApolloComponentVisible(true)}
      />
      {isApolloComponentVisible && <ApolloTestComponent />}

      <Button
        title="fetch() Google.com"
        onPress={() => fetch('https://google.com')}
      />
    </SafeAreaView>
  );
}

export default App;
