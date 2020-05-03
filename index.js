/**
 * @format
 */
import * as React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainStackNavigator from "./src/navigation/navigator"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from "./src/redux/store/index"

console.disableYellowBox = true;

const store = createStore(rootReducer)


export default function App({}) {

	return (
		<Provider store={store}>
		<MainStackNavigator/>
		</Provider>
	);
}


AppRegistry.registerComponent(appName, () => App);
