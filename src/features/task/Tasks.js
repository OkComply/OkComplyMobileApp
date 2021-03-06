import React, { Component, useState } from 'react';

import { Text, RecyclerViewBackedScrollView, View, StyleSheet, Modal, Dimensions } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import TaskDetail from './taskDetail';
import { ListItem, Card } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TaskItemModal from './taskItemModal';
import taskData from '../../assets/tasks.json';
import AccordionNew from './accordionNew';
import { Colors } from '../../assets/Colors';
import { connect } from 'react-redux';
import AccordionGepland from './accordionGepland';
import AccordionTelaat from './accordionTelaat';
import client from '../../ApolloClient/apolloClient';
import gql from 'graphql-tag';




/**
 * @author Ilias Delawar
 * 
 * @author Mick Bogaard
 *
 */
class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title1: 'Nieuw',
			title2: 'Gepland',
			title3: 'Te laat'
		};
	}

	onConfirm = () => {
		this.props.navigation.navigate('myTab');
		this.alertfun();
	};

	async doQuery() {

		const USER_QUERY = gql`
			query userProfile {
				userProfile {
					id
					email
					name
					surname
				}
			}`;
		const ORGANISATION_QUERY = gql`
			query organisations {
				organisations {
						id
						label
						root {
								id
								virtualParentId
								label
								path
						}
				}
			}
		`;
		const TASKS_QUERY = gql`
				query tasks(
					$nodeId: IdentifierScalar!,
					$executors: [IdentifierScalar],
					$owners: [IdentifierScalar],
					$tags: [IdentifierScalar],
					$searchLabel: SearchScalar,
					$showRecentClosed: Boolean
			) {
					tasks(
							nodeId: $nodeId,
							executors: $executors,
							owners: $owners,
							tags: $tags,
							searchLabel: $searchLabel,
							showRecentClosed: $showRecentClosed
					) {
						id
						label
						deadline
						completed
						sequenceNumber
					}
			}
	
		`;

		try {
			const userResult = await client.query({
				query: USER_QUERY,
				variables: {},
			});
			const { userProfile } = userResult.data;
			console.log("userProfile", userProfile);

			const organisationsResult = await client.query({
				query: ORGANISATION_QUERY,
				variables: {},
			});
			const { organisations } = organisationsResult.data;
			console.log("organisations", organisations);
			console.log("id", organisations[0].root.id);
			const tasksResult = await client.query({
				query: TASKS_QUERY,
				variables: {
					nodeId: organisations[0].root.id,
					executors: [],
					owners: [],
					tags: [],
					showRecentClosed: false,
					searchLabel: "",
				},
			});
			console.log(tasksResult);
		} catch (error) {
			console.log(error);
		}

	}

	commentPressedHandler = () => {
		this.props.navigation.navigate('TaskFilter');
	};

	renderAccordians = () => {
		const items = [];
		for (item of this.state.menu) {
			items.push(<Accordion title={item.title} />);
		}
		return items;
	};

	render() {

		return (
			<View style={styles.taskPage}>
			
				<View style={styles.title}>
					<Text style={{ fontSize: 25, alignSelf: 'center'}}>Taken</Text>

				</View>
				<View
					style={{
						borderTopWidth: 2,
						borderBottomColor: 'grey',
						borderBottomWidth: 0,
						width: '100%',
						alignSelf: 'center',
						marginTop: 5
					}}
				/>
				<View style={{ height:'100%'}}>
					<AccordionNew
						expanded={this.props.expanded}
						navigation={this.props.navigation}
						style={styles.row1}
						title={this.state.title1}
					/>
					<AccordionGepland
						expanded2={this.props.expanded2}
						navigation={this.props.navigation}
						style={styles.row2}
						title={this.state.title2}
					/>
					<AccordionTelaat
						expanded3={this.props.expanded3}
						navigation={this.props.navigation}
						style={styles.row3}
						title={this.state.title3}
					/>
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
		height: 70,
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

	title: {
		display: 'flex',
		marginTop: '3%',
		marginStart: '43%',
		flexDirection: 'row',
		textAlign: 'center',
		height:(Platform.OS === 'ios') ? '5%' : '6%'
	},

// ((Viewport.width * Viewport.scale) === 1242)  ? '23%' : '25%'

	item: {
		flex: 1,
		display: 'flex',
		alignItems: 'center'
	},
	filterButton: {
		left: '270%',
		marginTop: 0,
		backgroundColor: '#3BB9FF',
		height: '100%',
		width: '35%',
	}
});

function mapStateToProps(state) {
	return {
		expanded: state.collapsible.expanded,
		expanded2: state.collapsible.expanded2,
		expanded3: state.collapsible.expanded3
	};
}

export default connect(mapStateToProps)(Task);
