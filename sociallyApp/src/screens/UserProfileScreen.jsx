import {BASE_URL} from "@env"
import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import AuthContext from "../context/AuthContext";
import { useRoute } from "@react-navigation/native";


const UserProfileScreen = ({route,navigation}) => {
    
    let [profile,setProfile]=useState({})
    
    let userProfile = async ()=>{

        let response = await fetch(`${BASE_URL}/api/profile/${route.params.id}`,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
            }
        })
        return await response.json()
 
 
    }
    
    useEffect(() => {
        userProfile().then(data=>setProfile(data))

    }, []);
    return (
 
            <View>
            <Text style={{color:"black"}}>{profile?profile.username:""}</Text>
            {/* <Text style={{color:"black"}}>username</Text> */}

        <View style={styles.stats}>
            <Text style={styles.statsText}>Followers: {profile.followers}</Text>
            <Text style={styles.statsText}>Following: {profile.following}</Text>
            {/* <Text style={styles.statsText}>Followers:121 </Text>
            <Text style={styles.statsText}>Following: 101</Text> */}

        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    statsText:{
        color:"black"
    }
})

export default UserProfileScreen;
