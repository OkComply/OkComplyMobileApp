import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, AppState, Animated } from 'react-native';
import Logo from './logo';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
import auth0 from '../authentication/auth0';
import { useSelector, useDispatch } from "react-redux";
import {
	setUser
  } from "../redux/actions/actions";
// import AuthService from './AuthService';
/**
 * @author Raeef Ibrahim
 * 
 * @author Ilias Delawar
 * 
 */
function ScreenHome ( props){

	const { navigation } = props;
	const dispatch = useDispatch();

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		loggedIn: null,
	// 		accessToken: null,
	// 		user: null
	// 	};
	// 	appState = AppState.currentState;
	// 	// AppState.addEventListener('change', this.handleAppState);
	// }
	// handleAppState = (nextAppState) => {
	// 	if (appState.match(/inactive|background/) && nextAppState === 'active') {
	// 		if ((this.props.loggedIn = true)) {
	// 			this.props.navigation.navigate('myTab');
	// 		} else {
	// 			this.props.navigation.navigate('SignIn');
	// 		}
	// 	}
	// 	appState = nextAppState;
	// };

	// Navigate to the Task page
	navigatToTask = () => {
		if ((this.refs.child.loggedIn = true)) {
			this.props.navigation.navigate('myTab');
		} else {
			this.props.navigation.navigate('SignIn');
		}
	};
	//perform Action on slide success
	onSlideRight = () => {
		auth0.webAuth
			.authorize({
				scope: 'openid email'
			})
			.then((res) => {
				console.log(res);
				// this.setState({ accessToken: res.accessToken });

				auth0.auth
					.userInfo({ token: res.accessToken })
					.then((user) => {
						navigation.navigate('myTab');
						navigation.reset({
							index: 0,
							routes: [
								{
									name: 'myTab'
								}
							]
						});
						console.log(user)
						dispatch(setUser(user.email))


					})

					.catch(console.error);
			})
			.catch((error) => console.log(error));
	};

		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Logo />
				</View>

				<View>
					<View>
						<FadeInView>
							<Text style={styles.title}>Welkom in OkComply Mobile App</Text>
						</FadeInView>
					</View>
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
						onSlidingSuccess={() => this.onSlideRight()}
						slideDirection={SlideDirection.RIGHT}
					>
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

const FadeInView = (props) => {
	const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

	React.useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000
		}).start();
	}, []);

	return (
		<Animated.View // Special animatable View
			style={{
				...props.style,
				opacity: fadeAnim // Bind opacity to animated value
			}}
		>
			{props.children}
		</Animated.View>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'
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

export default (ScreenHome);
