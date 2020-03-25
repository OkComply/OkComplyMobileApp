import { Alert, View } from 'react-native';
import Auth0 from 'react-native-auth0';
import React from 'react';
// Auth0 concection info
const auth0 = new Auth0({ domain: 'okapi-prod.eu.auth0.com', clientId: 'Z977z6OWUxi58x41rndANbZIy49o3iKR' });
//const auth0 = new Auth0({ domain: 'dev-n2a87se5.auth0.com', clientId: 'Zp0MW76DZXSRMF1bwtq83HiLjA2bnsqQ' });

/**
 * @author Raeef Ibrahim
 */
export default class AuthService extends React.Component {
  constructor(props) {
    super(props);
    state = {
      loggedIn: false,
      token: null
    }
  } 
  // Navigate to the Task page 
  navigatToTask = () => {
    try {
      if (this.state.accessToken = "") {

        this.props.navigation.navigate('Sign In');
      }
    } catch {
      this.props.navigation.navigate('myTab');
    }
  }
  // Log out from AuthO
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
        console.log('Log out c ancelled');

      });
  }
  // Log in AuthO
  onLogin = () => {
    auth0
      .webAuth
      .authorize({ scope: 'openid profile email' })
      .then(credentials =>
        // Successfully authenticated
        // Store the accessToken
        this.setState({ accessToken: credentials.accessToken }),
        console.log(this.state.accessToken)
      )
      .catch(error => console.log(error));
  }

  render() {

    return (
      <View></View>

    );
  }

}
