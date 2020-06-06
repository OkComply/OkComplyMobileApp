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

/**
 * @author Ilias Delawar
 *
 */
 class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title1: 'Nieuw',
			title2: 'Gepland',
			title3: 'Te laat',
		};
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
					<Text style={{ fontSize: 25, marginLeft: 120 }}>Taken</Text>
					<Button style={styles.filterButton} onPress={this.commentPressedHandler}>
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
					<AccordionNew  expanded={this.props.expanded}navigation={this.props.navigation} style={styles.row1} title={this.state.title1} />
					<AccordionGepland expanded2={this.props.expanded2}navigation={this.props.navigation} style={styles.row2} title={this.state.title2} />
					<AccordionTelaat expanded3={this.props.expanded3} navigation={this.props.navigation} style={styles.row3} title={this.state.title3} />
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

	title: {
		display: 'flex',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'center'
	},

	item: {
		flex: 1,
		display: 'flex',
		alignItems: 'center'
	},
	filterButton: {
		marginTop: 3,
		marginLeft: '10%',
		backgroundColor: '#3BB9FF',
		height: '85%',
		width: '22%',
		right: 20
	}
});

function mapStateToProps(state)  {
    return {
		expanded: state.collapsible.expanded,
		expanded2: state.collapsible.expanded2,
		expanded3: state.collapsible.expanded3
    }
}

export default connect(mapStateToProps)(Task)