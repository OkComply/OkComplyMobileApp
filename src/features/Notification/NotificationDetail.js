import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Text, View, StyleSheet, Alert, } from 'react-native';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
import DatePicker from 'react-native-datepicker';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { FONT_SIZE } from '../../style/Style';
/**
 * @author Raeef Ibrahim & Jay Fairouz
 * 
 */
export default class NotificationDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    onSlideRight = () => {
        this.props.navigation.navigate('myTab')

    };
    render() {
        const item = this.props.route.params.item;

        return (

            <View style={styles.notificationDetailPage}>
                <Text style={styles.titleStyle}>{item.label}</Text>

                <ScrollView>
                    <Card style={{}}
                        title={this.props.notName}
                        backgroundColor='#3BB9FF'
                    >
                        <View>
                            <View style={styles.flexElement}>
        <Text style={styles.textStyle}>Geconstateerd op:  <Text style={{ color: 'white',fontSize:14 }}>{item.reportedAt}</Text>{"\n"}</Text>
                                <DatePicker
                                    style={styles.inputStyle}
                                    date={item.reportedAt}
                                    onDateChange={(date) => this.setState({ date: date })}
                                    confirmBtnText="Bevestig"
                                    cancelBtnText="Annuleer"
                                    format="DD-MM-YYYY"
                                />
                            </View>

        <Text style={styles.textStyle}>Melding voor: <Text style={{ color: 'white' }}>{item.label}</Text>{"\n"}</Text>
        <Text style={styles.textStyle}>Meldingsnummer: <Text style={{ color: 'white' }}>{item.reportNumber}</Text>{"\n"}</Text>
        <Text style={styles.textStyle}>Gemeld door: <Text style={{ color: 'white' }}>{item.reporter.name}</Text>{"\n"}</Text>
        <Text style={styles.textStyle}>Beschrijving: <Text style={{ color: 'white' }}> {item.situation}</Text>{"\n"}</Text>

                        </View>
                    </Card>

                </ScrollView>
                <View style={styles.bothButtons}>

                    <View>
                        <Button style={styles.addButton}
                            onPress={this.onSlideRight}>
                            <Text style={{ color: '#fff' }}>Zet in mijn taken</Text>
                        </Button>
                    </View>
                    <View>
                        <Button style={styles.addButton}
                            onPress={this.onSlideRight}>
                            <Text style={{ color: '#fff' }}>Geef taak door</Text>
                        </Button>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    notificationDetailPage: {
        display: 'flex',
        flex: 1
    },
    titleStyle: {

        fontSize: 30,
        color: 'black',
        width: '93%',
        left: '4%',
        marginTop: '3%'
    },
    textStyle: {
        fontSize: 20,
        
        color: 'black'
    },
    inputStyle:{
top:'6%',
right:'300%',

    },
    addButton: {
        backgroundColor: '#33de8e',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: '5%',
        width: '95%',
        height:'25%',
        display: 'flex',
        borderRadius: 100
    },
    bothButtons: {

        marginBottom: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',

    },
    selecterStyle: {
        width: "40%",
        height: 200,
        backgroundColor: 'white'
    },
    flexElement: {

        marginBottom: '3%',
        flexDirection: 'row',

    }
});
