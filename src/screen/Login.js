// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import BottomTabNavigator from './Navigations/BottomTabNavigator';
import * as Keychain from 'react-native-keychain';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('ajaaa');
  const [password, setPassword] = useState('aaaa');

  const handleLogin = async () => {
    try {
      axios.post('http://10.0.2.2:5000/login', { username, password });
      alert('Login Successful!');
      navigation.navigate('BottomTabNavigator');
    } catch (error) {
      alert('Login Failed');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      {/* <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      /> */}
      <View style={{flexDirection:'row',marginTop:20}}>
      <Text style={{color:'black'}}>Don't have an account ?</Text>
      <TouchableOpacity>
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Register</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color:'blue'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color:'black'
  },
  link:{
    color:"blue"
  }
});

export default LoginScreen;
