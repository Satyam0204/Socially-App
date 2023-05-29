import React from 'react';
import {View,Text,TouchableOpacity ,StyleSheet} from 'react-native';

const SearchResult = ({result,navigation}) => {

    return (
        <View>
            <TouchableOpacity onPress={
            ()=>{

              navigation.navigate('UserProfile',{id:result.user_id})
            }
          }>
             <Text style={styles.results} >
             {result.username}

             </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  results: {
    color: 'black',
    borderWidth: 2,
    borderColor: 'black',
    margin: 15,
    padding: 2,
  },
})

export default SearchResult;
