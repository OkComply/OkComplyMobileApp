import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { ListItem, Card } from 'react-native-elements';

/**
 * @author Raeef Ibrahim
 */

export default class NotificationFilter extends Component {

	onClick = () => {
		this.props.navigation.navigate('myTab')
	}
	render() {
		return (
			<View style={styles.NotificationFilter}>

				<RNPickerSelect style={styles.filterUitvoerders}
					onValueChange={(value) => console.log(value)}

					placeholder={{
						label: 'Filter op status',
					}}
					items={[
						{ label: 'Te laat', value: 'football' },
						{ label: 'Gepland', value: 'baseball' },
						{ label: 'Nieuw', value: 'hockey' }
					]}

				/>
				<View style={styles.filterUitvoerders}>
					<Text style={{ marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18 }}>Filter op naam</Text>
					<TextInput
						style={{
							height: 35,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							width: '60%'
						}}
					/>
				</View>
				<View style={styles.filterUitvoerders}>

					<Text style={{ marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18 }}>
						Filter op eindverantwoordelijke
					</Text>
					<TextInput
						style={{
							height: 35,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							width: '60%'
						}}
					/>
				</View>


				<View
					style={{
						borderTopWidth: 1,
						borderBottomColor: 'grey',
						borderBottomWidth: 1,
						width: '100%',
						alignSelf: 'center',
						top: 6
					}}
				/>
				<View style={styles.bottom}>
					<Button
						style={{
							marginTop: 3,
							marginLeft: '10%',
							backgroundColor: '#85C1E9',
							height: '100%',
							width: '35%',
							right: 20
						}}
					>
						<Text style={{ fontSize: 12 }}>Filters legen</Text>
					</Button>
					<Button
						onPress={this.onClick}
						style={{
							marginTop: 3,
							marginLeft: '10%',
							backgroundColor: '#85C1E9',
							height: '100%',
							width: '45%',
							right: 20
						}}
					>
						<Text style={{ fontSize: 12 }}>Filters toepassen</Text>
					</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	NotificationFilter: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	filterUitvoerders: {
		backgroundColor: '#4545ba',
		marginTop: 10,
		marginBottom: 10,
		width: '87%',
		height: '10%',
		display: 'flex',
		paddingLeft: 5,
		borderRadius: 10
	},
	bottom: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: -50
	}
});
