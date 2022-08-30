import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';
import Calendar2Icon from '../../../assets/icons/calendar2';
import {styles} from './style';
import moment from 'moment';

function Header({focused, setFocused}) {
  const currentDate = moment().format('DD MMM YYYY');
  const {container, date, icon} = styles();
  return (
    <View style={container}>
      <Text style={date}>{currentDate}</Text>
      <TouchableOpacity
        onPress={() => {
          setFocused(!focused);
        }}
        style={icon}>
        <Calendar2Icon
          iconColor1={focused ? '#F5F5F5' : '#347474'}
          iconColor2={focused ? '#347474' : '#F5F5F5'}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
