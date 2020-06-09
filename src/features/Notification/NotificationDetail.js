import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Text, View, StyleSheet, Alert, } from 'react-native';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
import DatePicker from 'react-native-datepicker';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { FONT_SIZE } from '../../style/Style';
import { black } from 'color-name';
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
                <View style={styles.titleLine}></View>

                <ScrollView>{/*
                    <Card style={{}}
                        title={this.props.notName}
                        backgroundColor='#3BB9FF'
                    >*/}
                    <View style={styles.containerStyle}>
                        <View>
                            <Text style={styles.textStyle}>Melding voor: <Text style={{ color: 'black' }}>{item.label}</Text>{"\n"}</Text>
                            <Text style={styles.textStyle}>Meldingsnummer: <Text style={{ color: 'black' }}>{item.reportNumber}</Text>{"\n"}</Text>
                            <Text style={styles.textStyle}>Geconstateerd op:  <Text style={{ color: 'black', fontSize: 14 }}>{item.reportedAt.substring(0, 10)}</Text>{"\n"}</Text>
                            <Text style={styles.textStyle}>Gemeld door: <Text style={{ color: 'black' }}>{item.reporter.name}</Text>{"\n"}</Text>
                            <Text style={styles.textStyle}>Beschrijving:  <Text style={{ color: 'black', fontSize: 14 }}>{item.situation}</Text>{"\n"}</Text>
                        </View>
                    </View>
                    {/*</Card>*/}

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
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        width: '93%',
        left: '4%',
        marginTop: '3%'
    },
    titleLine: {
        borderTopWidth: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '93%',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    textStyle: {
        fontSize: 20,
        color: 'grey',
        marginHorizontal: '2.5%',
        marginTop: '2.5%'
    },
    containerStyle: {
        backgroundColor: '#FFFFFF', //3BB9FF
        borderColor: 'grey',
        borderWidth: 1.5,
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center'
    },
    inputStyle: {
        top: '6%',
        right: '300%'
    },
    addButton: {
        backgroundColor: '#33de8e',
        marginLeft: '5%',
        width: '95%',
        display: 'flex',
        borderRadius: 100
    },
    bothButtons: {
        marginTop: '5%',
        marginBottom: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    selecterStyle: {
        width: "40%",
        height: 200,
        backgroundColor: 'white'
    },
    flexElement: {
        marginBottom: '3%',
        flexDirection: 'row'
    }
});
