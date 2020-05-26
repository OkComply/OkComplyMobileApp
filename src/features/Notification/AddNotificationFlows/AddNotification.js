import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Text, View, StyleSheet, Alert, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FirstPage from './FirstPage'
import { CACHES } from 'react-native-sound';

/**
 * @author Raeef Ibrahim
 *
 */
export default class AddNotification extends Component {
	constructor(props) {
		super(props)
		this.state = {
			label: ''

		}
	}
	onSave = () => {
		this.props.navigation.navigate('myTab')
	}
	render() {
		return (

			<View style={styles.taskPage}>
			<ScrollView>
				<View>
					

					<Text style={styles.textStyle}>Beschrijf waar deze melding over gaat</Text>

					<Card>
					<TextInput
							style={{
								height: 70,
								borderColor: 'gray',
								borderWidth: 1,
								backgroundColor: 'white',
								color: 'black'
							}}
						/>
					</Card>

					<Text style={styles.textStyle}>Welke actie is er inmiddels ondernomen?</Text>
					<Card>
					<TextInput
							style={{
								height: 70,
								borderColor: 'gray',
								borderWidth: 1,
								backgroundColor: 'white',
								color: 'black'
							}}
						/>
					</Card>

					<Text style={styles.textStyle}> Zijn er ideeën voor verbetering?</Text>

					<Card>
					<TextInput
							style={{
								height: 70,
								borderColor: 'gray',
								borderWidth: 1,
								backgroundColor: 'white',
								color: 'black'
							}}
						/>
					</Card>
					<Text style={styles.textStyle}> Bestanden toevoegen</Text>
					<Card></Card>
				</View>
			</ScrollView>

			<View style={styles.addButton2}>

				<View>
					<Button style={styles.addButton}
						onPress={this.onSave}>
						<Text style={{ color: '#fff' }}>Opslaan</Text>
					</Button>
				</View>
			</View>

		</View>
					
	


		);
	}
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        ...Platform.select({
            android: {
                fontFamily: 'italic'
            }
        }),
        marginLeft: '5%'
    },
	selecterStyle: {
		width: "200%",
		height: 20
	},
	selecterStyle: {
        width: 200,
        height: 20
    },
    btn: {
        backgroundColor: '#33de8e'
    },	selecterStyle: {
		width: "200%",
		height: 20
	},
    addButton: {
        backgroundColor: '#33de8e',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: '5%',
        width: '95%',
        display: 'flex',
        borderRadius: 100,
        height:'25%'


    },
    addButton2: {

        marginBottom: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',

	},
	taskPage:{
		top:'5%'
	}
});
