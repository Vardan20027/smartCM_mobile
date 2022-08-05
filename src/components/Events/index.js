import React from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {EventStyles} from './style';
import {Sizes} from '../../assets/RootStyle';
import CalendarComp from '../Calendar';
import {useState} from 'react';
import Calendar2Icon from '../../assets/icons/calendar2';

function Events(props) {
  const {container, content, date, data, desc, line, header} = EventStyles();

  const [focused, setFocused] = useState(false);

  const DATA = [
    {
      id: 0,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 1,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 2,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 3,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 4,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 5,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 6,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 7,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 8,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 9,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
    {
      id: 10,
      title: 'Meeting with team',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'May 20,2022 | 12:00 - 15:00',
      location: 'Meeting room 306',
    },
  ];

  const renderItem = ({item}) => (
    <>
      <View style={container}>
        <View style={line} />
        <View style={content}>
          <Text style={header}>{item.title}</Text>
          <Text style={desc}> {item.description}</Text>
          <View style={{flexDirection: 'row', marginTop: Sizes.size12}}>
            <Text style={data}> {item.date}</Text>
            <Text style={data}> {item.location}</Text>
          </View>
        </View>
      </View>
    </>
  );
  return (
    <View
      style={{
        flex: 1,
        width: Sizes.size365,
        marginTop: Sizes.size20,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={date}> 20 May 2022</Text>
        <TouchableOpacity
          onPress={() => setFocused(!focused)}
          style={{
            padding: Sizes.size3,
            width: Sizes.size30,
          }}>
          <Calendar2Icon
            iconColor1={focused ? '#F5F5F5' : '#347474'}
            iconColor2={focused ? '#347474' : '#F5F5F5'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          ListHeaderComponent={focused ? <CalendarComp /> : null}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default Events;
