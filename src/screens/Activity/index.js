import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

const ActivityScreen = () => {
  const {container, text} = styles();
  return (
    <View style={container}>
      <Text style={text}>My Activties</Text>
    </View>
  );
};

export default ActivityScreen;
