import React,{useContext,useEffect} from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import AuthContext from '../context/AuthContext';

const ProfileScreen = ({navigation}) => {
    let {user}=useContext(AuthContext)
    let{logoutUser}=useContext(AuthContext)

    useEffect(() => {
        if(user==null){
            navigation.navigate('login')
        }
        
    },[user]);
    return (
        <View>
            <Text style={{color:"black"}}>This is Profile Screen for {user?user.username:""}</Text>
            <TouchableOpacity
            onPress={()=>{
                logoutUser()

            }}
            >
                <Text
                style={{
                    backgroundColor:"blue",
                    color:"white",
                    width:50,
                    margin:10,
                    padding:5

                    }}>Logout</Text>
                
            </TouchableOpacity>
        </View>
    );
}



export default ProfileScreen;
