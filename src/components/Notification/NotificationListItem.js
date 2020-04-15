import React, { Component } from 'react';

import { Text, View, StyleSheet, } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem, Card } from 'react-native-elements';
/**
 * @author Raeef Ibrahim
 *
 */
export default class NotificationListItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: []
		}
	}


	render() {
		return (

			<View style={styles.taskPage}>

				<View>

					<TouchableOpacity>

						<Card style={{ backgroundColor: 'green', color: 'red' }}

							title={this.props.meldingBetreft}
							backgroundColor='white'

						>

							<Text>Melding voor {this.props.meldingBetreft}</Text>
							<Text>Meldingsnummer:   {this.props.meldingNummer}</Text>
							<Text>Geconstateerd op:   {this.props.geconstateerdOp}</Text>
							<Text>Gemeld door:   {this.props.gemeldDoor}</Text>
							<Text>Eind verantwoordelijk: {this.props.eindverantwoordelijk}</Text>
							<Card><Text style={styles.gepland}>{this.props.status}</Text></Card>

							<View>
							</View>

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
	text: {
		fontSize: 25,
		...Platform.select({
			android: {
				fontFamily: 'italic'
			}
		}),
		justifyContent: 'center',
		alignContent: 'center'
	},
	gepland: {
		// color:'#e9a944',

		fontSize: 20,

		...Platform.select({
			android: {
				fontFamily: 'italic'
			}
		})
	},
	nieuw: {},



	 header: {
		alignSelf: 'center',
		flexDirection: 'row',
	},
	title: {
		marginTop: '3%',
		fontSize: 25,
		marginBottom: '3%',
		marginLeft: '25%',

	},

	flatListTasks: {
		flexGrow: 1,
		width: '100%',
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
		backgroundColor: '#33de8e',
	}
});
