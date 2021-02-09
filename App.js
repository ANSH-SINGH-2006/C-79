import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screen/WelcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {AppTabNavigator} from './Components/AppTabNavigator'
 
export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  BottomTab: {screen: AppTabNavigator}
})

const AppContainer=createAppContainer(switchNavigator)


