import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Foam = ({navigation,route}) => {

    console.log('>>>', route?.params?.length)
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handlesubmit = async() =>{
    const appendData = {
        body: description,
        id : route?.params?.length + 1,
        title: title,
        userId: route?.params?.length + 1
    }
    console.log('appendData>>>>',[...route?.params, appendData])
    try {
        await AsyncStorage.setItem('@Form_list', JSON.stringify([...route?.params,appendData]));
        setTitle('');
        setDescription('');
      } catch (e) {
        console.log('error', e);
      }
  }

  return (
    <View>
      <Text
        style={{
          color: 'brown',
          fontSize: 50,
          marginTop: 80,
          textAlign: 'center',
        }}>
        Add Data in list
      </Text>

      <View style={{marginTop: 50}}>
        <TextInput
        value= {title}
          style={styles.input}
          placeholder="Add title"
          placeholderTextColor="#888"
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={text => setTitle(text)}></TextInput>
        <TextInput
        value={description}
          style={styles.input}
          placeholder="Add discription"
          placeholderTextColor="#888"
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={text => setDescription(text)}></TextInput>
      </View>

      <TouchableOpacity
        style={styles.button}
          onPress={() => handlesubmit()}
      >
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Foam;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'brown',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    marginLeft: 30,
  },
});
