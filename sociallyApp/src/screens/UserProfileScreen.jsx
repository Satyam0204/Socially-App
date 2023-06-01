import {BASE_URL} from "@env"
import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet} from 'react-native';

import Follow from "../components/Follow";



const UserProfileScreen = ({route,navigation}) => {
   
    let [profile,setProfile]=useState()

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
        console.log("rendering profile screen")
    }, []);
    return (
 
            <View>
            <Text style={{color:"black"}}>{profile?profile.username:""}</Text>
            <View>
                <Follow profile={profile?profile:null}/>
            </View>

        <View style={styles.stats}>
            <Text style={styles.statsText}>Followers: {profile?profile.followers:""}</Text>
            <Text style={styles.statsText}>Following: {profile?profile.following:""}</Text>


        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    statsText:{
        color:"black"
    },
    
})

export default UserProfileScreen;
