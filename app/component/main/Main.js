import React, { Component } from 'react';
import { StyleSheet, View, Text , ToolbarAndroid, FlatList } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import noteListData from '../../data/noteListData';
// import Note from '../../data/Note'
import NoteCardComponent from '../note_card/NoteCard';

class Home extends Component {
  render() {

    const userName = this.props.navigation.getParam('user_name', 'Unkown');
    const password = this.props.navigation.getParam('user_password', '00000000');
   
    return (
      <View style = {styles.homeContainer}>
        {/* <Text style = {styles.txtTitle}> HomePage </Text>
        <Text style = {styles.txtDescription}> userName : {userName} </Text>
        <Text style = {styles.txtDescription}> password : {password} </Text> */}
        <FlatList data = {noteListData}
          renderItem = {({item, index}) => {
              return(
                <NoteCardComponent item={item} index={index}>
                </NoteCardComponent>
              );
          }} />
      </View>
    );
  }
}

class Setting extends Component {
  render() {
    return (
      <View style =   {styles.settingContainer}>
        <Text style = {styles.txtTitle}> SettingPage </Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: {screen : Home,
    navigationOptions :{
      tabBarLabel : 'Home'
    }
  },
  Setting : {screen : Setting,
    navigationOptions :{
      tabBarLabel : 'Setting'
  }
}
}, { //router config
  initialRouteName : 'Home',
  order : ['Home', 'Setting'],
  //navigation for complete tab
  navigationOptions : {
    tabBarVisible : true
  }, tabBarOptions :{
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
  }
});

const styles = StyleSheet.create({

    homeContainer : {
        flex: 1,
        
    },
    toolbar : {
      height : 70,
      backgroundColor: 'red',
    },
    settingContainer : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
    txtTitle : {
        color : 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 70,
    },
    txtDescription : {
      color : 'blue',
      fontSize: 15,
      opacity : 0.6
    }

});
