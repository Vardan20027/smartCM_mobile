import React, {useState} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Sizes} from '../../assets/RootStyle';
import Calendar1Icon from '../../assets/icons/calendar1';

const NotificationsScreen = ({navigation}) => {
  const {
    container,
    content,
    text,
    img,
    selectView,
    pressable,
    pressable2,
    butText,
    butText2,
    date,
  } = styles();
  const [f, setF] = useState(3);
  return (
    <View style={container}>
      <View style={content}>
        <Text style={text}> Hello, Name</Text>
        <Image
          style={img}
          source={require('../../assets/images/HomeImg.png')}
        />
        <View style={selectView}>
          <View style={{flex: 0.333}}>
            <Pressable
              onPress={() => setF(1)}
              style={f === 1 ? pressable2 : pressable}>
              <Text style={f === 1 ? butText : butText2}>Tasks</Text>
            </Pressable>
          </View>
          <View style={{flex: 0.333}}>
            <Pressable
              onPress={() => setF(2)}
              style={f === 2 ? pressable2 : pressable}>
              <Text style={f === 2 ? butText : butText2}>Events</Text>
            </Pressable>
          </View>
          <View style={{flex: 0.333}}>
            <Pressable
              onPress={() => setF(3)}
              style={f === 3 ? pressable2 : pressable}>
              <Text style={f === 3 ? butText : butText2}>All</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: Sizes.size30,
          }}>
          <Text style={date}> 20 May 2022</Text>
          <TouchableOpacity>
            <Calendar1Icon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NotificationsScreen;
