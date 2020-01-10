import React from 'react';

import {TouchableOpacity, View, Text} from 'react-native''

const styles= StyleSheet.create({
  calaendarbox:{
    flex:1,
    height:65,
    borderRightWidth: 2 px,
    borderLeftWidth: 2 px,
    borderTopWidth: 2 px,
    borderBottomWidth: 2 px,
  }
})

export default function January(props){

  return(
   <View style={{flexDirection:'row',flex:1}}>
    <View style={{flex:1, height: 20}}>
      <TouchableOpacity>
        <Text> Sunday </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text> Monday</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text> Tuesday </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text> Wednesday</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text> Thursday </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text> Friday </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text> Saturday </Text>
     </View>
    </View>
  )
}

function iJanuary(date){

  return(
   </ January>
}

function makeMonth(date){
   return ({
     var i =0;
   while(i<30){
     <View style={{flex:1, height:65}}>
     while(i%5!=0){
      <TouchableOpacity>
        <Text> {date} <Text>
      </TouchableOpacity>
    }

   }
 }
