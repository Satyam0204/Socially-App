import { View, Text, ScrollView,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'

import Postitem from '../components/postitem'

const HomeScreen = () => {
  return (
    <SafeAreaView  >

        <ScrollView>

          <Postitem/>
        </ScrollView>


    </SafeAreaView>
  )
}

export default HomeScreen