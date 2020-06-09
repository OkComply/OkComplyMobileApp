import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Text, View, StyleSheet, Alert, TextInput, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import mapStateToProps from '../../Profile';


/**
 * @author Jay Fairouz
 *
 */
export default class ThirdPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label: ''

        }
    }
    onSave = () => {
        this.props.navigation.navigate('myTab')
    }
    render() {
        return (

            <View style={styles.taskPage}>
                <ScrollView>
                    <View>
                        <Text style={styles.textStyle}>Welke actie is er inmiddels ondernomen?:</Text>
                        <TextInput
                            style={styles.textInputExtendedStyle}
                        />

                        <Text style={styles.textStyle}>Zijn er ideeën voor verbetering?:</Text>
                        <TextInput
                            style={styles.textInputExtendedStyle}
                        />
                        
                        <Text style={styles.textStyle}>Deze melding moet opgelost zijn voor:</Text>
                        <DatePicker
                            style={styles.textInputStyle}
                            date={this.state.date}
                            onDateChange={(date) => this.setState({ date: date })}
                            confirmBtnText="Bevestig"
                            cancelBtnText="Annuleer"
                            format="DD-MM-YYYY"
                        />

                    </View>

                    <View style={styles.AllButtons}>
                        <Button style={styles.VerderButton}
                            onPress={this.onVerder}>
                            <Text style={{ color: '#fff' }}>Verder</Text>
                        </Button>
                    </View>
                </ScrollView>



            </View>


        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
        marginTop: 20,
        fontSize: 20,
        ...Platform.select({
            android: {
                fontFamily: 'italic'
            }
        }),
        marginLeft: '5%'
    },
    selecterStyle: {
        width: 200,
        height: 20
    },
    btn: {
        backgroundColor: '#33de8e'
    },
    VerderButton: {
        backgroundColor: '#33de8e',
        marginTop: '7.5%',
        marginBottom: '7.5%',
        width: '50%',
        display: 'flex',
        alignSelf: 'center'
    },
    AllButtons: {

        marginBottom: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',

    },
    textInputStyle: {
        textAlignVertical: 'top',
        marginTop: 10,
        height: 40,
        width: '90%',
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black'
    },
    textInputExtendedStyle: {
        textAlignVertical: 'top',
        marginTop: 10,
        height: 200,
        width: '90%',
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black'
    }
});
