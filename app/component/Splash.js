import React, { Component } from 'react';
import {Image, StyleSheet, View, Text, } from 'react-native';

class Splash extends Component {
  render() {
    return (
      <View style = {styles.mainPage}>
         <View style = {styles.txtView}>
            <Image  
                styly = {styles.imgLogo} 
                source={require('../assets/react.png')}/>
            <Text style = {styles.txtTitle}>React-Native</Text>
            <Text style = {styles.txtBody}>Simple Application for Test and Training</Text>
         </View>
      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
    mainPage : {
        backgroundColor: "#043d61",
        flex: 1,
    },
    txtTitle : {
        fontSize: 25,
        fontWeight: 'bold',
        color : "#5edbef",
        opacity : 0.7
    },
    txtBody : {
        fontSize: 14,
        color : "#45b5c7",
        marginTop: 2,
        opacity : 0.6
    },
    txtView : {
      flex : 0.8,
      alignItems : 'center',
      justifyContent: 'center',
    },
    imgLogo : {
      width : 20,
      height : 20, 
    }

});