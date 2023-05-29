import { View, Text ,StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'



const Header = ({navigation}) => {
  return (
    
    <View style={{backgroundColor:"#151129"}}>


    <View style={styles.container}>
     <TouchableOpacity>

      <Image style={styles.logo} source={require('../Assets/Logo.png')}/>
     </TouchableOpacity>
     <View
     style={{flexDirection:'row',right:0}}>
     <TouchableOpacity>
      <Image style={styles.headerEnd} source={require('../Assets/notification.png')}/>
      </TouchableOpacity>
     <TouchableOpacity 
      onPress={()=>[
        navigation.navigate('Search')
      ]}
     >

      <Image style={styles.headerEnd} source={require('../Assets/search.png')}/>
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
      marginHorizontal:5,
      
      height:32,

    }
})

export default Header