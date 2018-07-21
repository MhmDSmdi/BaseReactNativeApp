import React, { Component } from 'react';
import { StyleSheet, View, Text , ToolbarAndroid, FlatList , ToastAndroid} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import noteListData from '../../data/noteListData';
// import Note from '../../data/Note'
import NoteCardComponent from '../note_card/NoteCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteRowKey : null
    }
  }

  refreshFlatList = (deleteKey) => {
    this.setState( (prevState) => {
      return {
        deleteRowKey : deleteKey
      };
    });
  }
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
                <NoteCardComponent 
                  deleteCard = {() => {
                    noteListData.splice(index, 1);
                    ToastAndroid.show(noteListData.length + "  *", ToastAndroid.LONG);
                    this.refreshFlatList(item.key);
                  }} 
                  item={item}
                  index={index}
                  parentFlatList = {this}>
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
