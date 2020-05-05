import * as React from 'react';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import ScreenHome from '../../src/authentication/ScreenHome';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppState from '../../src/state/AppState';
import Task from '../../src/components/task/Tasks';
import Notification from '../../src/components/Notification/Notification';
import LogoHeader from '../../src/logos/LogoHeader';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Profile from '../../src/components/Profile';
import SplashScreen from '../../src/components/SplashScreen';
import TaskDetail from '../../src/components/task/taskDetail';
import TaskFilter from '../../src/components/task/taskFilter';
import NotificationDetail from '../../src/components/Notification/NotificationDetail';
import AddNotification from '../../src/components/Notification/AddNotification';
import NotificationFilter from '../../src/components/Notification/NotificationFilter';
import InstructionManual from '../../src/components/InstructionManual/InstructionManual';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import TaskItemModal from '../../src/components/task/taskItemModal';
import FirstPage from '../components/Notification/AddNotificationFlows/FirstPage';

/**
 * @author Ilias Delawar
 *
 * @author Raeef Ibrahim
 *
 */
const Stack = createStackNavigator();
AppState.load();

const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName="Task"
			activeColor="white"
			labelStyle={{ fontSize: 25 }}
			tabBarOptions={{}}
			barStyle={{ backgroundColor: '#3BB9FF', height: 70 }}
		>
			<Tab.Screen
				name="Task"
				component={Task}
				options={{
					tabBarLabel: 'Mijn Taken',
					tabBarIcon: ({ color }) => <AntDesign name="check" size={25} color="#FFFF" />
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
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: 'Mijn Profile',
					tabBarIcon: ({ color }) => <MaterialIcon name="person" size={25} color="#FFFF" />
				}}
			/>
		</Tab.Navigator>
	);
}

function MainStackNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Sign In" options={{ headerShown: false }} component={SplashScreen} />
				<Stack.Screen
					name="myTab"
					component={MyTabs}
					options={({ navigation }) => ({
						headerTitle: (props) => <LogoHeader {...props} />,
						headerRight: () => (
							<TouchableOpacity
								style={{ marginRight: 20, marginBottom: 10 }}
								onPress={() => {
									navigation.navigate('InstructionManual');
								}}
							>
								<FontAwesome5Icon name="info" size={30} style={{ color: '#3BB9FF' }} />
							</TouchableOpacity>
						),
						headerBackTitleVisible: false
					})}
				/>
				<Stack.Screen name="SignIn" options={{ headerShown: false }} component={ScreenHome} />
				<Stack.Screen
					name="Task"
					component={Task}
					options={{ headerTitle: (props) => <LogoHeader {...props} /> }}
				/>
				<Stack.Screen
					name="TaskDetail"
					component={TaskDetail}
					options={{ headerTitle: (props) => <LogoHeader {...props} /> }}
				/>
				<Stack.Screen
					name="TaskFilter"
					component={TaskFilter}
					options={{
						...TransitionPresets.ModalSlideFromBottomIOS
					}}
				/>
				<Stack.Screen
					name="notifactionDetail"
					component={NotificationDetail}
					options={{ headerTitle: (props) => <LogoHeader {...props} /> }}
				/>
				<Stack.Screen
					name="AddNotification"
					component={AddNotification}
					options={{ headerTitle: (props) => <LogoHeader {...props} /> }}
				/>
				<Stack.Screen name="SplashScreen" component={SplashScreen} />
				<Stack.Screen name="NotificationFilter" component={NotificationFilter} />
				<Stack.Screen
					name="InstructionManual"
					component={InstructionManual}
					options={{
						headerTitle: (props) => <LogoHeader {...props} />
					}}
				/>
				<Stack.Screen
					name="FirstPage"
					component={FirstPage}
					options={{
						headerTitle: (props) => <LogoHeader {...props} />
					}}
				/>

				<Stack.Screen name="TaskItemModal" component={TaskItemModal} />

			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainStackNavigator;
