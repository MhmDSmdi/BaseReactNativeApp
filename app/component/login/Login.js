import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
        <View style = {{flex : 1, backgroundColor: '#043d61',}}>
            <LoginForm style = {{}}/>
         </View> 
    );
  }
}

const styles = StyleSheet.create({
    // loginForm : {
    
    // }
});

export default Login;