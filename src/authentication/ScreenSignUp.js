import React from 'react'
import Auth0 from 'react-native-auth0';
/**
 * @author Raeef Ibrahim
 */
import {  Image, StyleSheet, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class SignUp extends React.Component {
  
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    if(this.state.email == "" || this.state.password == "" || this.state.phone_number == "" || this.state.username == "") {
      alert("You have empty fields")
  

    } else {
      alert("You are signed up ")
      this.props.navigation.navigate('SignIn');
    }
  }
//   createUser(username, password) {
//     const auth0 = new Auth0({ domain: 'okapi-prod.eu.auth0.com', clientId: 'Z977z6OWUxi58x41rndANbZIy49o3iKR' });
//     auth0.auth
//         .createUser({
//             email: username,
//             password: password,
//             connection: 'Username-Password-Authentication',
//         })
//         .then(success => {
//             console.log(success)
//             this.alert('Success', 'New user created')
//         })
//         .catch(error => { 
//             this.alert('Error', error.json.description) 
//         });
// }
 
// webAuth(connection) {
//   const auth0 = new Auth0({ domain: 'okapi-prod.eu.auth0.com', clientId: 'Z977z6OWUxi58x41rndANbZIy49o3iKR' });
//   auth0.webAuth
//       .authorize({
//           scope: 'openid profile email',
//           connection: connection,
//           audience: 'https://' + auth0.credentials + '/userinfo'
//       })
//       .then(credentials => {
//           this.onSuccess(credentials);
//       })
//       .catch(error => this.alert('Error', error.error_description));
// };
  render() {
    let pic = {
        uri: 'https://www.nlvi.nl/nlvi-new-images-okcomply.png'
      };
    return (
        
      <View style={styles.container}>
          <Image source={pic} style={{width: 400, height: 100, bottom:75}}/>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
        
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
         
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
         
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
         
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button style= {styles.input}
        large
          title='Sign Up'
          onPress={this.signUp}
          
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'white',
    color: 'gray',
    margin: 10,
    padding: 8,
    borderRadius: 14,
    borderColor : "gray",
    borderStyle: "solid",
    borderWidth: 2,
    
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})
