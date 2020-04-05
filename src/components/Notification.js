import React, { Component } from 'react';

import { Text,View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListItem, Card } from 'react-native-elements';
export default class Notification extends Component {

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
			<View >
					<View style={styles.header}>
					<Text style={styles.title}>Mijn Meldingen</Text>
					<Button style={styles.filterButton}>
				    <Text style={{color:'#fff'}}>Filter</Text>
					</Button>
			
				</View>
				<View>
				<Button style={styles.addButton}>
				    <Text style={{color:'#fff'}}>+ Melding toevoegen</Text>
					</Button>
				</View>
				<View
					style={{
						borderTopWidth: 1,
						borderBottomColor: 'grey',
						borderBottomWidth: 1,
						width: '93%',
						alignSelf: 'center',
						top: 20
					}}
				/>
					<View style= {{flex:1, alignItems:'center', width: '100%'}}>
	
					{/* <FlatList contentContainerStyle={{alignItems:'center'}}
						style={styles.flatListTasks}
						renderItem={({ item }) => (
							<ListItem 
							title={item.name} 
							subtitle={item.daysToExpire}
							/>
						)}
					/> */}
				                  
					</View>
	
			</View>
			<View>
			<Card style= {{backgroundColor:'green', color:'red'}}

title='Te Laat'
backgroundColor='#ff0000'
>

<Text style={{ marginBottom: 10, fontSize: 20, fontStyle: 'italic' }}>
	4
</Text>

</Card>
			</View>
			<View>
			<Card style= {{backgroundColor:'green', color:'red'}}

title='Gepland'
titleStyle='white'

backgroundColor='#e9a944'
>

<Text style={{ marginBottom: 10, fontSize: 20, fontStyle: 'italic' }}>
	3
</Text>

</Card> 
			</View>
			<View>
			<Card style= {{backgroundColor:'green', color:'red'}}

title='Nieuw'
backgroundColor='#3172d7'
>

<Text style={{ marginBottom: 10, fontSize: 20, fontStyle: 'italic' }}>
	5
</Text>

</Card>
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
		backgroundColor: 'green',
	}
});
