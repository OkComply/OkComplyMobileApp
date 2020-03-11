/**
 * @author Raeef Ibrahim
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


// create a component
const Logo = () => {
    let pic = {
        uri: 'https://images.squarespace-cdn.com/content/551a7be4e4b029666d87e6b0/1472127673111-RVUF6OHKC15Y92FS08ST/?format=500w&content-type=image%2Fpng'
      };
    return (
        <View>
            <Image source={pic} style={{width: 410, height: 120, bottom:125}} />
        </View>
    );
};


//make this component available to the app
export default Logo;