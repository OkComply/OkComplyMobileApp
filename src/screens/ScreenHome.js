
import React from 'react';
import { Alert, Image,  ImageBackground, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from './logo';
import { Button } from 'react-native-elements'
import Auth0 from 'react-native-auth0';
import {WebView} from 'react-native-webview';
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

    this.state = {
      username: '',
      password: '',
    };
  }
  onSignUp = () => {
    this.props.navigation.navigate('SignUp');

  }

  onLogOut =() => {
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
    .authorize({scope: 'openid profile email'})
    .then(credentials =>
      // Successfully authenticated
      // Store the accessToken
      this.setState({ accessToken: credentials.accessToken })
    )
    .catch(error => console.log(error));

    // if (this.state.username == "okComply.com" && this.state.password == "123456") {
    //   alert("You are logged in")
    // } else {
    //   alert("Email or password is invaild, try again")
    // }
  }

  render() {

    return (
      <View style={styles.container}>
        {/* <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      /> */}

        <View style={styles.logoContainer}>
          <Logo />
        </View>

        {/* <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Email'}
          style={styles.input}
        />

        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        /> */}

        <View style={styles.input}>
          <TouchableOpacity>
 
          <Button
                    large
                   icon={{name: 'refresh'}}
                   onPress= {this.onLogin}
                   title='Log In ' 
                  />
                  
          </TouchableOpacity>

        
          
        </View>

<View style={styles.input} >
<TouchableOpacity> 
            <Button
                    large
                   icon={{name: 'person'}}
                   onPress= {this.onSignUp}
                   title='Sign Up ' 
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
    width: 350,
    height: 60,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    bottom: 180,
    borderColor: "gray",
    borderStyle: "solid",
    //borderWidth: 2

  },
  fixToText: {
    flexDirection: 'row',
    margin: 2,
    bottom: 150,
    height: 45,


  },
  signUpbtn: {
    margin: 10,
    bottom: 150,
    height: 45,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  red: {
    color: 'red',

  },
  button: {
    backgroundColor: '#f8f8f8',
    borderColor: 'white',
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
