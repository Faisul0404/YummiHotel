import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Products from '../screens/Products';
import Home from '../screens/Home';
import About from '../screens/About';
import Details from '../screens/Details';
import Notifications from '../screens/Notifications';
import TabNavigator from './TabNavigator';
import SectionTwoDetailsView from '../screens/SectionTwoDetailsView';



const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Welcome" >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Products' component={Products} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='Detail' component={Details} />
        <Stack.Screen name='Notification' component={Notifications} />
        <Stack.Screen name='TabNavigator' component={TabNavigator} />
        <Stack.Screen name='SectionTwoDetails' component={SectionTwoDetailsView} />
    </Stack.Navigator>
  )
}

export default StackNavigator;