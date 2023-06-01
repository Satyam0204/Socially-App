import {BASE_URL} from '@env';
import React, {useState, useEffect, useContext,} from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';

import AuthContext from '../context/AuthContext';

const UserProfileScreen = ({route, navigation}) => {
  let {user, token} = useContext(AuthContext);

  const[user_id,setUser_id]=useState()
  const [followers, setfollowers] = useState();
  const [following, setfollowing] = useState();
  const [username, setusername] = useState();
  const [follows, setfollows] = useState();

  let userProfile = async () => {
    let response = await fetch(`${BASE_URL}/api/profile/${route.params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await response.json();
    setUser_id(data.user_id)
    setusername(data.username);
    setfollowers(data.followers);
    setfollowing(data.following);
    
    if(data.followers_arr.includes(user.user_id)){
        setfollows("followed")
    }else{
        setfollows("unfollowed")
    }
  };
  
  let followprofile = async()=>{
    let response = await fetch(`${BASE_URL}/api/follow/${user_id}/`,{
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
    let response = await fetch(`${BASE_URL}/api/unfollow/${user_id}/`,{
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
  

  useEffect(() => {
    userProfile();
    console.log('rendering profile screen');
  },);



  return (
    <View>
      <Text style={{color: 'black'}}>{username}</Text>
      <View>

        <View>
          {follows === 'followed' ? (
            <TouchableOpacity
              onPress={() => {
                unfollowprofile();
              }}
              >
              <Text style={styles.Follow}>Unfollow</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                followprofile();
              }}
              >
              <Text style={styles.Follow}>Follow</Text>
            </TouchableOpacity>
          )}

        </View>
      </View>

      <View style={styles.stats}>
        <Text style={styles.statsText}>Followers: {followers}</Text>
        <Text style={styles.statsText}>Following: {following}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsText: {
    color: 'black',
  },

  Follow:{
    backgroundColor:"blue",
    color:"white",
    width:80,
    margin:10,
    padding:5

    }
});

export default UserProfileScreen;
