/**
 * @format
 */
import * as React from 'react';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import ScreenHome from './src/screens/ScreenHome';
import { name as appName } from './app.json';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppState from './src/state/AppState';
import ScreenSignUp from './src/screens/ScreenSignUp'
import Notification from './src/screens/Notification'




const Stack = createStackNavigator();
AppState.load();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="SignIn" component={ScreenHome} />
              <Stack.Screen name="SignUp" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  
}

AppRegistry.registerComponent(appName, () => App);
