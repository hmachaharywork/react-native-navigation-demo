import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Notification extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return(
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Text>This is a Notification page</Text>
      </View>
    );
  }
}
