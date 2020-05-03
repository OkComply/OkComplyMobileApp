import React, { Component } from 'react';
import {  View, StyleSheet, Alert,SafeAreaView,Text,StatusBar, CardItem,buttonText} from 'react-native';
import { Button } from 'react-native-paper';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import data from '../../assets/reports.json'
import { Card } from 'react-native-elements';


import CollapsibleList from "react-native-collapsible-list";

export default class NieuwList extends Component {
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

		   
   <StatusBar barStyle="dark-content" />
	<SafeAreaView style={styles.container}>
	
		<View >
	
				  </View>
<View >

				  </View>
		 <CollapsibleList
		   numberOfVisibleItems={1}
		   wrapperStyle={styles.wrapperCollapsibleList}
		   onToggle={collapsed =>
			 collapsed
			 
		   }
		   buttonContent={
			
			   <Card style={styles.teLaat}>
				  
			 <View>
				 
		   <Text  style={{color:'blue'}} >Nieuw                                                                                  {this.state.notifications.data.reports.length}</Text>
			 </View>
		
			 </Card>
			 
		   }
		   
		   buttonPosition ={
            'top'
          }
		 >
			  <View></View>
		   <View >
		
		   <FlatList
						style={{ marginBottom: 59 }}
						data={this.state.notifications.data.reports}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TouchableOpacity
								// onPress={() => this.props.navigation.navigate('notifactionDetail')}
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
		   
		
		 </CollapsibleList>
		 
		
		 </SafeAreaView>
		 <View>
			
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
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	   
	  },
	  wrapperCollapsibleList: {
		flex: 1,
		marginTop: 20,
		overflow: "hidden",
		
		borderRadius: 3,
		width:'100%'
	  },
	  collapsibleItem: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: "red",
		padding: 10
	  },
	  teLaat: {
		backgroundColor: 'red'
	  },
	gepland:{
		backgroundColor: 'yellow'
	},
	nieuw:{
		backgroundColor:'blue'
	}
}

);
