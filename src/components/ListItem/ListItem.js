import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

let data = [{
    value: 'Opgelost',
}, {
    value: 'Niet opgelost',
}];

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <Text>{props.placeName}</Text>
            <Dropdown
                label='Status'
                data={data}
            />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: 'rgba(66, 135, 245, 0.3)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        marginBottom: 5
    }
});
export default listItem;
