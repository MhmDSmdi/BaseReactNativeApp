import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class NoteCard extends Component {
  render() {
    return (
      <View style = {{backgroundColor: 'grey', flex : 1, flexDirection : 'row'}}>
        <Image source = {{uri : this.props.item.imageUrl}} style = {{width : 100, height : 100, margin : 8}} />
        <View style = {{flex : 1, flexDirection : 'column'}}>
            <Text style = {{color : 'white', padding : 8, fontSize : 15}}>{this.props.item.title}</Text>
            <Text style = {{color : 'white', padding : 8, fontSize : 15}}>{this.props.item.note}</Text>
        </View>
      </View>
    );
  }
}

export default NoteCard;
