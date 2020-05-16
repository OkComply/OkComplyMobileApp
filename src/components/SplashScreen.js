import React, { useRef, useEffect } from 'react';
import { View, Text,Animated } from 'react-native';
import Logo from '../authentication/logo'
/**
 * @author Raeef Ibrahim
 */

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
           <View >
      <FadeInView >
        <Logo></Logo>
      </FadeInView>
    </View>
         
        </View>
      
    );
  }
}
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        
      }
      
    ).start();
    
  }, 
  
   [])

  return (
    
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
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