/**
 * @format
 */
import * as React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainStackNavigator from "./src/navigation/navigator"
import { Provider } from 'react-redux'
import store from "./src/redux/store/index"
import { ApolloProvider } from 'react-apollo';
import client  from './src/ApolloClient/apolloClient'



console.disableYellowBox = true;




export default function App({}) {

	return (

		<ApolloProvider client={client}>
		<Provider store={store}>
		<MainStackNavigator/>
		</Provider>
		</ApolloProvider>
	); 
	
}


AppRegistry.registerComponent(appName, () => App);
