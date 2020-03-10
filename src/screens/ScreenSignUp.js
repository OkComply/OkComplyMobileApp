import React from 'react'
/**
 * @author Raeef Ibrahim
 */
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image
} from 'react-native'

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
        <Button
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
