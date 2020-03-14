
import React from 'react';
import { Alert, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from './logo';
import Auth0 from 'react-native-auth0';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
// Auth() domain and clientId info
const auth0 = new Auth0({ domain: 'okapi-prod.eu.auth0.com', clientId: 'Z977z6OWUxi58x41rndANbZIy49o3iKR' });

/**
 * @author Raeef Ibrahim
 * 
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    state = {
      loggedIn: null
    }
  }
  // Navigate to the Task page 
  navigatToTask = () => {
    this.props.navigation.navigate('myTab');

  }
  //perform Action on slide success
  onSlideRight = () => {
    this.onLogin()
    // this.onLogOut()
  };

  // Log out from Auth()
  onLogOut = () => {
    auth0.webAuth
      .clearSession({})
      .then(success => {

        Alert.alert(
          'Logged out!'
        );
        this.setState({ accessToken: null });
      })
      .catch(error => {
        console.log('Log out cancelled');
      });
  }
  // Log In function with WebAuth
  onLogin = () => {
    auth0
      .webAuth
      .authorize({ scope: 'openid profile email' })
      .then(credentials =>

        // Successfully authenticated
        // Store the accessToken
        this.setState({ accessToken: credentials.accessToken })

      )
      .catch(error => console.log(error));

    // Navigate to to task page after user is logged in 
    this.navigatToTask()
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View >

        <View>
          <Text style={styles.title}>
            Welkom in OkComply Mobile App</Text>
        </View>
        <View>
          <RNSlidingButton
            style={{
              width: 700,
              height: 500,
              justifyContent: 'center',
              backgroundColor: '#3A99D8',
              bottom: 200
            }}

            height={100}

            onSlidingSuccess={this.onSlideRight}
            slideDirection={SlideDirection.RIGHT}>
            <View>
              <Text numberOfLines={1} style={styles.titleText}>
                Swipe rechts om in te loggen >>>
    </Text>

            </View>
          </RNSlidingButton>
        </View>

      </View>

    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  slideButton: {
    width: 400,
    height: 35,
    bottom: 1000
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    bottom: 180,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006280'
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#ffffff'
  }
});
