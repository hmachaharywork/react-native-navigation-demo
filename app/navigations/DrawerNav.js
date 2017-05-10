import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';
import Router from '../Router';

export default class DrawerNav extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  };


  _renderHeader = () => {
    return (
      <View style={{alignItems: 'center', height: 150, width: 280, alignSelf: 'center'}}>
        <Image
          source={require('../assets/male-user.png')}
          style={styles.header}
        />
      </View>
    );
  };

  _renderTitle = (text: string, isSelected: boolean) => {
    return (
      <Text
        style={[
          styles.buttonTitleText,
          isSelected ? styles.selectedText : null,
        ]}>
        {text}
      </Text>
    );
  };

  _renderIcon = (name: string, isSelected: boolean) => {
    let extraStyle = { marginTop: 2 };
    if (name === 'md-alert') {
      extraStyle = { ...extraStyle, marginLeft: -3 };
    }
    return (
      <SimpleLineIcons
        style={[
          styles.icon,
          isSelected ? styles.selectedText : null,
          extraStyle,
        ]}
        name={name}
        size={24}
      />
    );
  };

  render() {
    return (
      <DrawerNavigation
        drawerPosition="left"
        renderHeader={this._renderHeader}
        drawerWidth={280}
        initialItem="home">
        <DrawerNavigationItem
          id="home"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Mobile', isSelected)}
          renderIcon={isSelected => this._renderIcon('home', isSelected)}>
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('home')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="about"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Laptop', isSelected)}
          renderIcon={isSelected => this._renderIcon('info', isSelected)}>
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    height: 80,
    width: 80,
    resizeMode: 'cover',
  },
  buttonTitleText: {
    color: '#222',
    fontWeight: 'bold',
    marginLeft: 18,
  },
  icon: {
    color: '#999',
  },
  selectedText: {
    color: '#0084FF',
    fontSize: 22,
    fontWeight: 'normal',
  },
  selectedItemStyle: {
    backgroundColor: '#E8E8E8',
  },
});
