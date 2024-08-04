/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigations/StackNavigator';

enableScreens();
function App() {
  return (
   <NavigationContainer>
      <StackNavigator />
   </NavigationContainer>
  )
}

export default App;

