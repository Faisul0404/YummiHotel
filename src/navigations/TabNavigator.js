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
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            height: 90,
            borderRadius: 20,
            // marginVertical: 20,
            paddingVertical: 20,
            position: "absolute",
          },
        }}>
          <Tab.Screen 
          name='Home' 
          component={Home} 
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Ionicons name={ focused ? "home" : "home-outline"} size={30} color={"black"} />
              )
            },
          }} 
          />
          <Tab.Screen 
            name='Products'
            component={Products}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicons name={focused ? 'bag-check' : 'bag-check-outline'}size={30} color={"black"}/>
                )
              }
            }}
          />
          <Tab.Screen 
            name='Notifications'
            component={Notifications}
            options={{
              tabBarIcon: ({ focused }) => {
                return <Ionicons name={ focused ? 'notifications' : 'notifications-outline'} size={30} color={'black'} />
              }
            }}
          />
          <Tab.Screen 
            name='About'
            component={About}
            options={{
              tabBarIcon: ({ focused }) => {
                return <Ionicons name={ focused ? 'person' : 'person-outline'} size={30} color={'black'} />
              }
            }}
          />
        </Tab.Navigator>
  )
}