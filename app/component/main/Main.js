import React, { Component } from 'react';
import { StyleSheet, View, Text  } from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.txtTitle}> MainPage </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtTitle : {
        color : 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 70,
    }

});

export default Main;
