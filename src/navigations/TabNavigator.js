import React from 'react'
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Products from '../screens/Products';
import About from '../screens/About';
import Notifications from '../screens/Notifications';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // height: 100,
          borderRadius: 100,
          // paddingVertical: 10,
          paddingTop: 20,
          position: "absolute",
          backgroundColor: '#DAD4B5',
          margin: 20,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Products') {
            iconName = focused ? 'bag-check' : 'bag-check-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={32}
              color={focused ? '#800000' : '#982B1C'}
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          let labelColor = focused ? '#800000' : '#982B1C';

          return (
            <Text style={{ color: labelColor, fontSize: 12 }}>
              {route.name}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Products' component={Products} />
      <Tab.Screen name='Notifications' component={Notifications} />
      <Tab.Screen name='About' component={About} />
    </Tab.Navigator>
  );
}