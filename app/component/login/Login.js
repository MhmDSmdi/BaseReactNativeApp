import React, { Component } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, TextInput, Image, Button, View, Text, StyleSheet  } from 'react-native';


class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
    }

    static navigationOptions = {
        header : null,
    }

  render() {
      
    return (
        <View style = {styles.container}>
             <KeyboardAvoidingView behavior = "padding"  style = {styles.container}>
             <Image  
                style = {styles.imgLogo} 
                source={require('../../assets/login.png')}
                />

              <TextInput
                style = {styles.txtInput}
                onChangeText = {
                (typedText) => {
                    this.setState({userName: typedText})
                }    
                }
                value = {this.state.userName}
                placeholder = "Username or Email"
                returnKeyType = "next"
                placeholderTextColor = "rgba(255, 255, 255, 0.6)"
                />

              <TextInput
                style = {styles.txtInput}
                onChangeText = {
                    (typedText) => {
                        this.setState({password: typedText})
                }    
                }
                value = {this.state.password}
                placeholder = "Password"
                returnKeyType = "go"
                secureTextEntry
                placeholderTextColor = "rgba(255, 255, 255, 0.6)"
                />

                <TouchableOpacity onPress = {() => this.props.navigation.navigate('Main', {
                    user_name : this.state.userName,
                    user_password : this.state.password
                })}>
                    <Text style = {styles.loginOpacity}>Login</Text>
                
                </TouchableOpacity>

            </KeyboardAvoidingView>
         </View> 
    );
  }
}

const styles = StyleSheet.create({ 
    container : {
       backgroundColor: "#043d61",
       flex : 1,
    },
    txtInput : {
        color: "#fff",
        opacity : 0.8,
        fontWeight: 'bold',
        marginHorizontal: 25,
        padding: 10,
        marginVertical: 8,
        backgroundColor: "rgba(30, 111, 159, .2)"
    },
    loginOpacity : {
        backgroundColor: "rgba(255, 255, 255, .2)",
        fontSize: 15,
        fontWeight: 'bold',
        bottom : 0,
        color : "#fff",
        opacity:.7,
        padding : 10,
        textAlign : 'center',
        marginHorizontal : 25,
        marginVertical : 10
    },
    imgLogo : {
        width : 150,
        height : 150,
        alignSelf: 'center',
        marginTop: 25,
    }
});

export default Login;