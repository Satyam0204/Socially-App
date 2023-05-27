import {BASE_URL} from "@env"
import React,{useState,useEffect,useContext} from "react"
import AuthContext from "../../context/AuthContext";
import {View, Text,Image,StyleSheet} from 'react-native';
import Posts from '../../db/db';
import Postitem from './Postitem';


const PostItemList = () => {
    let {token}=useContext(AuthContext)

    const [posts, setPosts] = useState([])
    let apiheaders={
        'Content-type':"application/json",
        'Authorization':'Bearer '+token
    }
    const getPosts = async()=>{
        console.log(token)
        console.log("hello")
        let response=await fetch(BASE_URL+'/api/all_users_posts/',{
            method:'GET',
            headers:apiheaders
    })
        let data = await response.json()
        console.log(data)
        setPosts(data)

    }
    useEffect(() => {
        getPosts()
        
    }, []);
    
  
    return (
        <View>
            {Posts.map((post)=>(    
                <Postitem post={post} key={post.id}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({})

export default PostItemList;
