import React, { Component, useState } from 'react';

import { Text, RecyclerViewBackedScrollView, View, StyleSheet, Modal, Dimensions } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import TaskDetail from './taskDetail';
import { ListItem, Card } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TaskItemModal from './taskItemModal';
import  taskData from '../../assets/tasks.json'
/**
 * @author Ilias Delawar
 *
 */

export default class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks:taskData,
            modalOpen: false,
            item: null
        };
        
	}

	openModal = async item=> {
		this.setState({
            modalOpen: true,
            item: item
        });
        
	};

	closeModal = () => {
		return this.setState({
			modalOpen: false
		});
	};

	closeModalAndAddNotification = () => {
        this.props.navigation.navigate('AddNotification');
        this.closeModal()
	};

	closeModalAndGoToTaskDetail = () => {
        this.props.navigation.navigate('TaskDetail', {item: this.state.item});
        this.closeModal();
        
        console.log("svsndosdin" + this.state.item.label)
	};

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
				<Modal transparent={true} visible={this.state.modalOpen} animationType={'slide'}>
					<TaskItemModal
						closeModal={this.closeModal}
                        closeModalAndGoToTaskDetail={this.closeModalAndGoToTaskDetail}
                        closeModalAndAddNotification = {this.closeModalAndAddNotification}
                        closeByOverlayClick = {this.closeModal}
					/>
				</Modal>

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
						style={{ marginBottom: 59 }}
						data={this.state.tasks.data.tasks}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => this.openModal(item)}
								// onLongPress={this.openModal}
							>
								<Card
                                    style={{}}
                                    title={item.label}
									backgroundColor="#fff"
									containerStyle={{ borderRadius: 15, borderColor: 'black' }}
								>
									<View style={styles.item}>
										<Text >{item.deadline}</Text>
									</View>
								</Card>
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
        flex: 1,
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
        alignItems: 'center',
        
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
