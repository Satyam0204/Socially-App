import {BASE_URL} from '@env'

import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchScreen = () => {
    var [searchbar,setsearchbar]=useState("")

    let [results, setResults]=useState([])


   
      let searchProfile = async () =>{

        let response = await fetch(`${BASE_URL}/api/search`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({"profile":searchbar})
        })
        let data = await response.json() 

        setResults(data)
      }
    


 useEffect(() => {
  if(searchbar){
    searchProfile()
}

  else{
    setResults([])
  }
 }, [searchbar]);

    return (
        <View>
            <Text style={{color:"black"}}>
                this is the search screen
            </Text>


            <View><TextInput placeholder='search here' placeholderTextColor="black" clearButtonMode="always" style={styles.inputfield} value={searchbar}
                        onChangeText={(searchbar) => {
                            setsearchbar(searchbar)
                        }}/></View>

        <View>
        {results.map((result,index)=>(
          <View key={index}>
             <Text style={styles.results} >
             {result.username}

             </Text>
            </View>

        ))}
      </View>

        </View>
    );
}

const styles = StyleSheet.create({
    inputfield:{
        color:"black", 
        borderWidth:1,
        margin:5,
        padding:5
    },
    results:{
        color:"black"
    }
})

export default SearchScreen;
