import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, } from 'react-native';
import { Button } from 'react-native-paper';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import data from '../../assets/reports.json'
import { Card } from 'react-native-elements';
export default class Notification extends Component {
	/**
	 * @author Raeef Ibrahim
	 * 
	 */
	constructor(props) {
		super(props);
		this.state = {
			notifications:data,
         
        };
        
	}


	onAddNotification = () => {
		this.props.navigation.navigate('AddNotification')

	};
	OnFilter = () => {
		this.props.navigation.navigate('NotificationFilter')
	}
	render() {
		return (

			<View style={styles.taskPage}>

				<ScrollView>
					<View >
						<View style={styles.header}>
						<Text style={{ fontSize: 25, marginLeft: 120 }}>Meldingen</Text>
							<Button onPress={this.OnFilter} style={styles.filterButton}>
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
						data={this.state.notifications.data.reports}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('notifactionDetail')}
							>
								<Card
                                    style={{}}
                                    title={item.label}
									backgroundColor="#fff"
									containerStyle={{ borderRadius: 15, borderColor: 'black' }}
								>
									 <View style={styles.item}>
										<Text >Geconstateerd Op: {item.reportedAt}</Text>
									</View> 
								</Card>
							</TouchableOpacity>
						)}
					/>
							<View>

							</View>

						</View>

					</View>


				</ScrollView>
				<View>
							<Button style={styles.addButton}
								onPress={this.onAddNotification}>
								<Text style={{ color: '#fff' }}>+ Melding toevoegen</Text>
							</Button>
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
		flexDirection: 'row',
	},
	title: {
		marginTop: '3%',
		fontSize: 20,
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
		backgroundColor:'#3BB9FF',
		height: '70%',
		width: '22%',
		right: 20

	},
	addButton: {
		backgroundColor: '#33de8e',
		width: '95%',
		left: '3%'
	},
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
