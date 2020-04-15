import React, {Component} from 'react';
import {Text, RecyclerViewBackedScrollView, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import {Button} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';



/**
 * @author Ilias Delawar
 *
 */

export default class TaskDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {date: '2016-05-15'};
    }

    onAddNotification = () => {
        this.props.navigation.navigate('AddNotification')

    };

    render() {
        return (
            <View style={styles.container}>
                {/*<ScrollView>*/}
                <View>
                    <Text style={styles.labelStyle}>Beschrijf de taak voor deze maatregel</Text>
                    <TextInput
                        style={styles.inputStyle}
                    />
                </View>
                <View>
                    <Text style={styles.labelStyle}>Eindverantwoordelijke voor deze taak</Text>
                    <RNPickerSelect
                        style={{inputIOS: { backgroundColor: 'white' , margin:15, borderColor: 'grey', borderWidth: 1, height: 40}}}

						onValueChange={(value) => console.log(value)}
                        items={[
                            {label: 'Football', value: 'football'},
                            {label: 'Baseball', value: 'baseball'},
                            {label: 'Hockey', value: 'hockey'}
                        ]}
                    />
                </View>
                <View>
                    <Text style={styles.labelStyle}>Taak moet voor deze datum zijn uitgevoerd</Text>
                    <DatePicker
						style={styles.inputStyle}

						date={this.state.date}
                        onDateChange={(date) => this.setState({date: date})}
                        confirmBtnText="Bevestig"
                        cancelBtnText="Annuleer"
                        format="DD-MM-YYYY"
                    />
                </View>
                <View>
                    <Text style={styles.labelStyle}>Uivoerende van deze taak</Text>
                    <RNPickerSelect
                        // Icon={ <MaterialIcon name="person" size={25} color="#FFFF" />}

						style={{inputIOS: { backgroundColor: 'white' , margin:15, borderColor: 'grey', borderWidth: 1, height: 40}}}

						onValueChange={(value) => console.log(value)}
                        items={[
                            {label: 'Football', value: 'football'},
                            {label: 'Baseball', value: 'baseball'},
                            {label: 'Hockey', value: 'hockey'}
                        ]}
                    />
                </View>
                <View style={{display:'flex' , justifyContent:'space-between'}}>
                    <Text style={styles.labelStyle}>Bestanden toevoegen</Text>
                    <Button style={{backgroundColor:'white'}}  onPress={''}><Text style={{color:'#3BB9FF' }}>Kies foto</Text></Button>
					<View
						style={{
							borderTopWidth: 1,
							borderBottomColor: 'grey',
							borderBottomWidth: 1,
							width: '100%',
							alignSelf: 'center',
							top: 6
						}}
					/>
                    <Button onPress={this.onAddNotification}
                        style={{width: '50%', height: '17%', 		backgroundColor: '#33de8e'
							, margin:15}}
                    >
                        <MaterialIcon name="add" size={15} color="#FFFF"/>
                        <Text style={{color: '#fff', fontSize: 15}}>Melding maken</Text>
                    </Button>
                </View>
                {/*</ScrollView>*/}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between'
    },
    labelStyle: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 17
    },
    inputStyle: {

        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        margin: 15,
        marginTop: 5

    }

})
