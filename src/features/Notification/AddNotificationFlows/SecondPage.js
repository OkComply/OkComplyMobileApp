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
export default class SecondPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label: '',
            datumMelding: '',
            Beschrijfing: ''
           
        }
    }

    onVerder = () => {
        console.log('datum' + this.state.title);

       
        if (this.state.Beschrijfing === '') {
            alert(" 'Beschrijving' kan niet leeg zijn")
            this.props.navigation.navigate('SecondPage')
            return
        }
        else {
            this.props.navigation.navigate('ThirdPage')
        }

    }

    render() {
        return (

            <View style={styles.taskPage}>
                <ScrollView>
                    <View>
                        <Text style={styles.textStyle}>Gemeld door:</Text>
                        <View style={styles.textStyle}>
                            <RNPickerSelect
                                style={styles.textStyle}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Ilias Delwar', value: 'football' },
                                    { label: 'Jay.fairouz@hva.nl', value: 'baseball' },
                                    { label: 'Raeef.ibrahim@hva.nl', value: 'hockey' },
                                    { label: 'mickbogaard@hva.nl', value: 'hockey' }
                                ]}
                            />
                        </View>

                
                


                        <Text style={styles.textStyle}>Beschrijf waar deze melding over gaat:</Text>
                        <TextInput style={styles.textInputExtendedStyle} onChangeText={(value) => this.setState({ Beschrijfing: value })} />

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
