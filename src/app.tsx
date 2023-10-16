import React from 'react';
import {Button, SafeAreaView} from 'react-native-windows';
import {ApolloTestComponent} from './apollo-component';
import {ApolloUploadComponent} from './apollo-upload-component';
import {FetchLoadTester} from './fetch-download';
import {FetchUploadBlobTester, FetchUploadFileTester} from './fetch-upload';

function App(): JSX.Element {
  const [isApolloComponentVisible, setIsApolloComponentVisible] =
    React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: '#333'}}>
      <Button
        title="load apollo component"
        onPress={() => setIsApolloComponentVisible(true)}
      />
      {isApolloComponentVisible && <ApolloTestComponent />}
      {isApolloComponentVisible && <ApolloUploadComponent />}

      <FetchLoadTester />

      <FetchUploadBlobTester />
      <FetchUploadFileTester />
    </SafeAreaView>
  );
}

export default App;
