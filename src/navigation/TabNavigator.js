import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import NotificationsScreen from '../screens/Notification';
import ActivityScreen from '../screens/Activity';
import ProfileScreen from '../screens/Profile';
import TabBar from '../components/TabBar/tabBar';
import AddButton from '../components/AddButton/AddButton';
import CreateTask from '../screens/CreateTask';
import CreateEvent from '../screens/CreateEvent';
import BookLeave from '../screens/BookLeave';
import UpdateTask from '../screens/UpdateTask';

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
        <Tab.Screen name="CreateTask" component={CreateTask} />
        <Tab.Screen name="UpdateTask" component={UpdateTask} />
        <Tab.Screen name="CreateEvent" component={CreateEvent} />
        <Tab.Screen name="BookLeave" component={BookLeave} />
      </Tab.Navigator>
    </>
  );
}
