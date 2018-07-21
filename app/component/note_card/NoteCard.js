import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class NoteCard extends Component {
  render() {
    return (
      <View style = {{backgroundColor: '#043d61', flex : 1, flexDirection : 'row'}}>
        <Image source = {{uri : this.props.item.imageUrl}} style = {{width : 100, height : 100, margin : 8}} />
        <View style = {{flex : 1, flexDirection : 'column'}}>
            <Text style = {styles.txtTitle}>{this.props.item.title}</Text>
            <Text 
                style = {styles.txtNote}
                numberOfLines = {3} 
                ellipsizeMode = 'tail'>
                {this.props.item.note}
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txtTitle : {
    color : 'white',
    padding : 2,
    fontSize : 18,
    fontWeight : 'bold',
    opacity : 0.8
  },
  txtNote : {
    color : 'white',
    padding : 2,
    fontSize : 15,
    opacity : 0.6,
    marginRight : 4,
  }
}); 

export default NoteCard;
