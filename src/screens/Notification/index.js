import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

const NotificationsScreen = () => {
  const {container, text} = styles();
  return (
    <View style={container}>
      <Text style={text}>Notifications</Text>
    </View>
  );
};

export default NotificationsScreen;
