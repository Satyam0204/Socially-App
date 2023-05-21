import { View, Text ,StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const Header = () => {
  return (
    
    <View style={{backgroundColor:"#151129"}}>


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
      
    </View>
   
  )
}
const styles = StyleSheet.create({
  container:{
    
    justifyContent:'space-between',
    alignItems:'center',
    margin:20,

   
    borderRadius:10,
    flexDirection:'row',
    
    height:40,
    padding:10,

    

  },

    logo:{
      // margin:10,
      height:50,
      width:120,
    },
    headerEnd:{
      marginHorizontal:10,
      
      height:32,

    }
})

export default Header