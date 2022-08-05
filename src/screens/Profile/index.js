import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

const ProfileScreen = () => {
  const {container, text} = styles();
  return (
    <View style={container}>
      <Text style={text}>Profile</Text>
    </View>
  );
};

export default ProfileScreen;
