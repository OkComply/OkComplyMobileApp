import React, { Component } from 'react';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
import { Image, Text, View, StyleSheet } from 'react-native';
import AuthService from '../authentication/AuthService';
import { Card } from 'react-native-elements'
export default class Notification extends Component {


    // Navigate to the Home page 
    navigatToHome = () => {
        this.props.navigation.navigate('SignIn');

    }

    //perform Action on slide success
    onSlideRight = () => {

        this.refs.child.onLogOut()
        this.navigatToHome()
    };
    render() {
        let pic = {
            uri: 'https://cdn.onlinewebfonts.com/svg/img_364496.png'
        };
        return (
            <View style={styles.container}>
                <View style={styles.title}>

                    <Card 

                        title='Mijn Profile'
                    >

                        <Image source={pic} style={{ width: 127, height: 130, left: 135, right: 1, bottom: 10 }} />
                        <Text style={{ marginBottom: 10, fontSize: 20, fontStyle: 'italic' }}>
                            Voornaam: Raeef
  </Text>

                        <Text style={{ marginBottom: 10, fontSize: 20, fontStyle: 'italic' }}>
                            Achternaam: Ibrahim
  </Text>
                        <Text style={{ marginBottom: 10, fontSize: 20, fontStyle: 'italic' }}>
                            Email: Raeef.ibrahim@hva.nl

  </Text>
                    </Card>
                </View>
                <AuthService ref="child">
        </AuthService>
                <RNSlidingButton
                    style={{
                        width: 700,
                        height: 500,
                        justifyContent: 'flex-end',
                        backgroundColor: 'red',
                        bottom: 25
                    }}

                    height={70}

                    onSlidingSuccess={this.onSlideRight}
                    slideDirection={SlideDirection.RIGHT}>
                    <View>
                        <Text numberOfLines={1} style={styles.titleText}>
                            Swipe rechts om uit te loggen  >>>
    </Text>

                    </View>
                </RNSlidingButton>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    },
    slideButton: {
        width: 100,
        height: 10,
        bottom: 1000
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        bottom: 200,
        width: 450
   

    },
    titleText: {
        fontSize: 17,
        fontWeight: 'normal',
        textAlign: 'center',
        color: 'white',

    },
    red: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
        flexDirection: 'row'
    },
});