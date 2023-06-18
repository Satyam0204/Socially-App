import React,{useState} from 'react';
import {View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

const NewPostScreen = () => {

    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    return (
        <View>
            <Text style={{color:"black"}}>This is NewPostScreen</Text>
            <TextInput placeholder='title' placeholderTextColor="black" style={styles.inputfield} value={title}
                        onChangeText={(title) => {
                            setTitle(title)
                        }}/>
            <TextInput placeholder='desc' placeholderTextColor="black" style={styles.inputfield} value={desc}
                        onChangeText={(desc) => {
                            setDesc(desc)
        
        }}/>
        <TouchableOpacity>
            <Text>Create</Text>
        </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    inputfield:{
        color:"black", 
        borderWidth:1,
        margin:5,
        padding:5
    }
})

export default NewPostScreen;
