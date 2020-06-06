/**
 * @author Raeef Ibrahim
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';



// create a component
const Logo = () => {

    return (
        <View>
            <Image source={require('./image-asset.png')} style={styles.logoStyle}  />
        </View>
    );
};


//make this component available to the app
export default Logo;

const styles = StyleSheet.create({
	logoStyle: { 
bottom: "150%"
, height:110,
width:330
    }
})