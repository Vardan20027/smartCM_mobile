import React, {useState, useRef} from 'react';
import {
  Image,
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {Fonts, Sizes} from '../../assets/RootStyle';
import Events from '../../components/Home/Events';
import Tasks from '../../components/Home/Tasks';
import All from '../../components/Home/All';
import Calendar2Icon from '../../assets/icons/calendar2';
import Header from '../../components/Home/Calendar/header';

const HomeScreen = props => {
  const EventsDATA = [
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
  const TasksDATA = [
    {
      id: 11,
      title: 'Create Task',
      date: 'May 19, 2022',
      duration: '15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 12,
      title: 'Research Dashboard',
      date: 'May 2, 2022',
      duration: ' 15 minute',
      project: 'New City',
      color: '#FF8A9F',
    },
    {
      id: 13,
      title: 'Feedbacks',
      date: 'May 26, 2022',
      duration: ' 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 14,
      title: 'Sign up',
      date: 'May 12, 2022',
      duration: ' 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 15,
      title: 'Research Dashboard',
      date: 'May 15, 2022',
      duration: ' 15 minute',
      project: 'New City',
      color: '#FF8A9F',
    },
    {
      id: 16,
      title: 'Sign up',
      date: 'May 31, 2022',
      duration: ' 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 17,
      title: 'Create Task',
      date: 'May 27, 2022',
      duration: ' 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 18,
      title: 'Feedbacks',
      date: 'May 7, 2022',
      duration: ' 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 19,
      title: 'Sign up',
      date: 'May 27, 2022',
      duration: ' 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 20,
      title: 'Create Task',
      date: 'May 18, 2022',
      duration: ' 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 21,
      title: 'Sign up',
      date: 'May 24, 2022',
      duration: ' 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 22,
      title: 'Research Dashboard',
      date: 'May 27, 2022',
      duration: ' 15 minute',
      project: 'New City',
      color: '#FF8A9F',
    },
    {
      id: 23,
      title: 'Sign up',
      date: 'May 29, 2022',
      duration: ' 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 24,
      title: 'Feedbacks',
      date: 'May 27, 2022',
      duration: ' 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
  ];
  const [focused, setFocused] = useState(false);
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

        <Header focused={focused} setFocused={setFocused} />
        <View style={{height: Sizes.size390}}>
          {f === 2 ? (
            <Events
              focused={focused}
              {...props}
              EventsDATA={EventsDATA}
              TasksDATA={TasksDATA}
            />
          ) : null}
          {f === 3 ? (
            <All
              focused={focused}
              {...props}
              EventsDATA={EventsDATA}
              TasksDATA={TasksDATA}
            />
          ) : null}
          {f === 1 ? (
            <Tasks
              focused={focused}
              {...props}
              EventsDATA={EventsDATA}
              TasksDATA={TasksDATA}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
