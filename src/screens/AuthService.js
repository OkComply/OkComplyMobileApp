
import { Alert, Image,  ImageBackground, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
 import Auth0 from 'react-native-auth0';


const auth0 = new Auth0({ domain: 'okapi-prod.eu.auth0.com', clientId: 'Z977z6OWUxi58x41rndANbZIy49o3iKR' });
export default class AuthService extends React.Component {

  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this)
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
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }}
  render() {

    return (
     <View></View>

    );
  }

}


//make this component available to the app
export default authService;