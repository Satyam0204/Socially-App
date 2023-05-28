import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Postitem = ({post}) => {
  return (
    <View>
      <View style={styles.postContainer} key={post.id}>
        <LinearGradient
          style={{borderRadius: 15}}
          colors={['#26253a', '#34283a']}
          start={{x: 0.3, y: 0.1}}
          end={{x: 1, y: 1}}>
          <View>
            <View style={styles.postHeader}>
              <Image
                style={styles.profileImage}
                source={require('../../Assets/profile.png')}
              />
              <Text style={styles.postHeaderText}>{post.user}</Text>
            </View>
            <View style={styles.postBody}>
              <Text style={{color: '#d0c1f7'}}>{post.desc}</Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.image} source={{uri: "https://cdn.pixabay.com/photo/2023/05/14/19/42/sky-7993656_1280.jpg"}} />
          </View>
          <View style={styles.postFooter}>
            <TouchableOpacity>
              <Image
                style={styles.postIcons}
                source={require('../../Assets/like.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.postIcons}
                source={require('../../Assets/comment.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.postIcons}
                source={require('../../Assets/share.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.postIcons}
                source={require('../../Assets/ribbon.png')}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    elevation: 1,

    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  postHeader: {
    flexDirection: 'row',
    left:15,
    top:8,
    alignItems: 'center',
    
  },

  postHeaderText: {
    color: '#f97b7b',
    margin: 10,

    fontSize: 20,
  },

  image: {
    height: 190,
    width: 250,
    borderRadius: 15,
    margin: 20,
  },
  postBody: {
    padding: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  postIcons: {
    height: 20,
    width: 20,
  },
  profileImage: {
    height: 1,
    width: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding:11,
    justifyContent:"center",
    alignItems:"center"

  },
});

export default Postitem;
