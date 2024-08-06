import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import AuthContext from '../context/AuthContext'; // Adjust path as needed

const Logout = () => {
//   const { logout } = useContext(AuthContext); 
  const navigation = useNavigation(); 

  const handleLogout = () => {
    logout(); // Perform logout
    navigation.navigate('Login'); // Navigate to Login screen
  };

  return (
    <View style={styles.logoutContainer}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff6347',
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Logout;
