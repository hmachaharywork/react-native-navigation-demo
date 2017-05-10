import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { NavigationProvider } from '@expo/ex-navigation';
import Router from './app/Router';
import TabNav from './app/navigations/TabNav';
import DrawerNav from './app/navigations/DrawerNav';

const extraTopMargin = Platform.OS === "ios" ? 20 : 0;

export default class App extends Component {

  render() {
    return (
      <NavigationProvider router={Router}>
          <DrawerNav />
      </NavigationProvider>
    );
  }


}

Expo.registerRootComponent(App);
