import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Text, View, StyleSheet, Alert, TextInput, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

/**
 * @author Raeef Ibrahim & Jay Fairouz
 *
 */
export default class FirstPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label: ''

        }
    }

    onVerder = () => {
        this.props.navigation.navigate('SecondPage')
    }

    render() {
        return (

            <View style={styles.taskPage}>
                <ScrollView>
                    <View>
                        <Image
                            style={{
                                marginTop: 10, width: 200, height: 200, alignSelf: 'center', borderColor: 'gray', borderWidth: 1,
                            }}
                            resizeMode="contain"
                            source={{ uri: 'https://hmtklep.nl/wp-content/uploads/2017/03/photo-video-slr-camera-icon-512x512-pixel-12-300x300.png' }}
                        />

                        <Text style={styles.textStyle}>Titel:</Text>
                        <TextInput
                            style={styles.textInputStyle}
                        />

                        <Text style={styles.textStyle}>Geconstateerd op:</Text>
                        <DatePicker
                            style={styles.textInputStyle}
                            date={this.state.date}
                            onDateChange={(date) => this.setState({ date: date })}
                            confirmBtnText="Bevestig"
                            cancelBtnText="Annuleer"
                            format="DD-MM-YYYY"
                        />

                        <Text style={styles.textStyle}>Documenten:</Text>
                        <TextInput
                            style={styles.textInputStyle}
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
        marginTop: 30,
        marginBottom: 20,
        width: '25%',
        display: 'flex',
        borderRadius: 100,
        alignSelf: 'center'


    },
    AllButtons: {

        marginBottom: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',

    },
    textInputStyle: {
        marginTop: 10,
        height: 40,
        width: '90%',
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black'
    }
});
