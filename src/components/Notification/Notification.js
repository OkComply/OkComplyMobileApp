import React, { Component } from 'react';

import { Text,View, StyleSheet, Alert, } from 'react-native';
import { Button } from 'react-native-paper';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem, Card } from 'react-native-elements';
import NotificationListItem from './NotificationListItem'
import NotificationDetail from './NotificationDetail';
export default class Notification extends Component {


	state = {
		notification: [
			{ name: 'melding 1', geconstateerdOp: '12-03-2020', meldingBetreft: 'Hek', meldingNummer: 1 ,gemeldDoor:'raeef.ibrahim@hva.nl',eindverantwoordelijk:'ilias.delawar@hva.nl',status:'Te Laat'},
			{ name: 'melding 2', geconstateerdOp: '12-03-2020', meldingBetreft: 'Licht', meldingNummer: 2,gemeldDoor:'ilias.delawar@hva.nl',eindverantwoordelijk:'ilias.delawar@hva.nl',status:'Gepland' },
			{ name: 'melding 3', geconstateerdOp: '12-03-2020', meldingBetreft: 'brandblusser ', meldingNummer: 3,gemeldDoor:'ilias.delawar@hva.nl' ,eindverantwoordelijk:'raeef.ibrahim@hva.nl',status:'Nieuw'},
			{ name: 'melding 4', geconstateerdOp: '12-03-2020', meldingBetreft: 'Hek', meldingNummer: 4,gemeldDoor:'ilias.delawar@hva.nl' ,eindverantwoordelijk:'raeef.ibrahim@hva.nl',status:'Te Laat'},
			{ name: 'melding 5', geconstateerdOp: '12-03-2020', meldingBetreft: 'Hek', meldingNummer: 5,gemeldDoor:'raeef.ibrahim@hva.nl',eindverantwoordelijk:'raeef.ibrahim@hva.nl',status:'Gepland'},
			{ name: 'melding 6', geconstateerdOp: '12-03-2020', meldingBetreft: 'Hek', meldingNummer: 6,gemeldDoor:'ilias.delawar@hva.nl',eindverantwoordelijk:'raeef.ibrahim@hva.nl',status:'Te Laat'},
			{ name: 'melding 7', geconstateerdOp: '12-03-2020', meldingBetreft: 'Hek', meldingNummer: 7,gemeldDoor:'raeef.ibrahim@hva.nl',eindverantwoordelijk:'raeef.ibrahim@hva.nl',status:'Gepland'},
			{ name: 'melding 8', geconstateerdOp: '12-03-2020', meldingBetreft: 'Hek', meldingNummer: 8,gemeldDoor:'raeef.ibrahim@hva.nl',eindverantwoordelijk:'raeef.ibrahim@hva.nl',status:'Te Laat'},
	
		]
	};


	onAddNotification =() => {
		this.props.navigation.navigate('AddNotification')
	}
	render() {
		return (
			
			<View style={styles.taskPage}>
		

			<View >
			<View style={styles.header}>
		    <Text style={styles.title}>Mijn Meldingen</Text>
		    <Button style={styles.filterButton}>
		 <Text style={{color:'#fff'}}>Filter</Text>
			</Button>
				</View>
				<View>
				<Button style={styles.addButton}
				onPress={this.onAddNotification}>
				    <Text style={{color:'#fff'}}>+ Melding toevoegen</Text>
					</Button>
				</View>				
					<View>
						
					<View >
					<TouchableOpacity
					onPress={() => this.props.navigation.navigate('notifactionDetail')}>
					<FlatList 
						//style={styles.flatListTasks}
						data={this.state.notification}
						keyExtractor={(item) => item.id}
						renderItem={(info) => <NotificationListItem  notName={info.item.name} 
						geconstateerdOp= {info.item.geconstateerdOp}
						meldingBetreft={info.item.meldingBetreft}
						meldingNummer={info.item.meldingNummer}
						gemeldDoor={info.item.gemeldDoor}
						eindverantwoordelijk={info.item.eindverantwoordelijk}
						status= {info.item.status}
						key={Math.random().toString()}
						
						/>}
					/>
					  </TouchableOpacity>
					</View>
					<View>
			
					</View>
				              
					</View>
	
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
		fontSize: 20,
		marginBottom: '3%',
		marginLeft:'25%',
	
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
		right:20
		
	},
	addButton: {
		backgroundColor: '#33de8e',
		width:'93%',
		left: '4%'
	}
});
