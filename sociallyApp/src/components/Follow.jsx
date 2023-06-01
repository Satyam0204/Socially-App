import {BASE_URL} from '@env'
import React,{useState,useContext, useEffect} from 'react';
import {View, TouchableOpacity,Text,StyleSheet} from 'react-native';
import AuthContext from '../context/AuthContext';



const Follow = ({profile}) => {
    let {user,token}=useContext(AuthContext)

    const [follows,setfollows]=useState("")
    
    
    useEffect(() => {
        console.log("rendering follow component")
        if(profile!=null)
            profile.followers_arr.includes(user?user.user_id:null)?
                setfollows("followed"):
                setfollows("unfollowed")
                
        
    }, [profile]);
    let followprofile = async()=>{
        let response = await fetch(`${BASE_URL}/api/follow/${profile.user_id}/`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+token
            }
        })
        let data = await response.json()
        console.log(data)
        setfollows("followed")
    }

    let unfollowprofile = async()=>{
        let response = await fetch(`${BASE_URL}/api/unfollow/${profile.user_id}/`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+token
            }
        })
        let data = await response.json()
        console.log(data)
        setfollows("unfollowed")
    }



    return (
        <View>
            {follows==="followed"?
            <TouchableOpacity
                onPress={()=>{
                    unfollowprofile()
                }}
            >
                <Text style={styles.Follow} >Unfollow</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
                onPress={()=>{
                    followprofile()
                }}
            >
                <Text style={styles.Follow} >Follow</Text>
            </TouchableOpacity>
            }
        </View>
    );

}

const styles = StyleSheet.create({

    Follow:{
        backgroundColor:"blue",
        color:"white",
        width:80,
        margin:10,
        padding:5

        }
})
export default Follow;
