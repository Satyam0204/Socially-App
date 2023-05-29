import React,{useState,useContext,useEffect} from 'react';
import {BASE_URL} from '@env'
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import AuthContext from '../context/AuthContext';

const ProfileScreen = ({navigation}) => {
    let {user,token}=useContext(AuthContext)
    let{logoutUser}=useContext(AuthContext)

    const [followers, setfollowers] = useState();
    const [following, setfollowing] = useState();

    let getProfile=async ()=>{
        let response= await fetch(`${BASE_URL}/api/user`,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                "Authorization":'Bearer '+token
            }
        })  
        
        let data = await response.json()
        setfollowers(data.followers)
        setfollowing(data.following)
    }


    useEffect(() => {
        if(user==null){
            navigation.navigate('login')
        }
        getProfile()
        
    },[]);
    return (
        <View>
            <Text style={{color:"black"}}>{user?user.username:""}</Text>

        <View style={styles.stats}>
            <Text style={styles.statsText}>Followers: {followers}</Text>
            <Text style={styles.statsText}>Following: {following}</Text>
        </View>

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


const styles= StyleSheet.create({
    statsText:{
        color:"black"
    }
})

export default ProfileScreen;
