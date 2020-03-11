
import React from 'react';
import { Alert,TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from './logo';
import { Button, Icon } from 'react-native-elements'
import Auth0 from 'react-native-auth0';


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
  onSignUp = () => {
    this.props.navigation.navigate('SignUp');

  }

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
        <View style={styles.input}>
          <TouchableOpacity>
            <Button icon={
              <Icon
                name="done"
                size={50}
                color="white"
              />
            }
              iconRight
              title="Log In"
              titleStyle='center'
              onPress={this.onLogin}
            />

          </TouchableOpacity>
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

  input: {
    width: 420,
    height: 100,
    margin: 8,
    padding: 1,
    fontSize: 50,
    fontWeight: '500',
    bottom: 120,
     color: '#3a99d8',
     borderColor:'#3a99d8',
     

  },

  signInbtn: {
    bottom: 180,
    height: 45,
    width: 350,
    height: 60,
    color: 'black'
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  red: {
    color: 'red',

  },
  title: {
    bottom: 180,
    fontSize: 20,
    fontWeight: 'bold',
    color:'#006280'
  },

   
  button: {
    backgroundColor: '#3a99d8',
    borderColor: '#3a99d8',
    borderWidth: 1,
    borderRadius: 5,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 8,
    textAlign: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },

});
