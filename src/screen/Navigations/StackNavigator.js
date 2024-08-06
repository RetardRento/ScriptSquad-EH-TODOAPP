import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from '../Registration';
import LoginScreen from '../Login';


const Stack=createStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name='Login' component={LoginScreen}/>
    <Stack.Screen name='Register' component={RegistrationScreen}/>
  </Stack.Navigator>
  )
}

export default StackNavigator