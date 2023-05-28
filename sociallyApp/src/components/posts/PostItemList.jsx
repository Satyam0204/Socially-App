import {BASE_URL} from "@env"
import React,{useState,useEffect,useContext} from "react"
import AuthContext from "../../context/AuthContext";
import {View, Text,Image,StyleSheet} from 'react-native';
import Posts from '../../db/db';
import Postitem from './Postitem';
import AsyncStorage from "@react-native-async-storage/async-storage";


const PostItemList = () => {
    let {token}=useContext(AuthContext)

    const [posts, setPosts] = useState([])
    


    
    
    const getPosts = async()=>{
        
        if(token!=null){
        const response=await fetch('https://adbb-2405-201-9002-c914-64ef-b13d-a772-52cc.ngrok-free.app'+'/api/all_users_posts/',{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                "Authorization":'Bearer '+token
            }
        })  
        
        let data = await response.json()
        setPosts(data)
}
    }



    useEffect(() => {
        getPosts()

        
    },[]);
    
  
    return (
        <View>
            {posts.map((post)=>(    
                <Postitem post={post} key={post.id}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({})

export default PostItemList;
