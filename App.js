/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SplashScreen from './app/component/Splash';
import LoginScreen from './app/component/login/Login';
import MainScreen from './app/component/main/Main';

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

 const AppStackNavigator = createStackNavigator({
   Login : LoginScreen,
   Splash : SplashScreen,
   Main : MainScreen,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
