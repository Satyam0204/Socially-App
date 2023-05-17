import { View, Text ,StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
     <TouchableOpacity>

      <Image style={styles.logo} source={require('../Assets/Logo.png')}/>
     </TouchableOpacity>
     <View>

      <Image style={styles.headerEnd} source={require('../Assets/notification.png')}/>
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    
    justifyContent:'space-between',
    alignItems:'center',
    
    backgroundColor:"#fadeff",
    borderColor:'#7c15d6',
    borderRadius:10,
    flexDirection:'row',
    
    margin:7,
    padding:10

  },

    logo:{
      margin:10,
      height:50,
      width:120
    },
    headerEnd:{
      
      height:25,

    }
})

export default Header