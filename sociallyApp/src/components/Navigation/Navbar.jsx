import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../../screens/ProfileScreen';
import HomeScreen from '../../screens/HomeScreen';
import NewPostScreen from '../../screens/NewPostScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatScreen from '../../screens/ChatScreen';
import { shadow } from 'react-native-paper';
import Login from '../../screens/Login';
import { NavigationContainer } from '@react-navigation/native';


const Tab=createBottomTabNavigator()

const Navbar = () => {
  return (


      <Tab.Navigator

      // screenOptions={{ tabBarShowLabel: false }} 
      screenOptions={{
        tabBarActiveTintColor: '#f9724c',
        
        tabBarShowLabel: false ,
        tabBarStyle:styles.navigator
        
        
      }}
      > 
     
        <Tab.Screen  options={{ 
          headerShown: false ,
          
          tabBarIcon:({focused})=>(
            <View>
              <Image source={require('../../Assets/house.png')} 
      
      style={{
        
                height:15,
                width:15,
                tintColor: focused?'#f9724c':'#e0dcdc'
              }}
              />
              
            </View>
          ),
          
        }} name="Home" component={HomeScreen} />



        <Tab.Screen  options={{ 
          headerShown: false ,
          
          tabBarIcon:({focused})=>(
            <View>
              <Image source={require('../../Assets/chat.png')} 
      
      style={{
        
        height:15,
        width:15,
        tintColor: focused?'#f9724c':'#e0dcdc'
      }}
      />
              
            </View>
          ),
          
        }} name="Chats" component={ChatScreen} />




        <Tab.Screen  options={{ 
          headerShown: false ,
          
          tabBarIcon:({focused})=>(
            <View>
              <Image source={require('../../Assets/add-post.png')} 
      
      style={{
        
        height:15,
        width:15,
        tintColor: focused?'#f9724c':'#e0dcdc'
      }}
      />
              
            </View>
          ),
          
        }} name="New Post" component={NewPostScreen} />
        <Tab.Screen  options={{ 
          headerShown: false ,
          
          tabBarIcon:({focused})=>(
            <View>
              <Image source={require('../../Assets/profile.png')} 
      
      style={{
        
        height:15,
        width:15,
        tintColor: focused?'#f9724c':'#e0dcdc'
      }}
      />
              
            </View>
          ),
          
        }} name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

    
  );
};

const styles = StyleSheet.create({
  navigator:{
    backgroundColor:"#151129",
    position:"absolute",
    left:10,
    right:10,
    bottom:5,
    height:65,
    borderRadius:25,
    elevation:1,
    borderTopWidth: 0

  },
  

});

export default Navbar;
