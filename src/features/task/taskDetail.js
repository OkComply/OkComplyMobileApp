import React, { Component } from 'react';
import { Text, RecyclerViewBackedScrollView, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { Button } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import Snackbar from 'react-native-snackbar';


/**
 * @author Ilias Delawar
 *
 * @author Mick Bogaard
 */


const options={
	title: 'Fotos',
	takePhotoButtonTitle: 'Neem een foto',
	chooseFromLibraryButtonTitle: 'Kies een foto uit je gallerij',
}

export default class TaskDetail extends Component {
	constructor(props) {
		super(props);
		this.state = { date: '2016-05-15', avatarSource: null };
	}

	onAddNotification = () => {
		this.props.navigation.navigate('AddNotification');
	};

	onConfirm = () => {
		this.props.navigation.navigate('myTab');
		this.alertfun();
	};

	onDeny = () => {
		this.props.navigation.navigate('myTab');
	};

	addPicture = () => {
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);
		  
			if (response.didCancel) {
			  console.log('User cancelled image picker');
			} else if (response.error) {
			  console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {

			  const source = { uri: response.uri };
		  
			  this.setState({
				avatarSource: source,
			  });
			}
		  });
	}

	alertfun = () => {
		Snackbar.show({
			text: 'task completed',
			duration: Snackbar.LENGTH_SHORT,
			backgroundColor: '#33de8e'
		})
	}

	render() {
		const item = this.props.route.params.item;

		return (
			<View style={styles.container}>
				{/*<ScrollView>*/}
				<Text style={{alignSelf:"center", fontSize:20, marginTop:5}}>{item.owners.name}</Text>

				<View>
					<Text style={styles.labelStyle}>Beschrijf de taak voor deze maatregel </Text>
					<Text style={styles.inputStyle} >{item.label} </Text>
					
				</View>
				<View>
					<Text style={styles.labelStyle}>Taak moet voor deze datum zijn uitgevoerd</Text>
					<DatePicker
						style={styles.inputStyle}
						date={this.state.date}
						onDateChange={(date) => this.setState({ date: date })}
						confirmBtnText="Bevestig"
						cancelBtnText="Annuleer"
						format="DD-MM-YYYY"
					/>
				</View>
				<View>
		<Text style={styles.labelStyle}>Eindverantwoordelijke voor deze taak </Text>
					<RNPickerSelect
						style={{
							inputIOS: {
								backgroundColor: 'white',
								margin: 15,
								borderColor: 'grey',
								borderWidth: 1,
								height: 40
							}
						}}
						onValueChange={(value) => console.log(value)}
						items={[
							{ label: 'Football', value: 'football' },
							{ label: 'Baseball', value: 'baseball' },
							{ label: 'Hockey', value: 'hockey' }
						]}
					/>
				</View>
				
				<View>
					<Text style={styles.labelStyle}>Uivoerende van deze taak</Text>
					<RNPickerSelect

						style={{
							inputIOS: {
								backgroundColor: 'white',
								margin: 15,
								borderColor: 'grey',
								borderWidth: 1,
								height: 40
							}
						}}
						onValueChange={(value) => console.log(value)}
						items={[
							{ label: 'Football', value: 'football' },
							{ label: 'Baseball', value: 'baseball' },
							{ label: 'Hockey', value: 'hockey' }
						]}
					/>
				</View>

				<View style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Text style={styles.labelStyle}>Bestanden toevoegen</Text>
					<Button style={{ backgroundColor: 'white' , marginLeft: '3%', marginEnd: '3%', marginTop: 5}} 
					
					onPress={this.addPicture}
					
					>
						<Text style={{ color: '#3BB9FF' }}>Kies foto</Text>
					</Button>
					<View/>
				</View>

				<View style={{ 
					display: 'flex', 
					justifyContent: 'space-between' }}>

					<Button style={{ backgroundColor: '#33de8e', marginLeft: '3%', marginEnd: '3%'}} 
						onPress={this.onAddNotification}>
						<Text style={{ color: 'white' }}>Melding maken</Text>

					</Button>

				</View>

				<View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between', marginBottom: 5, paddingLeft: '3%', paddingRight: '3%' }}>
					<Button
						onPress={this.onDeny}
						style={{
							width: '50%',
							height: '100%',
							backgroundColor: 'red',
							margin: 0
						}}
					>
						<MaterialIcon 
						name="close" 
						size={15} 
						color="white" />

						<Text style={{ 
							color: 'white', 
							fontSize: 15 ,}}>Sluiten</Text>
					</Button>

				
					<Button
						onPress={this.onConfirm}
						style={{
							width: '50%',
							height: '100%',
							backgroundColor: '#33de8e',
							margin: 0
						}}
					>
						<MaterialIcon 
						name="check" 
						size={15} 
						color="#FFFF" />

						<Text style={{ color: '#fff', fontSize: 15 }}>Voltooien</Text>
					</Button>

				</View>


				{/*</ScrollView>*/}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'space-between'
	},
	labelStyle: {
		marginLeft: 15,
		marginTop: 0,
		fontSize: 17
	},
	inputStyle: {
		height: 40,
		borderColor: 'grey',
		borderWidth: 1,
		backgroundColor: 'white',
		color: 'black',
		margin: 15,
		marginTop: 5,
	}
});
