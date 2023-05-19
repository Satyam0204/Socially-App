import React from 'react';
import {View, Text,Image,StyleSheet} from 'react-native';
import Posts from '../../db/db';
import Postitem from './Postitem';

const PostItemList = () => {
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
