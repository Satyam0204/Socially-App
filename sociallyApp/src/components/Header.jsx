import { View, Text ,StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
     <TouchableOpacity>

      <Image style={styles.logo} source={require('../Assets/Logo.png')}/>
     </TouchableOpacity>
     <View>
     <TouchableOpacity>
      <Image style={styles.headerEnd} source={require('../Assets/notification.png')}/>
      </TouchableOpacity>
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    
    justifyContent:'space-between',
    alignItems:'center',
    
    backgroundColor:"#561dab",
    borderWidth:3,
    borderColor:'#7c15d6',
    borderRadius:10,
    flexDirection:'row',
    
    margin:7,
    padding:10,
    elevation:1,
    

  },

    logo:{
      margin:10,
      height:50,
      width:120,
    },
    headerEnd:{
      marginHorizontal:10,
      
      height:32,

    }
})

export default Header