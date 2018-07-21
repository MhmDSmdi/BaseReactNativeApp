import React, { Component } from 'react';
import { View, Text, Image, StyleSheet , Alert} from 'react-native';
import Swipeout from 'react-native-swipeout';

class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey : null,
    };
  }
  render() {
    const swipeSetting = {
      autoClose : true, 
      onClose: (secId, rowId, direction) => {
        this.setState({ activeRowKey : null});
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowKey : this.props.item.key });
      },
      right : [
        {
          onPress : () => {
            Alert.alert (
              'Alert',
              'Are yous sure you want to delete this card?',
              [
                {text : 'No', onPress : () => {}, style : 'cancel'},
                {text : 'Yes', onPress : () => {this.props.deleteCard()}, style : 'default'}
              ],
              {cancelable : true}
            );
          },
          text : 'Delete', type : 'delete'
        }
      ],
        rowId : this.props.index,
        sectionId: 1
    };
    
    return (
     <Swipeout {...swipeSetting}>
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
     </Swipeout>
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
