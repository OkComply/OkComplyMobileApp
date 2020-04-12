import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Text,View, StyleSheet, Alert,TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export default class AddNotification extends Component {
	constructor(props) {
        super(props)
        this.state = {
			label: ''
            
        }
    }
onSave  =() => {
	this.props.navigation.navigate('myTab')
}
	render() {
		return (
			
			<View style={styles.taskPage}>
			

<ScrollView>
<View>
	
<Text style={styles.textStyle} >    Selecteer item binnen organisatie</Text>
	<Card>
		
		<RNPickerSelect 
						onValueChange={(value) => console.log(value)}
						
						placeholder={{
							label: 'Selecteer item',
							
						}}
						items={[
							{ label: 'HvA', value: 'football' },
							{ label: 'Test', value: 'baseball' },
							{ label: 'HvAOkComply', value: 'hockey' }
						]}
						
					/>
</Card>
<View>
	
<Text style={styles.textStyle} >    Waar gaat deze melding over?</Text>
					
					<Card>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							color: 'black'
						}}
					/>
					</Card>
				</View>
</View>	
<View>
<Text style={styles.textStyle} >    Geconstateerd op</Text>
<Card>
					<DatePicker
					style={{width: 350, left:11}}
						date={this.state.date}
						onDateChange={(date) => this.setState({ date: date })}
						confirmBtnText="Bevestig"
						cancelBtnText="Annuleer"
						format="DD-MM-YYYY"
					/>
					</Card>
				</View>
				<Text style={styles.textStyle} >    Selecteer de eindverantwoordelijke </Text>
				<Card>
				
		<RNPickerSelect 
						onValueChange={(value) => console.log(value)}
						
						placeholder={{
							label: 'Selecteer item',
							
						}}
						items={[
							{ label: 'Raeef.ibrahim@hva.nl', value: 'football' },
							{ label: 'ilias.delawar@hva.nl', value: 'baseball' },
							{ label: 'ralfdxib@hotmail.com', value: 'hockey' }
						]}
						
					/>
</Card>
<View>
	
<Text style={styles.textStyle} >   Beschrijf waar deze melding over gaat</Text>
					
					<Card>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							color: 'black'
						}}
					/>
					</Card>
				</View>
				<View>
	
<Text style={styles.textStyle} >    Welke actie is er inmiddels ondernomen?</Text>
					
					<Card>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							color: 'black'
						}}
					/>
					</Card>
				</View>
				<View>

<Text style={styles.textStyle} >    Zijn er ideeën voor verbetering?</Text>
					
					<Card>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							color: 'black'
						}}
					/>
					</Card>
				</View>
				<View><Text style={styles.textStyle} >   Bestanden toevoegen</Text>
				</View>
				<Card></Card>
				<Button onPress={this.onSave} style={styles.btn}
>
<Text  style={{color:'#fff',fontSize:20}}>Opslaan</Text>
	</Button>
				</ScrollView>
				
			</View>
			
			
		);
	}
}
const styles = StyleSheet.create({
textStyle: {
	fontSize: 20,
	fontFamily:'italic',
	height:50

},
btn: {
		
	backgroundColor: '#33de8e'
},
});
