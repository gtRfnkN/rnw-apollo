import React from 'react';
import {Button, Text, View} from 'react-native-windows';
import DocumentPicker from 'react-native-document-picker';

export function FetchUploadFileTester() {
  const [response, setResponse] = React.useState('nothing yet');

  return (
    <View style={{marginTop: 32}}>
      <Button
        title="pick and upload file"
        onPress={() => {
          setResponse('Selecting file...');
          DocumentPicker.pickSingle()
            .then(file => {
              setResponse('Uploading...');

              const formData = new FormData();
              formData.append('files', file);

              fetch('localhost:8080/upload', {
                method: 'POST',
                body: formData,
              })
                .then(result => setResponse('Upload successful: ' + result))
                .catch(error => {
                  console.log('ERROR', error);
                  setResponse('Upload failed: ' + error);
                });
            })
            .catch(err => {
              setResponse('Error selecting file...');
              console.log(err);
            });
        }}
      />

      <View style={{backgroundColor: '#111', padding: 12}}>
        <Text>Upload response: {response}</Text>
      </View>
    </View>
  );
}

export function FetchUploadBlobTester() {
  const [response, setResponse] = React.useState('nothing yet');

  return (
    <View style={{marginTop: 32}}>
      <Button
        title="upload random blob"
        onPress={() => {
          const formData = new FormData();
          formData.append('files', 'file');

          fetch('localhost:8080/upload', {
            method: 'POST',
            body: formData,
          })
            .then(result => setResponse('Upload successful: ' + result))
            .catch(error => {
              console.log('ERROR', error);
              setResponse('Upload failed: ' + error);
            });
        }}
      />

      <View style={{backgroundColor: '#111', padding: 12}}>
        <Text>Upload response: {response}</Text>
      </View>
    </View>
  );
}
