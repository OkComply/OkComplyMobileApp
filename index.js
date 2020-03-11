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


const Stack = createStackNavigator();
AppState.load();

export default function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SignIn" options={{
          title: 'OkComplyApp ',
          headerTitleStyle: {
            alignContent:'center'
          , color: '#006280'
          ,
          },
        }} component={ScreenHome} />
        <Stack.Screen name="SignUp" component={ScreenSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  
}

AppRegistry.registerComponent(appName, () => App);
