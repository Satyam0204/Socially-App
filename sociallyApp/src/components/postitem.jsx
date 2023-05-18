import React from 'react';
import {View, Text,Image,StyleSheet} from 'react-native';
import Posts from '../db/db';
const Postitem = () => {
    return (
        <View>
            {Posts.map((post)=>(
                <View key={post.id}>
                    <Image style={styles.image} source={{uri: post.image}}/>
                    <Text style={{color:"black"}}>{post.body}</Text>
                </View>
    ))}
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        height:350,
        width:300
    }

})

export default Postitem;
