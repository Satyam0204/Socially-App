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

import Header from './src/components/Header';
import { NavigationContainer } from '@react-navigation/native';



function App(): JSX.Element {


  return (
    <View style={
      { flex:1,
        backgroundColor:'white'}
    }>
        <NavigationContainer>
          <Header />
          <Navbar/>
      </NavigationContainer>
    </View>
  )
}



export default App;
