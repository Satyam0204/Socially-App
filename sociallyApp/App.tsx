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
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Navbar from './src/components/Navbar';

import Header from './src/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'



function App(): JSX.Element {


  return (
    <View style={styles.app}>
        <NavigationContainer>
          <Header />
          <Navbar/>
      </NavigationContainer>
    
    </View>
  )
}

const styles=StyleSheet.create({
  app:{
      flex:1,
      backgroundColor:"white"
    }
})


export default App;
