import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './screens/Feed';

const MenuRoutes = {
  Feed: {
    name: 'Feed',
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" size={30} color={tintColor} />
      ),
    },
  }
};

const MenuConfig = {
  initialRouteName: 'Feed',
  tabBarOptions: {
    showLabel: false,
  },
};

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);
export default MenuNavigator;
