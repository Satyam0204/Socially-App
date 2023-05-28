import {BASE_URL} from "@env"
import React,{useState,useEffect,useContext} from "react"
import AuthContext from "../../context/AuthContext";
import {View} from 'react-native';
import Postitem from './Postitem';



const PostItemList = () => {
    let {token}=useContext(AuthContext)

    const [posts, setPosts] = useState([])
    


    
    
    const getPosts = async()=>{
        
        if(token!=null){
        const response=await fetch(BASE_URL+'/api/all_users_posts/',{
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


export default PostItemList;
