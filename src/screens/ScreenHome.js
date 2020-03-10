
import React from 'react';
import { Alert,Image, Button, ImageBackground,TextInput, Text,View, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from './logo';
import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'okapi-prod.eu.auth0.com', clientId: 'Z977z6OWUxi58x41rndANbZIy49o3iKR' });

import firebase from 'firebase'
export default class App extends React.Component {
  

  constructor(props) {
    super(props);
    state={
      loggedIn:null
    }
  
    this.state = {
      username: '',
      password: '',
    };
  }
  onSignUp =() => {
    this.props.navigation.navigate('SignUp');

  }
  onLogin =()=> {
if (this.state.username == "okComply.com" && this.state.password =="123456") {
  alert("You are logged in")
} else {
alert("Email or password is invaild, try again")  }
  }

  render() {
    
    return ( 
      <View style={styles.container}>
    
    <View style={styles.logoContainer}>
                <Logo/>
            </View>

        <TextInput
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
        />
      
        <View style={styles.fixToText}>
          <Button style={{marginRight:25}}
            title="Login"
            onPress={ this.onLogin}
          />
    
    
    <Button
            title="SignUp"
            onPress={this.onSignUp}
          />
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
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    bottom: 180,
   
  },
  fixToText: {
    flexDirection: 'row',
    margin: 10,
    bottom: 150  ,
    height: 45,
  

  },    
  signUpbtn: {
    margin: 10,
    bottom: 150  ,
    height: 45,
  },
  logoContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
},
  red: {
    color: 'red',

},
buttonText:{
  textAlign:'center',
  color:'#fff',
  fontWeight:'bold',
  fontSize:20
},

});
