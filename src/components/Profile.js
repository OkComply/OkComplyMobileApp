import React, {Component} from 'react';
import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';
import {Image, Text, View, StyleSheet} from 'react-native';
// import AuthService from '../authentication/AuthService';
import {Card} from 'react-native-elements'
import auth0 from '../authentication/auth0';
import { Alert } from 'react-native';
import { connect } from 'react-redux'


class Profile extends Component {

    /**
     * @author Raeef Ibrahim
     *
     * @author Ilias Delawar
     */
        // Navigate to the Home page
        
    navigatToHome = () => {
        this.props.navigation.navigate('SplashScreen');

    }

    //perform Action on slide success
    onSlideRight = () => {
        auth0.webAuth
        .clearSession({})
        .then(success => {
            Alert.alert(
                'Logged out!'
            );
            this.setState({ accessToken: null });
            this.navigatToHome()
        })
        .catch(error => {
            console.log(error);
        });
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
                        <Image source={pic} style={{width: '40%', height: '50%', bottom: '3%', left: '30%'}}/>
                        <Text style={{marginBottom: 10, fontSize: 20, fontStyle: 'italic'}}>
                            Account: {this.props.userEmail}

                        </Text>
                    </Card>
                </View>
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
                            Swipe rechts om uit te loggen >>>
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
        bottom: '5%',
        width: '100%'


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

function mapStateToProps(state)  {
    console.log(state.users)
    return {
        userEmail: state.users.user
    }
}

export default connect(mapStateToProps)(Profile)
