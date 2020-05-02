import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Text, View, StyleSheet, Alert, } from 'react-native';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
import { ScrollView } from 'react-native-gesture-handler';
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
        return (

            <View style={styles.taskPage}>
                <Text style={styles.titleStyle}>Lamp moet vervangen worden</Text>

                <ScrollView>


                    <Card style={{ backgroundColor: 'green', color: 'red' }}

                        title={this.props.notName}
                        backgroundColor='#3BB9FF'

                    >
                        <Text style={styles.textStyle}>
                            <Text>Geconstateerd op:  <Text style={{ color: 'white' }}>xx-xx-xxxx</Text>{"\n"}</Text>
                            <Text>Melding voor: <Text style={{ color: 'white' }}>xxxx</Text>{"\n"}</Text>
                            <Text>Meldingsnummer: <Text style={{ color: 'white' }}>xx</Text>{"\n"}</Text>
                            <Text>Gemeld door: <Text style={{ color: 'white' }}>xxxx</Text>{"\n"}</Text>
                            <Text>Op: <Text style={{ color: 'white' }}>xxxxx</Text>{"\n"}</Text>
                            <Text>Beschrijving: <Text style={{ color: 'white' }}> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>{"\n"}</Text>

                        </Text>



                    </Card>

                </ScrollView>
                <View style={styles.addButton2}>

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
    taskPage: {
        display: 'flex',
        flex: 1
    },
    btn: {

        backgroundColor: '#33de8e'
    },
    titleStyle: {

        fontSize: 30,
        fontFamily: 'italic',
        color: 'black',
        width: '93%',
        left: '4%',
        marginTop: '3%'
    },
    textStyle: {

        fontSize: 20,
        fontFamily: 'italic',
        color: 'black'
    },
    sluitenbtn: {
        backgroundColor: 'red'
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
