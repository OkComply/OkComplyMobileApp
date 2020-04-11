import React, { Component } from 'react';
import { Text, RecyclerViewBackedScrollView, View, StyleSheet, TextInput } from 'react-native';
/**
 * @author Ilias Delawar
 * 
 */

export default class TaskFilter extends Component {
	render() {
		return (
			<View style={styles.taskFilter}>
				<View style={styles.filterUitvoerders}>
					<Text style={{ marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18}}>
						Filter op Uitvoerders
					</Text>
					<TextInput
						style={{
							height: 30,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							width: '60%'
						}}
					/>
				</View>
                <View style={styles.filterUitvoerders}>
					<Text style={{ marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18}}>
						Filter op eindverantwoordelijke
					</Text>
					<TextInput
						style={{
							height: 30,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							width: '60%'
						}}
					/>
				</View>
                <View style={styles.filterUitvoerders}>
					<Text style={{ marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18}}>
						Filter op naam
					</Text>
					<TextInput
						style={{
							height: 30,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							width: '60%'
						}}
					/>
				</View>
                <View style={styles.filterUitvoerders}>
					<Text style={{ marginTop: 5, marginBottom: 5, color: 'white', fontSize: 18}}>
						Filter op label
					</Text>
					<TextInput
						style={{
							height: 30,
							borderColor: 'gray',
							borderWidth: 1,
							backgroundColor: 'white',
							width: '60%'
						}}
					/>
				</View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	taskFilter: {
		display: 'flex',
		flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
	},
	filterUitvoerders: {
		backgroundColor: '#4545ba',
        marginTop: 10,
        marginBottom: 10,
		width: '87%',
		height: '10%',
		display: 'flex',
        paddingLeft: 5,
        borderRadius:10
	}
});