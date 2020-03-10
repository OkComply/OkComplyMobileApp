/**
 * @author Raeef Ibrahim
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


// create a component
const Logo = () => {
    let pic = {
        uri: 'https://www.nlvi.nl/nlvi-new-images-okcomply.png'
      };
    return (
        <View>
            <Image source={pic} style={{width: 400, height: 100, bottom:120}} />
        </View>
    );
};


//make this component available to the app
export default Logo;