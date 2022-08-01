import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import NotificationsScreen from '../screens/Notification';
import {Sizes} from '../assets/RootStyle';
import {Image, View} from 'react-native';
import ActivityScreen from '../screens/Activity';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: Sizes.size10,
          bottom: Sizes.size2,
          right: Sizes.size10,
          elevation: 0,
          backgroundColor: '#347474',
          borderRadius: Sizes.size24,
          height: Sizes.size70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={
                  focused
                    ? require('../assets/images/Home.png')
                    : require('../assets/images/home2.png')
                }
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={
                  focused
                    ? require('../assets/images/Notification.png')
                    : require('../assets/images/notification2.png')
                }
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={
                  focused
                    ? require('../assets/images/Activity.png')
                    : require('../assets/images/activity2.png')
                }
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={
                  focused
                    ? require('../assets/images/Profile.png')
                    : require('../assets/images/profile2.png')
                }
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
