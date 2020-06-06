import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Dimensions } from 'react-native';
import { Colors } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import data from '../../assets/reports.json';
import { connect } from 'react-redux';

/**
 * @author Raeef Ibrahim
 */

const Viewport = Dimensions.get('window');


class AccordionNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notification: data,
			expanded: true,
			modalOpen: false,
			item: null,
		};
	}

	navigateToDetail = (item) => {
		this.setState({
			item: item
		});
		this.props.navigation.navigate('notifactionDetail', { item })
		console.log('svsndosdin' + item.label);
	}

	render() {
		return (
			<View>

				<TouchableOpacity style={this.props.style} onPress={() => this.props.setActive(!this.props.expanded)}>
					<Text style={[styles.title]}>{this.props.title}</Text>
					<Text style={{ left: "210%", color: '#fff' }}>{this.state.notification.data.reports.length}</Text>

					<Icon
						name={this.props.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
						size={30}
						color={Colors.WHITE}
					/>
				</TouchableOpacity>
				<View style={styles.parentHr} />
				{this.props.expanded && (
					<View style={{ height: (Platform.OS === 'ios') ? ((Viewport.width * Viewport.scale) === 1242) ? 367 : 503 : 300 }}>

						<FlatList
							data={this.state.notification.data.reports}
							numColumns={1}
							scrollEnabled={true}
							renderItem={({ item, index }) => (
								<TouchableOpacity
									onPress={() => this.navigateToDetail(item)}
								>
									<Card
										style={{}}
										title={item.label}
										backgroundColor="#fff"
										containerStyle={{ borderRadius: 15, borderColor: 'black' }}
									>
										<View style={styles.item}>
											<Text >{"Geconstateerd op: " + item.reportedAt}</Text>
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

	onClick = (index) => {
		const temp = this.state.data.slice()
		temp[index].value = !temp[index].value
		this.setState({ data: temp })
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setActive: (expanded) => dispatch({ type: 'IS_ACTIVE', payload: expanded })

	}

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

		padding: 16
	}
});



export default connect(null, mapDispatchToProps)(AccordionNew)