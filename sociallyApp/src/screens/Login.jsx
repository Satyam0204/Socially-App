import React from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { Text } from 'react-native-paper';


const Login = ({navigation}) => {
    return (
        <View style={{
        justifyContent:"center",
        alignContent:"center"}}>
            <Text>
                This is login screen
            </Text>

            <View>
                <TextInput placeholder='Username' placeholderTextColor="black" style={styles.inputfield}/>
                <TextInput placeholder='Password' placeholderTextColor="black"  style={styles.inputfield} secureTextEntry={true}/>
                
            </View>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Navbar')}}
            >
                <Text
                style={{
                    backgroundColor:"blue",
                    color:"white",
                    width:50,
                    margin:10,
                    padding:5

                    }}>Login</Text>
                
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

export default Login;
