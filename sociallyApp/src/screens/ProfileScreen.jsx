import React,{useState,useContext,useEffect} from 'react';
import {BASE_URL} from '@env'
import {View,Text, StyleSheet,ImageBackground, Dimensions,TouchableOpacity} from 'react-native';
import AuthContext from '../context/AuthContext';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const ProfileScreen = ({navigation}) => {
    let {user,token}=useContext(AuthContext)
    let{logoutUser}=useContext(AuthContext)

    const [followers, setfollowers] = useState();
    const [following, setfollowing] = useState();

    let getProfile=async ()=>{
        let response= await fetch(`${BASE_URL}/api/user`,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                "Authorization":'Bearer '+token
            }
        })  
        
        let data = await response.json()
        setfollowers(data.followers)
        setfollowing(data.following)
    }


    useEffect(() => {
        if(user==null){
            navigation.navigate('login')
        }
        getProfile()
        
    },);
    return (
        <View>
            <ImageBackground  resizeMode="cover" style={styles.cover} source={{uri:"https://img.freepik.com/free-photo/shallow-focus-shot-young-attractive-male-posing-camera_181624-42193.jpg?w=740&t=st=1685709507~exp=1685710107~hmac=12453ec329112d6e965c48dc84c402314685858578331997a42484c51809900d"}}>
          
        <View style={styles.stats}>
            <Text style={styles.statsText}>{user?user.username:""}</Text>
            <Text style={styles.statsText}>Followers: {followers}</Text>
            <Text style={styles.statsText}>Following: {following}</Text>
        </View>

            <TouchableOpacity
            onPress={()=>{
                logoutUser()

            }}
            >
                <Text
                style={{
                    backgroundColor:"blue",
                    color:"white",
                    width:50,
                    margin:10,
                    padding:5

                    }}>Logout</Text>
                
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}


const styles= StyleSheet.create({
    statsText:{
        color:"white"
    },
    cover:{
        height:screenHeight
        
    },
    stats:{
        position:"absolute",
        bottom:50,
        width:327,
        margin:20,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        height:300,


    }
})

export default ProfileScreen;
