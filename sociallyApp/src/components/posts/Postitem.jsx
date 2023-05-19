import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Postitem = ({post}) => {
  return (
    <View>
      <View style={styles.postContainer} key={post.id}>
        <LinearGradient
          style={{borderRadius: 15}}
          colors={['#2d0885', '#1f1c26']}
          start={{x: 0.2, y: 0.4}}
          end={{x: 1, y: 1}}>
          <View>
            <Text style={styles.postHeader}>{post.user}</Text>
            <View style={styles.postBody}>
              <Text style={{color: '#d0c1f7'}}>{post.body}</Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.image} source={{uri: post.image}} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    borderRadius: 15,

    margin: 15,
  },

  postHeader: {
    color: '#d0c1f7',
    margin: 10,
  },

  image: {
    height: 190,
    width: 250,
    borderRadius: 15,
    margin:20,
  },
  postBody: {
    
    padding: 10,
  },
});

export default Postitem;
