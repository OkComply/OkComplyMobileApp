import React, { Component } from 'react';

import { Text, RecyclerViewBackedScrollView, View, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TaskListItem from '../components/TaskListItem';
import { Button } from 'react-native-paper';

export default class Task extends Component {
	state = {
		tasks: [
			{ name: 'Taak1', daysToExpire: 12 },
			{ name: 'Taak2', daysToExpire: 5 },
			{ name: 'Taak3', daysToExpire: 16 },
			{ name: 'Taak4', daysToExpire: 200 },
			{ name: 'Taak5', daysToExpire: 120},
			{ name: 'Taak6', daysToExpire: 120},
			{ name: 'Taak7', daysToExpire: 120},
			{ name: 'Taak8', daysToExpire: 120},
			{ name: 'Taak9', daysToExpire: 120}
		]
	};
	render() {
		return (
			<View style={styles.taskPage}>
				<View style={styles.header}>
					<Text style={styles.title}>Mijn Taken</Text>
					<Button style={styles.filterButton}><Text style={{color:'#fff'}}>Filter</Text></Button>
				</View>
				<View
					style={{
						borderTopWidth: 1,
						borderBottomColor: 'grey',
						borderBottomWidth: 1,
						width: '93%',
						alignSelf: 'center'
					}}
				/>
				<View style= {{flex:1, alignItems:'center', width: '100%'}}>
					<FlatList contentContainerStyle={{alignItems:'center'}}
						style={styles.flatListTasks}
						data={this.state.tasks}
						renderItem={(info) => <TaskListItem taskName={info.item.name} 
						daysToExpire= {info.item.daysToExpire}
						/>}
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

	header: {
		alignSelf: 'center',
		flexDirection:'row',
	},
	title: {
		marginTop: '3%',
		fontSize: 25,
		marginBottom: '3%',
		marginLeft:'25%'
	},
	
	flatListTasks:{
		flexGrow:1,
		width:'100%',
	},
	filterButton:{
		marginTop:10,
		marginLeft:'10%',
		backgroundColor: '#85C1E9',
		height:'70%',
		width:'22%',
		
		
	}
});
