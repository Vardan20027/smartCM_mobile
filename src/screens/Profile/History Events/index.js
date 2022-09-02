import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import VictoryTasks from '../Victory/VictoryTasks';
import {Fonts, Sizes} from '../../../assets/RootStyle';

import {EventStyles} from '../../../components/Home/Events/style';

function HistoryEvents(props) {
  const DATA = [
    {
      id: 0,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 19, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 1,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 25, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 2,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 2, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 3,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 11, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 4,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 30, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 5,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 14, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 6,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 24, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 7,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 29, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 8,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 26, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 9,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 27, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 10,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 29, 2022',
      duration: '12:00 - 15:00',
      location: 'Meeting room 306',
    },
  ];

  const {container, content, data, desc, line, header} = EventStyles();
  const renderItem = ({item}) => (
    <>
      <View style={container}>
        <View style={line} />
        <View style={content}>
          <Text style={header}>{item.title}</Text>
          <Text style={desc}> {item.description}</Text>
          <View style={{flexDirection: 'row', marginTop: Sizes.size12}}>
            <Text style={data}>
              {item.date} | {item.duration}
            </Text>
            <Text style={data}> {item.location}</Text>
          </View>
        </View>
      </View>
    </>
  );
  return (
    <View
      style={{
        alignItems: 'center',
        marginBottom: Sizes.size220,
        paddingBottom: Sizes.size220,
      }}>
      <Text
        style={{
          fontFamily: Fonts.medium,
          fontSize: Sizes.size16,
          lineHeight: Sizes.size24,
          color: '#1B3131',
          marginTop: Sizes.size30,
        }}>
        History Events
      </Text>
      <VictoryTasks />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default HistoryEvents;
