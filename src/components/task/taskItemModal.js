import React, { Component, useState } from 'react';

import { Text, RecyclerViewBackedScrollView, View, StyleSheet, Dimensions, Modal } from 'react-native';
import { Button } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * @author Ilias Delawar
 *
 */

export default class TaskItemModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
    }
    
    closeModal(){
        this.props.closeModal()
    }

	render() {
		return (
			<View style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={this.props.closeByOverlayClick}>
                <View style={{height:'100%', width:'100%'}}>

                </View>
                </TouchableOpacity>
				<View style={{ height: '20%', width: '100%', backgroundColor: '#282828', display: 'flex' }}>
					<Button style={styles.modalButtons} onPress={ this.props.closeModalAndAddNotification}>
						<MaterialIcon name="add" size={15} color="#FFFF" />
						<Text style={{ color: 'white' }}>Melding maken</Text>
					</Button>
					<Button style={styles.modalButtons} onPress={this.props.closeModalAndGoToTaskDetail}>
						<MaterialIcon name="visibility" size={15} color="#FFFF" />
						<Text style={{ color: 'white' }}>Bekijk taak</Text>
					</Button>
					<Button style={styles.modalButtons} onPress={this.props.commentPressedHandler}>
						<MaterialIcon name="done" size={15} color="#FFFF" />
						<Text style={{ color: 'white' }}>Taak afhandelen</Text>
					</Button>

					<View
						style={{
							borderTopWidth: 1,
							borderBottomColor: 'grey',
							borderBottomWidth: 1,
							width: '93%',
							alignSelf: 'center',
							marginTop: 5
						}}
					/>
					<Button style={styles.modalButtons} onPress={this.props.closeModal}>
						<MaterialIcon name="close" size={15} color="#FFFF" />
						<Text style={{ color: 'white' }}>Annuleren</Text>
					</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	modalButtons: {
		alignSelf: 'flex-start'
	}
});
