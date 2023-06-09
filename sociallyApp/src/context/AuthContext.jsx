import { View, Text } from 'react-native'
import React,{useState,useEffect, createContext} from 'react'
import jwtDecode from "jwt-decode";
import {BASE_URL} from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext=createContext()


export default AuthContext;

export const AuthProvider=({children})=>{
    let [token,settoken]=useState(null)
    let [user,setUser]=useState(null);
    const isLoggedin=async ()=>{
        try{
            if(await AsyncStorage.getItem('token')){

                const accesstoken=(await AsyncStorage.getItem('token')).slice(1,-1)
                settoken(accesstoken);
                setUser(jwtDecode(accesstoken))
            }
            else{
                settoken(null)
                setUser(null)               
            }          
        }
        catch(err){
            console.log(err)
        }
        
    }
    useEffect(() => {
      isLoggedin()
      
    }, [])   
    let loginuser=async (username,password)=>{
        

        try {
            await AsyncStorage.clear()
            let response=await fetch(`${BASE_URL}/api/login`,{
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'username':username,'password':password})
            })
            let data = await response.json()
            if(response.status===200){
                
                settoken(data.access)
                setUser(jwtDecode(data.access))
                
                await AsyncStorage.setItem('token',JSON.stringify(data.access))

            }
            else{
                console.error(data)
            }
        } catch (error) {
            console.log("error: "+error)
        }
    }


    let logoutUser=()=>{
        settoken(null)
        setUser(null)
        AsyncStorage.removeItem('token')
    }

    let contextData={
        user:user,
        token:token,
        loginuser:loginuser,
        isLoggedin:isLoggedin,
        logoutUser:logoutUser
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}