import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.container}>
            <Text>navbar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        backgroundColor:'#815cf3',

    }
})

export default Navbar;
