import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Sizes} from '../../assets/RootStyle';
import * as RootNavigation from '../../navigation/RootNavigation';
const ProfileScreen = () => {
  const {container, text, touch, text2} = styles();
  return (
    <View style={container}>
      <Text style={text}>Profile</Text>
      <TouchableOpacity
        style={touch}
        onPress={() => {
          RootNavigation.navigate('History Tasks');
        }}>
        <Text style={text2}>History tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[touch, {marginTop: Sizes.size10}]}
        onPress={() => {
          RootNavigation.navigate('History Events');
        }}>
        <Text style={text2}>History events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[touch, {marginTop: Sizes.size10}]}
        onPress={() => {
          RootNavigation.navigate('Projects');
        }}>
        <Text style={text2}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[touch, {marginTop: Sizes.size10}]}
        onPress={() => {
          RootNavigation.navigate('Login');
        }}>
        <Text style={text2}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
