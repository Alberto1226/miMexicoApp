/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StatusBar,
  View,
} from 'react-native';

/*bootstrap*/
import { WebView } from 'react-native-webview';



type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  
  return (

    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#000'}/>
      <WebView
        source={{ uri: 'https://www.mxtvmas.com/' }}
      />
    </View>
     
    
  );
}





export default App;
