import React, { Component } from 'react';
import {
    Switch,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../../assets/Colors';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

/**
 * @author Jay Fairouz en Ilias of Raeef
 * 
 */

const TAKEN = "In het taken scherm kun je zien wat jouw taken zijn die je nog moet oplossen. \nDe taken staan gerankschikt in 3 groepen: Nieuw, Gepland en Te Laat.\n\nAls je op een taak kaart klikt zie je een menu aan de onderkant van het scherm verschijnen. \nMet dit menu kun je ervoor kiezen om een melding over de taak te maken, de details van de taak te bekijken of om de taak af te handelen.";
const MELDINGEN = "In het meldingen scherm kun je meldingen zien die zijn gemaakt en kun je een nieuwe melding aanmaken. \nDe meldingen staan gerankschikt in 3 groepen: Nieuw, Gepland en Te Laat.\n\nAls je op een melding kaart klikt ga je naar de details van deze melding.\nJe kunt een nieuwe melding maken door op het + icoon te klikken";
const PROFIEL = 'Profiel Info';

const CONTENT = [
    {
        title: 'Taken',
        content: TAKEN,
    },
    {
        title: 'Meldingen',
        content: MELDINGEN,
    },
    {
        title: 'Profiel',
        content: PROFIEL,
    }
];

export default class InstructionManual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSections: [],
            collapsed: true,
            multipleSelect: false,
        };
    }

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };

    renderHeader = (section, _, isActive) => {
        return (
            <Animatable.View
                duration={0}
                style={[styles.header, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                <Text style={styles.headerText}>{section.title}</Text>
            </Animatable.View>
        );
    };

    renderContent(section, _, isActive) {
        return (
            <Animatable.View
                duration={0}
                style={[styles.content, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    }

    render() {
        const { multipleSelect, activeSections } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
                    <Text style={styles.title}>Informatie</Text>
                    <View style={styles.titleLine}></View>
                    <Accordion
                        activeSections={activeSections}
                        sections={CONTENT}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={multipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        duration={0}
                        onChange={this.setSections}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        textAlign: 'center',
        color: 'black'
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
    header: {
        padding: '1%'
    },
    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: '5%',
        paddingVertical: '4.5%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        color: 'black',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        marginVertical: '2.5%'
    },

    content: {
        paddingHorizontal: '5%',
        paddingVertical: '4.5%',
        backgroundColor: '#FFFFFF',
        color: 'black',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        marginBottom: '2.5%'
    },
    active: {
    },
    inactive: {
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
});