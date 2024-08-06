import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React ,{useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from "../TodoScreem";
import Logout from '../Logout';

import AuthContext from '../../context/AuthContext';
const Tab=createBottomTabNavigator();

// const {logout}=useContext(AuthContext);


export default function BottomTabNavigator(navigation ) {
  const logout=()=>{
    console.log("logout");
    navigation.navigate('Login');
  
  }
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={TodoScreen} />
    <Tab.Screen
        name="Logout"
        component={() => <Logout navigation={navigation} />} // Pass navigation to Logout component
      />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})