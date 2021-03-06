import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login'
import SignUp from './SIgnUp';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
export default function App() {
  return (
<NavigationContainer>

<Stack.Navigator  >
      <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
    </Stack.Navigator>
</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
