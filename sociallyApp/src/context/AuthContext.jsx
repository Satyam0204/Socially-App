import { View, Text } from 'react-native'
import React,{useState,useEffect, createContext} from 'react'
import jwtDecode from "jwt-decode";


const AuthContext=createContext()


export default AuthContext;

export const AuthProvider=({children})=>{
    let [user,setUser]=useState(null)
    let [token,settoken]=useState(null)

    let loginuser=async (username,password)=>{
        

        try {
            // console.log("username: "+username+" password: "+password)
            
            let response=await fetch("https://9fed-2405-201-9002-c914-6bbb-5228-2ffe-ac60.ngrok-free.app/api/login",{
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'username':username,'password':password})
            })
            let data = await response.json()
            if(response.status===200){

                settoken(data)
                setUser(jwtDecode(data.access))

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