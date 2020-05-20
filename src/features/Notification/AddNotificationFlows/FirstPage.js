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
export default class AddNotification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label: ''

        }
    }
    onSave = () => {
        this.props.navigation.navigate('myTab')
    }

    onVerder = () => {
        this.props.navigation.navigate('AddNotification')
    }

    render() {
        return (

            <View style={styles.taskPage}>
                <ScrollView>
                    <View>
                        <Image
                            style={{
                                width: 200, height: 200, alignSelf: 'center', borderColor: 'gray', borderWidth: 1,
                            }}
                            resizeMode="contain"
                            source={{ uri: 'https://hmtklep.nl/wp-content/uploads/2017/03/photo-video-slr-camera-icon-512x512-pixel-12-300x300.png' }}
                        />

                        <Text style={styles.textStyle}>Titel:</Text>

                        <Card>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    backgroundColor: 'white',
                                    color: 'black'
                                }}
                            />
                        </Card>

                        <Text style={styles.textStyle}>Meldingsnummer:</Text>

                        <Card>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    backgroundColor: 'white',
                                    color: 'black'
                                }}
                            />
                        </Card>

                        <Text style={styles.textStyle}>Werknemer:</Text>

                        <Card>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    backgroundColor: 'white',
                                    color: 'black'
                                }}
                            />
                        </Card>
                    </View>
                </ScrollView>

                <View style={styles.addButton2}>

                    <View>
                        <Button style={styles.addButton}
                            onPress={this.onVerder}>
                            <Text style={{ color: '#fff' }}>Verder</Text>
                        </Button>
                    </View>
                </View>

            </View>


        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
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
    addButton: {
        backgroundColor: '#33de8e',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: '5%',
        width: '95%',
        display: 'flex',
        borderRadius: 100


    },
    addButton2: {

        marginBottom: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',

    }
});
