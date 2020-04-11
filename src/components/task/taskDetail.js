import React, { Component } from 'react';
import { Text, RecyclerViewBackedScrollView, View, StyleSheet, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { Button } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';



/**
 * @author Ilias Delawar
 * 
 */

export default class TaskDetail extends Component {
	constructor(props) {
		super(props);
		this.state = { date: '2016-05-15' };
	}

	render() {
		return (
			<View style = {styles.container}>
				<View>
					<Text>Beschrijf de taak voor deze maatregel</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							color: 'black'
						}}
					/>
				</View>
				<View>
					<Text>Eindverantwoordelijke voor deze taak</Text>
					<RNPickerSelect
						onValueChange={(value) => console.log(value)}
						items={[
							{ label: 'Football', value: 'football' },
							{ label: 'Baseball', value: 'baseball' },
							{ label: 'Hockey', value: 'hockey' }
						]}
					/>
				</View>
				<View>
					<Text>Taak moet voor deze datum zijn uitgevoerd</Text>
					<DatePicker
						date={this.state.date}
						onDateChange={(date) => this.setState({ date: date })}
						confirmBtnText="Bevestig"
						cancelBtnText="Annuleer"
						format="DD-MM-YYYY"
					/>
				</View>
				<View>
					<Text>Uivoerende van deze taak</Text>
					<RNPickerSelect
						onValueChange={(value) => console.log(value)}
						items={[
							{ label: 'Football', value: 'football' },
							{ label: 'Baseball', value: 'baseball' },
							{ label: 'Hockey', value: 'hockey' }
						]}
					/>
				</View>
				<View>
					<Text>Bestanden toevoegen</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							color: 'black'
						}}
					/>
					<Button
						style={{width:'50%', height: '20%', backgroundColor:'green'}}
					>
						<MaterialIcon name="add" size={15} color="#FFFF" />
						<Text style={{ color: '#fff' , fontSize:15}}>Melding maken</Text>
					</Button>
				</View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		display:'flex',
		flex:1,
		justifyContent:'space-between'
	}
})
