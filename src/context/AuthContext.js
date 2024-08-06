import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://10.0.2.2:5000/login', { username, password });
      const { token } = response.data;

      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);

      Alert.alert('Login Successful!');
    } catch (error) {
      Alert.alert('Login Failed', error.message || 'An error occurred during login.');
      setUserToken(null);
    } finally {

    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
      Alert.alert('Logged out successfully!');
    } catch (error) {
      Alert.alert('Logout Failed', error.message || 'An error occurred during logout.');
    }
  };

  const isLoggedIn = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
    } catch (error) {
      console.error('Failed to check login status:', error.message);
    } 
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
