import React, { Component } from 'react';
import { Text, RecyclerViewBackedScrollView, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { Button } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker'


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

	alertfun = () => {
		//alert('clicked');
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);
		  
			if (response.didCancel) {
			  console.log('User cancelled image picker');
			} else if (response.error) {
			  console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {

			  const source = { uri: response.uri };
		  
			  // You can also display the image using data:
			  // const source = { uri: 'data:image/jpeg;base64,' + response.data };
		  
			  this.setState({
				avatarSource: source,
			  });
			}
		  });
	}

	

	render() {
		const item = this.props.route.params.item;

		return (
			<View style={styles.container}>
				{/*<ScrollView>*/}
				<Text style={{alignSelf:"center", fontSize:20, marginTop:5}}>{item.label}</Text>

				<View>
					<Text style={styles.labelStyle}>Beschrijf de taak voor deze maatregel </Text>
					<TextInput style={styles.inputStyle} defaultValue="Dit is de beschrijving" />
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
					<Text style={styles.labelStyle}>Eindverantwoordelijke voor deze taak</Text>
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
						// Icon={ <MaterialIcon name="person" size={25} color="#FFFF" />}

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
					<Button style={{ backgroundColor: 'white' , marginLeft: 15, marginEnd: 15, marginTop: 5}} 
					
					onPress={this.alertfun}
					
					>
						<Text style={{ color: '#3BB9FF' }}>Kies foto</Text>
					</Button>
					<View/>
				</View>

				<View style={{ 
					display: 'flex', 
					justifyContent: 'space-between' }}>

					<Button style={{ backgroundColor: '#33de8e', marginLeft: 15, marginEnd: 15}} 
						onPress={this.onAddNotification}>
						<Text style={{ color: 'white' }}>Melding maken</Text>

					</Button>

				</View>

				<View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
					<Button
						//onPress={this.alertfun}
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
						//onPress={Add onTaskComplete page}
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
		marginTop: 5
	}
});
