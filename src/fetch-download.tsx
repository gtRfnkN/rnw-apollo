import React from 'react';
import {Button, Text, View} from 'react-native-windows';

export function FetchLoadTester() {
  const [hasResponseFromFetch, setHasResponseFromFetch] = React.useState(false);

  return (
    <View style={{marginTop: 32}}>
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
    </View>
  );
}
