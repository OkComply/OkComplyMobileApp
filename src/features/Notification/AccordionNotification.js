import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Dimensions} from 'react-native';
import { Colors } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import {  Card } from 'react-native-elements';
import data from '../../assets/reports.json';

const Viewport = Dimensions.get('window');


export default class AccordionNotification extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notification: data,
			expanded: false,
			item: null,
		
		};
	
    }
	render() {
		return (
			<View>
      
				<TouchableOpacity style={this.props.style} onPress={() => this.toggleExpand()}>
					<Text style={[ styles.title ]}>{this.props.title} </Text>
					
					<Text style={{left:"210%", color: '#fff'}}>{this.state.notification.data.reports.length}</Text>
					<Icon
						name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
						size={30}
						color={Colors.WHITE}
					/>

				</TouchableOpacity>
				<View style={styles.parentHr} />
				{this.state.expanded  &&  (
					<View style={{height:((Viewport.width * Viewport.scale) === 1242)? 367: 503}}>
                    
						
                        <FlatList
						style={{ marginBottom: 59 }}
						data={this.state.notification.data.reports}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TouchableOpacity
								 onPress={() => this.navigateToDetail(item)}
							>
								<Card
                                    style={{}}
                                    title={item.label}

									containerStyle={{ borderRadius: 15, borderColor: 'black' }}
								>
									 <View style={styles.item}>
										<Text >Geconstateerd Op: {item.reportedAt}</Text>
									</View> 
								</Card>
							</TouchableOpacity>
						)}
					/>
					</View>
				)}
			</View>
		);
	}

	toggleExpand = () => {
		this.setState({ expanded: !this.state.expanded });
		
		
	};
	navigateToDetail= (item) =>{
		this.setState({
			item: item
		});
		this.props.navigation.navigate('notifactionDetail',{ item})
		console.log('svsndosdin' +item.label);
	}
       
    openModal = async (item) => {
		this.setState({
			item: item
		});
	};
  
}

const styles = StyleSheet.create({
	title: {
		fontSize: 14,
		fontWeight: 'bold',
        color: Colors.WHITE,
	},

	parentHr: {
		height: 1,
		color: Colors.WHITE,
		width: '100%'
	},
	child: {
		backgroundColor: Colors.LIGHTGRAY,
		padding: 16
	}
});
