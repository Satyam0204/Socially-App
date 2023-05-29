import { View, Text, ScrollView,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import PostItemList from '../components/posts/PostItemList'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'


const HomeScreen = ({navigation}) => {
  return (

    <SafeAreaView  >
      <Header navigation={navigation}/>
      <LinearGradient
      colors={['#151129', '#2e2033']}
      >


        <ScrollView >


        <PostItemList/>  
        
        </ScrollView>
      </LinearGradient>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:"black"
  }
})

export default HomeScreen