/**
 * @format
 */
import * as React from 'react';
import  { Component, useState } from 'react';

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import MainStackNavigator from './src/navigation/navigator';
import { Provider } from 'react-redux';
import store from './src/redux/store/index';
import { ApolloProvider } from 'react-apollo';
import client from './src/ApolloClient/apolloClient';
import { connect } from 'react-redux';

console.disableYellowBox = true;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn : this.props.isLoggedIn
		};
	}

	render(){
	return (
		<Provider store={store}>
			<ApolloProvider client={client}>
				<MainStackNavigator />
			</ApolloProvider>
		</Provider>
	);
	}
}


function mapStateToProps(state) {
	return {
		isLoggedIn: state.users.isLoggedIn
	
	};
}

export default connect(mapStateToProps)(App)

AppRegistry.registerComponent(appName, () => App);
