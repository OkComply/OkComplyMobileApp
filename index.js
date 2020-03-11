/**
 * @format
 */
import * as React from 'react';
import 'react-native-gesture-handler';
import { AppRegistry, StyleSheet } from 'react-native';
import ScreenHome from './src/screens/authentication/ScreenHome';
import { name as appName } from './app.json';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppState from './src/state/AppState';
import ScreenSignUp from './src/screens/authentication/ScreenSignUp';
import Task from './src/screens/task/Tasks';
import Notification from './src/screens/notification/Notification';
import LogoHeader from './src/screens/logos/LogoHeader';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
AppState.load();

const Tab = createMaterialBottomTabNavigator({tabBarOptions={
	activeTintColor: '#e91e63',
  }
});
function MyTabs() {
	
	return (
		<Tab.Navigator 
			initialRouteName="Task"
			activeColor="white"
			labelStyle={{ fontSize: 25 }}
			options= {
		
				
			}
			
		>
			<Tab.Screen
				name="Task"
				component={Task}
				options={{
					tabBarLabel: 'Mijn Taken',
					tabBarIcon: ({ color }) => <AntDesign name="check" size={25} color="#FFFF"  />
				}}
			/>

			<Tab.Screen
				name="Notification"
				component={Notification}
				options={{
					tabBarLabel: 'Mijn Meldingen',
					tabBarIcon: ({ color }) => <MaterialIcon name="notifications" size={25} color="#FFFF" />
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="SignIn" component={ScreenHome} />
				<Stack.Screen
					name="myTab"
					component={MyTabs}
					options={{ headerTitle: (props) => <LogoHeader {...props} /> }}
				/>
				<Stack.Screen name="SignUp" component={ScreenSignUp} />
				<Stack.Screen
					name="Task"
					component={Task}
					options={{ headerTitle: (props) => <LogoHeader {...props} /> }}
				/>
			</Stack.Navigator>
		</NavigationContainer>

		
	);
}


const styles = StyleSheet.create({
	
	
})

AppRegistry.registerComponent(appName, () => App);
