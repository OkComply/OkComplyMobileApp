
import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import Logo from './logo';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
import AuthService from './AuthService';

/**
 * @author Raeef Ibrahim
 * 
 */
export default class ScreenHome extends React.Component {
  constructor(props) {
    super(props);
    state = {
      loggedIn: null
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
  //perform Action on slide success
  onSlideRight = () => {
    setTimeout(() => {
      this.refs.child.onLogin()
    }, 100);

    this.navigatToTask()

    // this.refs.child.onLogOut()
    // this.onLogOut()
  };


  render() {

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View >
        <AuthService ref="child">
        </AuthService>
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
              bottom: 100
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
