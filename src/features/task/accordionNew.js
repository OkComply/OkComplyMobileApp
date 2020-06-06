import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet , Modal, Dimensions} from 'react-native';
import { Colors } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import {  Card } from 'react-native-elements';
import taskData from '../../assets/tasks.json';
import TaskItemModal from './taskItemModal'

import { connect } from 'react-redux';

/**
 * @author Ilias Delawar
 */

const Viewport = Dimensions.get('window');


class AccordionNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: taskData,
            expanded: true,
            modalOpen: false,
			item: null,
		};
    }
    
    openModal = async (item) => {
		this.setState({
			modalOpen: true,
			item: item
		});
	};

	closeModal = () => {
		return this.setState({
			modalOpen: false
		});
    };
    
    closeModalAndAddNotification = () => {
		this.props.navigation.navigate('AddNotification');
		this.closeModal();
	};

	closeModalAndGoToTaskDetail = () => {
		this.props.navigation.navigate('TaskDetail', { item: this.state.item });
		this.closeModal();

		console.log('svsndosdin' + this.state.item.label);
	};

	commentPressedHandler = () => {
		this.props.navigation.navigate('TaskFilter');
	};

	render() {
		return (
			<View>
                <Modal transparent={true} visible={this.state.modalOpen} animationType={'slide'}>
					<TaskItemModal
						closeModal={this.closeModal}
						closeModalAndGoToTaskDetail={this.closeModalAndGoToTaskDetail}
						closeModalAndAddNotification={this.closeModalAndAddNotification}
						closeByOverlayClick={this.closeModal}
					/>
				</Modal>
				<TouchableOpacity style={this.props.style} onPress={() =>this.props.setActive(!this.props.expanded)}>
					<Text style={[ styles.title ]}>{this.props.title}</Text>
					<Text style={{left:"210%", color: '#fff'}}>{this.state.data.data.tasks.length}</Text>

					<Icon
						name={this.props.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
						size={30}
						color={Colors.WHITE}
					/>
				</TouchableOpacity>
				<View style={styles.parentHr} />
				{this.props.expanded && (
					<View style={{height:(Platform.OS === 'ios') ? ((Viewport.width * Viewport.scale) === 1242)? 367: 503 : 300, backgroundColor:Colors.LIGHTBLUE}}>
                        
						<FlatList
							data={this.state.data.data.tasks}
							numColumns={1}
							scrollEnabled={true}
							renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    onPress={() => this.openModal(item)}
                                >
                                    <Card
                                        style={{}}
                                        title={item.label}
                                        backgroundColor="#fff"
                                        containerStyle={{ borderRadius: 15, borderColor: 'black' }}
                                    >
                                        <View style={styles.item}>
										<Text >{ "Geconstateerd op: " + item.deadline}</Text>
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
    
    onClick=(index)=>{
        const temp = this.state.data.slice()
        temp[index].value = !temp[index].value
        this.setState({data: temp})
      }
}

function mapDispatchToProps(dispatch){
	return {
		setActive: (expanded) => dispatch({type:'IS_ACTIVE', payload:expanded})
		
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
		backgroundColor: Colors.LIGHTGRAY,
		padding: 16
	}
});



export default connect(null,mapDispatchToProps)(AccordionNew)