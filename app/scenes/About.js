import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import TabNav from '../navigations/TabNav';

export default class About extends Component {
  static route = {
    navigationBar: {
      title: 'Laptop',
      tintColor: '#ffffff',
      backgroundColor: '#22313F',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a About page</Text>
        <TabNav />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
