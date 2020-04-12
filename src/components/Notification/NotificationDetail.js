import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Text,View, StyleSheet, Alert, } from 'react-native';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';

export default class NotificationDetail extends Component {
	constructor(props) {
        super(props)
        this.state = {
            items:[]
        }
    }


onSlideRight = () => {
	this.props.navigation.navigate('myTab')
  
  };
	render() {
		return (
			
			<View style={styles.taskPage}>
		
		<Card style= {{backgroundColor:'green', color:'red'}}

title={this.props.notName}
  backgroundColor='white'

>
	 <Text style= {styles.textStyle}>Melding voor: Licht</Text>
	 <Text style= {styles.textStyle}>Meldingsnummer: 2</Text>
	 <Text style= {styles.textStyle}>Geconstateerd op:  12-03-2020</Text>
	 <Text style= {styles.textStyle}>Gemeld door: ilias.delawar@hva.nl</Text>
	 <Text style= {styles.textStyle}>Eind verantwoordelijk: ilias.delawar@hva.nl</Text>
	 <Text style= {styles.textStyle}>Tijdstip melding: 14:22:01</Text>
	 <Text style= {styles.textStyle}>Moet opgelost binnen aantal dagen: 3</Text>
	 <Text style= {styles.textStyle}>Bestanden toevoegen : Klik hier om een bestand te selecteren</Text>
	

	 
<Button style={styles.btn}
onPress={this.onSlideRight}
>
<Text  style={{color:'#fff',fontSize:20}}>Opgelost</Text>
	</Button>
	<View>
          <RNSlidingButton
            style={styles.sluitenbtn}

            height={50}

            onSlidingSuccess={this.onSlideRight}
            slideDirection={SlideDirection.RIGHT}>
            <View>
              <Text  style={{color:'#fff', fontSize: 20,left:125, alignItems:'center'}}>
               SLUITEN >>>
    </Text>  

            </View>
          </RNSlidingButton>
        </View>

</Card>
			

			</View>
			
		);
	}
}
const styles = StyleSheet.create({
	btn: {
		
		 backgroundColor: '#33de8e'
	},
	textStyle: {
		
		fontSize: 20,
		fontFamily:'italic'
		
	},
	sluitenbtn: {
backgroundColor:'red'
	}
});
