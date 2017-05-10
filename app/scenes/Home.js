import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>This is a home page</Text>
      </View>
    );
  }
}
