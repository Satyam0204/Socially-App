import { View, Text } from 'react-native'
import React,{useState,useEffect, createContext} from 'react'


const AuthContext=createContext()


export default AuthContext;

export const AuthProvider=({children})=>{

    let contextData={
        user:'Satyam'
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}