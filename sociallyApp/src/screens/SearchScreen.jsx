import {BASE_URL} from '@env';

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import SearchResult from '../components/SearchResult';

const SearchScreen = ({navigation}) => {
  var [searchbar, setsearchbar] = useState();

  let [results, setResults] = useState([]);

  let searchProfile = async () => {
    let response = await fetch(`${BASE_URL}/api/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({profile: searchbar}),
    });
    let data = await response.json();

    setResults(data);
  };

  useEffect(() => {
    if (searchbar) {
      searchProfile();
    } else {
      setResults([]);
    }
  }, [searchbar]);

  return (
    <View>
      <Text style={{color: 'black'}}>this is the search screen</Text>

      <View>
        <TextInput
          placeholder="search here"
          placeholderTextColor="black"
          clearButtonMode="always"
          style={styles.inputfield}
          value={searchbar}
          onChangeText={searchbar => {
            setsearchbar(searchbar);
          }}
        />
      </View>

      {results.map((result, index) => (
        <View key={index}>
          <SearchResult result={result} navigation={navigation}/>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputfield: {
    color: 'black',
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
  results: {
    color: 'black',
    borderWidth: 2,
    borderColor: 'black',
    margin: 15,
    padding: 2,
  },
});

export default SearchScreen;
