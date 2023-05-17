/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Navbar from './src/components/Navbar';
import HomeScreen from './src/screens/HomeScreen';


function App(): JSX.Element {


  return (
    <View style={
      { flex:1,
        backgroundColor:'white'}
    }>
      <HomeScreen/>
    </View>
  )
}



export default App;
