import React,{ useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
export default function TodoScreen() {
  const dummyData = [
    { id: '01', title: 'wash car' },
    { id: '02', title: 'ride car' },
    { id: '03', title: 'wash car' },
    { id: '04', title: 'ride car' },
  ];
  
  const renderTodos = ({item}) => {
    return (
      <View style={styles.card}>
        <Text>{item.title}</Text>
      </View>
    )
  }
  const [numColumns, setNumColumns] = useState(2);
  return (
    <View style={{ marginHorizontal: 16 }}>
      {/* <Text style={{ textAlign: 'center' }}>TodoScreen</Text> */}
      <TextInput
        style={{
          borderColor: '#1e90ff',
          borderWidth: 2,
          borderRadius: 8,
          paddingHorizontal: 14,
          textAlign: 'center', // Center the text in the TextInput
        }}
        placeholder='Enter Your Todo Here'
      />
      <TouchableOpacity
        style={{ borderRadius: 8, paddingVertical: 8, backgroundColor: '#1e90ff', alignItems: 'center', marginTop: 24 }}
      >
        <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Add</Text>
      </TouchableOpacity>
      <View>
      {numColumns === 1 ? (
        <FlatList
          data={dummyData}
          renderItem={renderTodos}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <FlatList
          data={dummyData}
          renderItem={renderTodos}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#1e90ff',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 14,
    textAlign: 'center', // Center the text in the TextInput
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: (width - 32) / 2, // Adjust width for two columns
  },
});