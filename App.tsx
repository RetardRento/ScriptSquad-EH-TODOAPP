// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screen/Login';
import BottomTabNavigator from './src/screen/Navigations/BottomTabNavigator'; 
import StackNavigator from './src/screen/Navigations/StackNavigator';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
