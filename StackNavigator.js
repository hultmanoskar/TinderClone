import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import useAuth from './hooks/useAuth';
import ModalScreen from './screens/ModalScreen';

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
const { user } = useAuth();
console.log({user});
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {user ? (
            <>
            <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal"}} >
              <Stack.Screen name='Modal' component={ModalScreen} />
            </Stack.Group>
        </>
        ) : (
        <Stack.Screen name="Signup" component={SignupScreen} />
        )}
      </Stack.Navigator>
    
  )
}

export default StackNavigator

const styles = StyleSheet.create({

})