import {BASE_URL} from "@env"
import React,{useState,useContext} from 'react';

import {View, StyleSheet,TouchableOpacity,Image} from 'react-native';
import AuthContext from '../../context/AuthContext';
const Like = ({post}) => {
    let {user,token}=useContext(AuthContext)
    const [likes, setLikes] = useState(post.like.includes(!!user?user.username:null)?"liked":"unliked")

    let likePost=async ()=>{
        let response =await fetch(`${BASE_URL}/api/like/${post.id}/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'AUthorization':'Bearer '+token
            }
        })
        let data = await response.json()
        setLikes("liked")

    }
    let unlikePost = async ()=>{
        
        
        let response =await fetch(`${BASE_URL}/api/unlike/${post.id}/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'AUthorization':'Bearer '+token
            }
        })
        let data = await response.json()
        setLikes("unliked")

    }

    
    return (
        <View>
            {likes==="liked"?
            <View>

            <TouchableOpacity
                onPress={()=>[
                    unlikePost()
                ]}
            >
              <Image
                style={styles.postIcons}
                source={require('../../Assets/heart.png')}/>
            </TouchableOpacity>
            </View>:
            <View>
            <TouchableOpacity
            onPress={()=>[
                likePost()
            ]}
            >
              <Image
                style={styles.postIcons}
                source={require('../../Assets/like.png')}/>
            </TouchableOpacity>
                </View>
                
              }
        </View>
    );
}

const styles = StyleSheet.create({
    postIcons: {
        height: 20,
        width: 20,
      },
})

export default Like;
