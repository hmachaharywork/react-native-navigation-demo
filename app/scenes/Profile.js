import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return(
      <View style={{flex:1, backgroundColor: 'yellow'}}>
        <Text>This is a profile page</Text>
      </View>
    );
  }
}
