import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Button } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';


import PlaceList from '../components/PlaceList/PlaceList';

class App extends Component {
    state = {
        placeName: '',
        places: []
    };

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim === '') {
            return;
        }
        this.setState((prevState) => {
            return { places: prevState.places.concat(prevState.placeName) };
        });
    };

    placeDeletedHandler = index => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter((place, i) => {
                    return i !== index;
                })
            };
        });
    }

    render() {

        //const placesOutput = this.state.places.map((place, index) => {
        //console.log(place + ' ' + index);
        //return <ListItem key={index} placeName={place} onItemPressed={() => alert("Item pressed - ID: " + index)} />;
        //});
        return (
       
              

            <View style={styles.container}>
                <View style={styles.row1}>
                    <TextInput
                        style={styles.row1Input}
                        value={this.state.placeName}
                        placeholder="An awesome place"
                        placeholderTextColor="#d3d3d3"
                        onChangeText={this.placeNameChangedHandler}
                    />

                    <Button style={styles.row1Button} title="Add" onPress={this.placeSubmitHandler} />
                </View>
                <PlaceList
                    places={this.state.places}
                    onItemDeleted={this.placeDeletedHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter
    },
    engine: {
        position: 'absolute',
        right: 0
    },
    body: {
        backgroundColor: Colors.white
    },
    container: {
        flex: 1,
        padding: 60,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    row1: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    row1Input: {
        width: '90%',
        color: '#000000'
    },
    row1Button: {
        width: '30%'
    },
    itemArray: {
        width: '100%'
    }
});

export default App;
