import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotScreen from '../screens/Forgot';
import TabNav from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Forgot"
          component={ForgotScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Tab"
          component={TabNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
