import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Foam from './Screens/Foam';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Login'  screenOptions={{
    headerShown: false
  }} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Foam" component={Foam} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;