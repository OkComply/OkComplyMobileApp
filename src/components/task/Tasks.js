import React, { Component, useState } from 'react';

import { Text, RecyclerViewBackedScrollView, View, StyleSheet, Modal, Dimensions } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import TaskDetail from './taskDetail';
import { ListItem, Card } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TaskItemModal from './taskItemModal';
import taskData from '../../assets/tasks.json';
import Accordion from './Accordion';
import { Colors } from '../../assets/Colors';

/**
 * @author Ilias Delawar
 *
 */

export default class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title1: 'New',
			title2: 'Gepland',
			title3: 'Te laat',
		};
	}

	commentPressedHandler = () => {
		this.props.navigation.navigate('TaskFilter');
	};

	renderAccordians = () => {
		const items = [];
		for (item of this.state.menu) {
			items.push(<Accordion title={item.title} />);
		}
		return items;
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
						marginTop: 5,
						marginBottom: 10
					}}
				/>
				<View>
					<Accordion navigation={this.props.navigation} style={styles.row1} title={this.state.title1} />
					<Accordion navigation={this.props.navigation} style={styles.row2} title={this.state.title2} />
					<Accordion navigation={this.props.navigation} style={styles.row3} title={this.state.title3} />
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

	row1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 56,
		paddingLeft: 25,
		paddingRight: 18,
		alignItems: 'center',
		backgroundColor: Colors.BLUE
	},
	row2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 56,
		paddingLeft: 25,
		paddingRight: 18,
		alignItems: 'center',
		backgroundColor: '#e9a944'
	},
	row3: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 56,
		paddingLeft: 25,
		paddingRight: 18,
		alignItems: 'center',
		backgroundColor: Colors.RED
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
		alignItems: 'center'
	},
	filterButton: {
		marginTop: 3,
		marginLeft: '10%',
		backgroundColor: '#3BB9FF',
		height: '85%',
		width: '22%',
		right: 20
	}
});
