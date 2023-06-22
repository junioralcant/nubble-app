import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>JUNIOR</Text>
      <Text style={{fontFamily: 'Satoshi-MediumItalic'}}>JUNIOR</Text>
    </SafeAreaView>
  );
}

export default App;
