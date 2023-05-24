import React,{useState,useContext,useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { Text } from 'react-native-paper';
import AuthContext from '../context/AuthContext';


const Login = ({navigation}) => {
    let {loginuser}=useContext(AuthContext)
    let {user}=useContext(AuthContext)
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    useEffect(() => {
        if(user!=null){
            navigation.navigate('Navbar')
        }
        
    }, [user]);
    
    return (
        <View style={{
        justifyContent:"center",
        alignContent:"center"}}>
            <Text>
                This is login screen
            </Text>

            <View>
                <TextInput placeholder='Username' placeholderTextColor="black" style={styles.inputfield} value={username}
                        onChangeText={(username) => {
                            setUsername(username)
                        }}/>
                <TextInput placeholder='Password' placeholderTextColor="black"  style={styles.inputfield} secureTextEntry={true} value={password}
                    onChangeText={(password)=>{
                        setPassword(password)
                    }}
                />
                
            </View>
            <TouchableOpacity
            onPress={()=>{
                loginuser(username,password)

            }}
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
