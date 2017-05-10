import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigation, TabNavigation, TabNavigationItem } from '@expo/ex-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';
import Router from '../Router';

function getColor(isSelected) {
  return isSelected ? '#ffffff' : '#606363';
}

export default class TabNav extends Component {
  static route = {
    navigationBar: {
      title: 'Mobile',
      tintColor: '#ffffff',
      backgroundColor: '#22313F',
    }
  }

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="home"
        tabBarColor="#22313F"
        tabBarStyle={{
          borderWidth: 1,
          borderTopColor: '#22313F'
        }}>

        <TabNavigationItem id="home" title="Home"
          renderTitle={this._renderTitle}
          renderIcon={(isSelected) => <SimpleLineIcons
            name="home"
            size={22}
            color={getColor(isSelected)}
          />}>
          <StackNavigation id="home" navigatorUID="home"
            initialRoute={Router.getRoute('homeScreen')}/>
        </TabNavigationItem>

        <TabNavigationItem id="profile" title="Profile"
          renderTitle={this._renderTitle}
          renderIcon={(isSelected) => <SimpleLineIcons
            name="user"
            size={22}
            color={getColor(isSelected)}
          />}>
          <StackNavigation id="profile" navigatorUID="profile"
            initialRoute={Router.getRoute('profile')}/>
        </TabNavigationItem>

        <TabNavigationItem id="notification" title="Notification"
          renderTitle={this._renderTitle}
          renderIcon={(isSelected) => <SimpleLineIcons
            name="bell"
            size={22}
            color={getColor(isSelected)}
          />}>
            <StackNavigation id="notification" navigatorUID="notification"
              initialRoute={Router.getRoute('notification')}/>
        </TabNavigationItem>

      </TabNavigation>
    );
  }

  _renderTitle = (isSelected, title) => {
    return (
      <Text style={{ color: getColor(isSelected), fontSize: 10 }}>
        {title}
      </Text>
    );
  };
}
