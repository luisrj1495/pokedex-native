import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Stack from '../navigator/stack';
import Search from './searchStack';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856d6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 20 : 0,
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderWidth: 0,
          elevation: 0,
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Pokemons',
          tabBarIcon: ({color}) => (
            <Icon size={20} color={color} name="list-outline" />
          ),
        }}
        component={Stack}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({color}) => (
            <Icon size={20} color={color} name="search-outline" />
          ),
        }}
        component={Search}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
