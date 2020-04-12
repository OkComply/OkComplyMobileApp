import React, { Component } from 'react';

import { Text, RecyclerViewBackedScrollView, View, StyleSheet } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import TaskDetail from './taskDetail';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * @author Ilias Delawar
 * 
 */

export default class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				// max 55 karakters voor titel taak
				{ name: 'Hek om de garage zetten', daysToExpire: 12, id: 1 },
				{ name: 'Deur vervangen', daysToExpire: 5, id: 2 },
				{ name: 'Veiligheid verbeteren', daysToExpire: 16, id: 3 },
				{ name: 'Auto schoonmaken', daysToExpire: 200, id: 4 },
				{ name: 'Eten maken', daysToExpire: 120, id: 5 },
				{ name: 'Naar huis gaan', daysToExpire: 120, id: 6 },
				{ name: 'Wat kan nog meer', daysToExpire: 120, id: 7 },
				{ name: 'Blavlalbalb', daysToExpire: 120, id: 8 },
				{ name: 'Se 9de taak', daysToExpire: 120, id: 9 }
			]
		};
	}

	commentPressedHandler = () => {
		this.props.navigation.navigate('TaskFilter');
	};

	// state = {
	// 	tasks: [
	// 		{ name: 'Taak1', daysToExpire: 12, id: 1 },
	// 		{ name: 'Taak2', daysToExpire: 5, id: 2 },
	// 		{ name: 'Taak3', daysToExpire: 16, id: 3 },
	// 		{ name: 'Taak4', daysToExpire: 200, id: 4 },
	// 		{ name: 'Taak5', daysToExpire: 120, id: 5 },
	// 		{ name: 'Taak6', daysToExpire: 120, id: 6 },
	// 		{ name: 'Taak7', daysToExpire: 120, id: 7 },
	// 		{ name: 'Taak8', daysToExpire: 120, id: 8 },
	// 		{ name: 'Taak9', daysToExpire: 120, id: 9 }
	// 	]
	// };
	render() {
		return (
			<View style={styles.taskPage}>
				<View style={styles.title}>
					<Text style={{ fontSize: 25, marginLeft: 120 }}>Taken</Text>
					<Button style={styles.filterButton} onPress={this.commentPressedHandler}>
						<Text style={{ color: '#fff' }}>Filter</Text>
					</Button>
				</View>
				<View
					style={{
						borderTopWidth: 1,
						borderBottomColor: 'grey',
						borderBottomWidth: 1,
						width: '93%',
						alignSelf: 'center',
						marginTop: 5
					}}
				/>
				<View>
					<FlatList
						data={this.state.tasks}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.item}
								onPress={() => this.props.navigation.navigate('TaskDetail')}
							>
								<Text style={{ fontSize: 17, marginBottom: 5 }}>{item.name}</Text>
								<View
									style={{
										borderTopWidth: 1,
										borderBottomColor: 'grey',
										borderBottomWidth: 1,
										width: '93%',
										alignSelf: 'center',
										marginTop: 1,
										marginBottom:5
									}}
								/>
								<Text>{item.daysToExpire} dagen over</Text>
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	taskPage: {
		display: 'flex',
		flex: 1
	},

	title: {
		display: 'flex',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'center'
	},

	item: {
		flex: 1,
		display: 'flex',
		marginHorizontal: 40,
		marginTop: 24,
		padding: 12,
		backgroundColor: 'white',
		fontSize: 15,
		height: 100,
		alignItems: 'center',
		borderWidth: 3,
		borderRadius: 20
	},
	filterButton: {
		marginTop: 3,
		marginLeft: '10%',
		backgroundColor: '#85C1E9',
		height: '85%',
		width: '22%',
		right: 20
	}
});
