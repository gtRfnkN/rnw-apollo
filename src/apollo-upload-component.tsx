import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useMutation,
} from '@apollo/client';
import {Text, View} from 'react-native';
import {Button} from 'react-native-windows';
import {ReactNativeFile, createUploadLink} from 'apollo-upload-client';
import DocumentPicker from 'react-native-document-picker';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({uri: 'http://localhost:3001/graphql'}),
});

export function ApolloUploadComponent() {
  return (
    <ApolloProvider client={client}>
      <UploadComponentInner />
    </ApolloProvider>
  );
}

const SINGLE_UPLOAD_MUTATION = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      id
    }
  }
`;

function UploadComponentInner() {
  const [response, setResponse] = React.useState<string | null>(null);

  const [uploadFileMutation] = useMutation(SINGLE_UPLOAD_MUTATION);
  const onUploadFile = (uri: string) => {
    const file = new ReactNativeFile({
      uri,
      name: 'custom-file',
      type: 'image/png',
    });
    uploadFileMutation({
      variables: {file},
      onCompleted: data => {
        console.log(data);
        setResponse('Success: \n' + JSON.stringify(data, undefined, 2));
      },
      onError: error => {
        console.log(error);
        setResponse('Error: \n' + JSON.stringify(error, undefined, 2));
      },
    });
  };

  return (
    <>
      <View style={{backgroundColor: '#005577', padding: 32}}>
        <Text>Apollo Upload has loaded</Text>
        <Button
          title="pick and upload file"
          onPress={() => {
            setResponse('Selecting file...');
            DocumentPicker.pickSingle()
              .then(file => {
                setResponse('Uploading...');
                onUploadFile(file.uri);
              })
              .catch(err => {
                setResponse('Error selecting file...');
                console.log(err);
              });
          }}
        />
        <ResponseViewer response={response} />
      </View>
    </>
  );
}

function ResponseViewer(props: {response: string | null}) {
  return props.response ? (
    <Text>{props.response}</Text>
  ) : (
    <Text>No file uploaded yet</Text>
  );
}
