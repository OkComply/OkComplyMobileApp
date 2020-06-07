import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import data from '../../assets/reports.json'
import { Colors } from '../../assets/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import AccordionNew from '../Notification/accordionNew'
import AccordionTelaat from '../Notification/accordionTelaat'
import AccordionGepland from '../Notification/accordionGepland'
import { connect } from 'react-redux';
class Notification extends Component {
	/**
	 * @author Raeef Ibrahim
	 * 
	 */
	constructor(props) {
		super(props);
		this.state = {
			notifications: data,
			title1: 'Nieuw',
			title2: 'Gepland',
			title3: 'Te laat',
		};


	}

	renderAccordians = () => {
		const items = [];
		for (item of this.state.menu) {
			items.push(<AccordionNotification title={item.title} />);
		}
		return items;
	};
	onAddNotification = () => {
		this.props.navigation.navigate('FirstPage')

	};
	OnFilter = () => {
		this.props.navigation.navigate('NotificationFilter')
	}
	render() {
		return (

			<View style={styles.notificationPage}>

				<View style={styles.title}>
					<Text style={{ fontSize: 25, marginLeft: 120 }}>Meldingen</Text>
					<Button style={styles.filterButton} onPress={this.OnFilter}>
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
						marginTop: 5,
						marginBottom: 10
					}}
				/>
				<View>
					<ScrollView>
						<AccordionNew expanded={this.props.expanded} navigation={this.props.navigation} style={styles.row1} title={this.state.title1} />
						<AccordionGepland expanded2={this.props.expanded2} navigation={this.props.navigation} style={styles.row2} title={this.state.title2} />
						<AccordionTelaat expanded3={this.props.expanded3} navigation={this.props.navigation} style={styles.row3} title={this.state.title3} />
					</ScrollView>
				</View>

				<View style={styles.MainContainer}>

					<TouchableOpacity activeOpacity={0.5} onPress={this.onAddNotification} style={styles.TouchableOpacityStyle} >

						<Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/vibrancie-action/30/action_021-add-new-plus-compose-512.png' }}

							style={styles.FloatingButtonStyle} />

					</TouchableOpacity>

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

	row1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 56,
		paddingLeft: 25,
		paddingRight: 18,
		alignItems: 'center',
		backgroundColor: '#3172d7'
	},
	row2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 56,
		paddingLeft: 25,
		paddingRight: 18,
		alignItems: 'center',
		backgroundColor: Colors.OrangeYellow
	},
	row3: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 56,
		paddingLeft: 25,
		paddingRight: 18,
		alignItems: 'center',
		backgroundColor: Colors.RED
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
	filterButton: {
		marginTop: 10,
		marginLeft: '10%',
		backgroundColor: '#3BB9FF',
		height: '70%',
		width: '22%',
		right: 20

	},
	addButton: {
		backgroundColor: '#33de8e',
		width: '95%',
		left: '3%',
		top: '730%'
	},
	notificationPage: {
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
		width: '30%',
		right: 20
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

	},
	MainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5F5F5'
	},

	TouchableOpacityStyle: {

		position: 'absolute',
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		right: 30,
		bottom: 30,

	},

	FloatingButtonStyle: {
		resizeMode: 'contain',
		width: 50,
		height: 50,
	}
}

);
function mapStateToProps(state) {
	return {
		expanded: state.collapsible.expanded,
		expanded2: state.collapsible.expanded2,
		expanded3: state.collapsible.expanded3
	}
}

export default connect(mapStateToProps)(Notification)