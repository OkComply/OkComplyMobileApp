import React from 'react';
import { View, Text,Animated } from 'react-native';
import Logo from '../authentication/logo'

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('SignIn');
    }
  }
  render() {
    return (
      <View style={styles.viewStyles}>
        
         <Logo></Logo>
        </View>
      
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

}

export default SplashScreen;