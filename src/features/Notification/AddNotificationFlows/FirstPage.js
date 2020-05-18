import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Text, View, StyleSheet, Alert, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Notification from '../Notification';

/**
 * @author Raeef Ibrahim
 *
 */
export default class AddNotification extends Component {
	constructor(props) {
		super(props)
		this.state = {
			label: ''

		}
	}
	
	onBack =() => {
		this.props.navigation.navigate('myTab')
	}
	render() {
		return (

			<View style={styles.addNotifiaction}>


					<View>
						
						<Text style={styles.textStyle} >    Selecteer item binnen organisatie</Text>
						<Card>
							<RNPickerSelect style={styles.selecterStyle}
								onValueChange={(value) => console.log(value)}

								placeholder={{
									label: 'Selecteer item',

								}}
								items={[
									{ label: 'HvA', value: 'football' },
									{ label: 'Test', value: 'baseball' },
									{ label: 'HvAOkComply', value: 'hockey' }
								]}

							/>
						</Card>
					</View>
					<View>
							<Button style={styles.next}
								>
								<Text style={{ color: '#fff' }}>Volgende stap</Text>
							</Button>
						</View>

						<View>
							<Button style={styles.back} onPress = {this.onBack}
								>
								<Text style={{ color: '#fff' }}>Terug</Text>
							</Button>
					
					</View>
					</View>
					
	
					
				
					

		


		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 25,
		...Platform.select({
			android: {
				fontFamily: 'bold'
			}
		}),
		height: 50,
		bottom: '50%',
		color:'#006280'
		
	
	},
	selecterStyle: {
		width: 200,
		height: 20
	},
	btn: {
		backgroundColor: '#33de8e'
	},
	next:{
		backgroundColor:'#33de8e',
		width: '40%',
		left:'55%',
		top:'700%'
	},
	back:{
		backgroundColor:'#33de8e',
		width: '40%',
		left:'5%',
		top:'600%'	
	},
	addNotifiaction:{
		top:'20%'
	}
});
