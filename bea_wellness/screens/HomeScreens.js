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
import ImageGallery from 'react-image-gallery';


import { MonoText } from '../components/StyledText';


const data = [
  {
    imageUrl: require("../assets/images/BigCuz.jpg"),
    title: "Big Cuz"
  },
  {
    imageUrl: require("../assets/images/bigSis.jpg"),
    title: "Big Sis"
  },
  {
    imageUrl: require("../assets/images/facebook.jpeg"),
    title: "facebook"
  },
  {
    imageUrl: require("../assets/images/Jack.jpg"),
    title: "Micrososft"
  },
  {
    imageUrl: require("../assets/images/NahomSoD.jpg"),
    title: "Nahom"
  },
  {
    imageUrl: require("../assets/images/OfficerPictures.jpg"),
    title: "Officer Pics"
  },
  {
    imageUrl: require("../assets/images/SeriousNick.jpg"),
    title: "Nick"
  },
  {
    imageUrl: require("../assets/images/Shasonspeech.jpg"),
    title: "Shason"
  }
];

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: 'white',
 },
 developmentModeText: {
   marginBottom: 20,
   color: 'rgba(0,0,0,0.4)',
   fontSize: 14,
   lineHeight: 18,
   textAlign: 'center',
 },
 contentContainer: {
   paddingTop: 30,
   color: 'green'
 },
 welcomeContainer: {
   alignItems: 'center',
   marginTop: 10,
   marginBottom: 20,
 },
 welcomeImage: {
   width: 100,
   height: 80,
   resizeMode: 'contain',
   marginTop: 3,
   marginLeft: -10,
 },
 getStartedContainer: {
   flex:1,
   alignItems: 'center',
   marginHorizontal: 50,
 },
 homeScreenFilename: {
   marginVertical: 7,
 },
 codeHighlightText: {
   color: 'rgba(96,100,109, 0.8)',
 },
 codeHighlightContainer: {
   backgroundColor: 'rgba(0,0,0,0.05)',
   borderRadius: 3,
   paddingHorizontal: 4,
 },
 getStartedText: {
   fontSize: 17,
   color: 'rgba(96,100,109, 1)',
   lineHeight: 24,
   textAlign: 'center',
 },
 tabBarInfoContainer: {
   position: 'absolute',
   bottom: 0,
   left: 0,
   right: 0,
   ...Platform.select({
     ios: {
       shadowColor: 'black',
       shadowOffset: { width: 0, height: -3 },
       shadowOpacity: 0.1,
       shadowRadius: 3,
     },
     android: {
       elevation: 20,
     },
   }),
   alignItems: 'center',
   backgroundColor: '#fbfbfb',
   paddingVertical: 20,
 },
 tabBarInfoText: {
   fontSize: 17,
   color: 'rgba(96,100,109, 1)',
   textAlign: 'center',
 },
 navigationFilename: {
   marginTop: 5,
 },
 helpContainer: {
   marginTop: 15,
   alignItems: 'center',
 },
 helpLink: {
   paddingVertical: 15,
 },
 helpLinkText: {
   fontSize: 14,
   color: '#2e78b7',
   },
 });


  function DevelopmentModeNotice() {
   if (__DEV__) {
     const learnMoreButton = (
       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
         Learn more
       </Text>
     );

     return (
       <Text style={styles.developmentModeText}>
         Development mode is enabled: your app will be slower but you can use
         useful development tools. {learnMoreButton}
       </Text>
     );
   } else {
     return (
       <Text style={styles.developmentModeText}>
         You are not in development mode: your app will run at full speed.
       </Text>
     );
   }
 }

 function handleLearnMorePress() {
   WebBrowser.openBrowserAsync(
     'https://docs.expo.io/versions/latest/workflow/development-mode/'
   );
 }

  function handleHelpPress() {
   WebBrowser.openBrowserAsync(
     'https://ucdbea.com'
   );
 }

export default class HomeScreen extends Component {
  renderItem(item){
    var str =item.imageUrl;
    return(<Image style={{height: 200, width: 275}} source= {str} />);
  }
  render (){

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Image style={{height:75, width:75}} source ={require('../assets/images/logo.png')}/>
        </TouchableOpacity>
        </View>

        <View style={styles.getStartedContainer}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({item}) => this.renderItem(item)}
          // ItemSeparatorComponent={() => {
          //     return (
          //         <View
          //             style={{
          //             height: "100%",
          //             width: 20,
          //             backgroundColor: "#CED0CE",
          //             }}
          //         />
          //     );
          // }}
          keyExtractor={item=> item.title}
        />

          <View style ={{color:'black',height:20}}>

          </View>

          <Text style={styles.getStartedText}>
           Bea Mission Statement
          </Text>
        </View>

        <View style={styles.helpContainer}>
            <Text style={styles.getStartedText}>
              To be all-inclusive, to expand on the ideas of the Black community,
              and to increase the number of culturally responsible
              Black Engineers who excel academically,
              succeed professionally and positively impact the community.
            </Text>
        </View>
      </ScrollView>


    </View>
  );
}

static navigationOptions = {
  header: null
};

constructor(props){
 super(props);
 this.state = {
   data: data
 };
}


}
