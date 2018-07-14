/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Splash from './app/component/Splash';
import Login from './app/component/login/Login';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Splash/> */}
        <Login style = {{}}/>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
