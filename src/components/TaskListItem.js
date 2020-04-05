import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listItem = (props) => (
	<TouchableOpacity onPress={props.onItemPressed}>
		<View style={styles.listItem}>
			<Text>{props.taskName}</Text>
			<Text>{props.daysToExpire}</Text>
			<View
					style={{
						borderBottomColor: '#F2F3F4',
						borderBottomWidth: 1,
						width: '100%',
						alignSelf: 'center'
					}}
				/>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		backgroundColor: '#CACFD2',
		marginBottom: 5,
		display:'flex',
		alignItems:'center',
	}
});
export default listItem;
