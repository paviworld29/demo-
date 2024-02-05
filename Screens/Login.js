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

const Login = ({navigation}) => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  console.log(username, password);

  console.log('user', user?.username);

  useEffect(() => {
    storeData();
    retrieveData();
  }, []);

  const storeData = async () => {
    try {
      const userData = {
        username: 'paviworld',
        password: 'pavi@123',
      };
      await AsyncStorage.setItem('@My_store', JSON.stringify(userData));
    } catch (e) {
      console.log('error', e);
    }
  };

  const retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem('@My_store');
      if (data !== null) {
        setUser(JSON.parse(data));
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };

  const handlePressLogin = () => {
    if (username !== user?.username && password !== user?.password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid Details');
    }
  };

  return (
    <View>
      <Text
        style={{
          color: 'blue',
          fontSize: 50,
          marginTop: 80,
          textAlign: 'center',
        }}>
        Login
      </Text>

      <View style={{marginTop: 50}}>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          placeholderTextColor="#888"
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={text => setUsername(text)}></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#888"
          keyboardType="default"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}></TextInput>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePressLogin()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
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
