
import React from 'react';
import { Alert,Image, Button, ImageBackground,TextInput, Text,View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Logo from '../logos/logo';


export default class App extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      username: '',
      password: '',
    };
  }
  onSignUp =() => {
    this.props.navigation.navigate('SignUp');

  }
  onLogin =()=> {
    const { username, password } = this.state;
    Alert.alert('Credentials', `${username} + ${password}`);
    this.props.navigation.navigate('myTab');

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
