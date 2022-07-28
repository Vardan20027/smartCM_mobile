import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import StackNav from '../../navigation/StackNavigator';

const MainScreen = () => {
  return <StackNav />;
};

export default MainScreen;
