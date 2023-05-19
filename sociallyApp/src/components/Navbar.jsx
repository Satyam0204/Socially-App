import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import NewPostScreen from '../screens/NewPostScreen';

import ChatScreen from '../screens/ChatScreen';


const Tab=createBottomTabNavigator()

const Navbar = () => {
  return (
    
      <Tab.Navigator
      // screenOptions={{ tabBarShowLabel: false }} 
      > 
        <Tab.Screen  options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Tab.Screen  options={{ headerShown: false }} name="Chats" component={ChatScreen} />
        <Tab.Screen  options={{ headerShown: false }} name="New Post" component={NewPostScreen} />
        <Tab.Screen  options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    
  );
};

const styles = StyleSheet.create({});

export default Navbar;
