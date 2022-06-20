/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-vector-icons/Ionicons';

export class Login extends Component {
  render() {
    return (
        <View>
        <Icon name="person-circle-outline" size={100} color="white" />
      </View>
    );
  }
}

export default Login;
