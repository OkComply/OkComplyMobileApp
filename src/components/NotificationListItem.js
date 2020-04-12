import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem, Card } from 'react-native-elements';
export default class NotificationListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
	}
	_renderItem = ({ Item, index }) => {
		// return(
		// )
	};

	render() {
		return (
			<View style={styles.taskPage}>
				<View>
					<TouchableOpacity>
						<Card
							style={{ backgroundColor: 'green', color: 'red' }}
							title={this.props.notName}
							backgroundColor="#white"
						>
							<Text>Melding voor {this.props.meldingBetreft}</Text>
							<Text>Meldingsnummer: {this.props.meldingNummer}</Text>
							<Text>Geconstateerd op: {this.props.geconstateerdOp}</Text>
							<Text>Gemeld door: {this.props.gemeldDoor}</Text>
						</Card>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	taskPage: {
		display: 'flex',
		flex: 1
	},

	header: {
		alignSelf: 'center',
		flexDirection: 'row'
	},
	title: {
		marginTop: '3%',
		fontSize: 25,
		marginBottom: '3%',
		marginLeft: '25%'
	},

	flatListTasks: {
		flexGrow: 1,
		width: '100%'
	},
	filterButton: {
		marginTop: 10,
		marginLeft: '10%',
		backgroundColor: '#85C1E9',
		height: '70%',
		width: '22%',
		right: 20
	},
	addButton: {
		backgroundColor: '#33de8e'
	}
});
