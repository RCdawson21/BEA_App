import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'beige'

    }
})
export default class CalendarScreen extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(

      <View style= {styles.container}>
      <Image source={require('../assets/images/logo.png')}
      <View style={{flexDirection:'row'}}>

        <Text>
            Yo was happenin
        </Text>
        <Text> Yo was up</Text>
        </View>
      </View>

    );
  }
}
