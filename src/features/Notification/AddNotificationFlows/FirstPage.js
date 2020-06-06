import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Text, View, StyleSheet, Alert, TextInput,Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

/**
 * @author Raeef Ibrahim
 *
 */
export default class FirstPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label: '',
            value: 'hi'

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
                        <TouchableOpacity>
                        <Image
                            style={{
                                marginTop: 10, width: "58%", height:220, alignSelf: 'center',
                            }}
                            
                            source={{ uri: 'https://www.kindpng.com/picc/b/244/2446316.png' }}
                        />
</TouchableOpacity>
                        <Text style={styles.textStyle}>Melding gaat over:</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="Schrijf waar het over gaat"
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

                        <Text style={styles.textStyle}> Eindverantwoordelijke voor deze melding:</Text>
                        <View style={styles.textStyle}>
                            <RNPickerSelect
                                style={styles.textStyle}
                                onValueChange={(value) => console.log(value)}
                                placeholder={{
                                    label: 'Selecteer eindverantwoordelijkheden...',
                                    value: null,
                                }}
                                items={[
                                    { label: 'Ilias Delwar', value: 'football' },
                                    { label: 'Jay.fairouz@hva.nl', value: 'baseball' },
                                    { label: 'Raeef.ibrahim@hva.nl', value: 'hockey' },
                                    { label: 'mickbogaard@hva.nl', value: 'hockey' }
                                ]}
                            />
                        </View>

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
        marginTop: 40,
        marginBottom: 30,
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
        marginTop: 10,
        height: 45,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
        color: 'black'
    }
});
