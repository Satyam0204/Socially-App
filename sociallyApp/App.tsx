import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useContext} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';


import Header from './src/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import MyStack from './src/components/Navigation/StackNavigator';





function App(): JSX.Element {


  return (
    <AuthProvider>

    <View style={styles.app}>
        <NavigationContainer>
          <MyStack/>
          
      </NavigationContainer>
    
    </View>
    </AuthProvider>
  )
}

const styles=StyleSheet.create({
  app:{
      flex:1,
      backgroundColor:"white"
    }
})


export default App;
