import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Product, About} from '../screens';
import {BottomTabNavigation} from '../components';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTabNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Product" component={Product} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
