
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


// create a component
const LogoHeader = () => {
    let pic = {
        uri: 'https://www.allfluidsystems.eu/wp-content/uploads/2019/04/logo-okcomply.png'
      };
    return (
        <View >
            <Image source={pic} style={{width: 170, height: 50, left:(Platform.OS === 'ios') ? 12 : '55%',bottom:5}} />
        </View>
    );
};


//make this component available to the app
export default LogoHeader;