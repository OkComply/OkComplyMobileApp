
import React from 'react';
import { Alert,Image, Button, ImageBackground,TextInput, Text,View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    alert("test");
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
  }

  render() {
    let pic = {
      uri: 'https://www.allfluidsystems.eu/wp-content/uploads/2019/04/logo-okcomply.png'
    };
    let title = 'OkComply'
    return (
     
      
      <View style={styles.container}>
    
    <Image source={pic} style={{width: 400, height: 100, bottom:120}}/>

        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
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
    <View></View>
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
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500'
   
  },
  fixToText: {
    flexDirection: 'row',

    margin: 5

  },
  red: {
    color: 'red',
  }
});
