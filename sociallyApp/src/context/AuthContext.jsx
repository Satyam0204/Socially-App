import { View, Text } from 'react-native'
import React,{useState,useEffect, createContext} from 'react'
import jwtDecode from "jwt-decode";
import {BASE_URL} from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext=createContext()


export default AuthContext;

export const AuthProvider=({children})=>{
    // const [token, settoken] = useState(null);
    // const [user, setUser] = useState(null);
    let [token,settoken]=useState(async ()=> await AsyncStorage.getItem('token')?await JSON.stringify(AsyncStorage.getItem('token')):null)
    let [user,setUser]=useState(async ()=>await AsyncStorage.getItem('token')?await jwtDecode(AsyncStorage.getItem('token')):null)


    let loginuser=async (username,password)=>{
        

        // console.log(BASE_URL)
        try {
            AsyncStorage.clear()
            // console.log("username: "+username+" password: "+password)
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
    let contextData={
        user:user,
        loginuser:loginuser
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}