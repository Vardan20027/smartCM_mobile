import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import NotificationsScreen from '../screens/Notification';
import ActivityScreen from '../screens/Activity';
import ProfileScreen from '../screens/Profile';
import TabBar from '../components/TabBar/tabBar';
import PlusIcon from '../assets/icons/plusIcon';
import AddButton from '../components/AddButton/AddButton';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <AddButton />
    </>
  );
}
