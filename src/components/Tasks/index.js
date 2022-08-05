import React, {useState} from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Sizes} from '../../assets/RootStyle';
import CalendarComp from '../Calendar';
import Calendar2Icon from '../../assets/icons/calendar2';
import Checbox from './Checbox';

function Tasks(props) {
  const [focused, setFocused] = useState(false);
  const {container, content, flatSt, date, data, desc, projSt, header} =
    styles();
  const DATA = [
    {
      id: 0,
      title: 'Create Task',
      date: 'May 27,2022 | 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 1,
      title: 'Research Dashboard',
      date: 'May 27,2022 | 15 minute',
      project: 'New City',
      color: '#FF8A9F',
    },
    {
      id: 2,
      title: 'Feedbacks',
      date: 'May 27,2022 | 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 3,
      title: 'Sign up',
      date: 'May 27,2022 | 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 4,
      title: 'Research Dashboard',
      date: 'May 27,2022 | 15 minute',
      project: 'New City',
      color: '#FF8A9F',
    },
    {
      id: 5,
      title: 'Sign up',
      date: 'May 27,2022 | 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 6,
      title: 'Create Task',
      date: 'May 27,2022 | 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 7,
      title: 'Feedbacks',
      date: 'May 27,2022 | 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 8,
      title: 'Sign up',
      date: 'May 27,2022 | 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 9,
      title: 'Create Task',
      date: 'May 27,2022 | 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 10,
      title: 'Sign up',
      date: 'May 27,2022 | 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 11,
      title: 'Research Dashboard',
      date: 'May 27,2022 | 15 minute',
      project: 'New City',
      color: '#FF8A9F',
    },
    {
      id: 12,
      title: 'Sign up',
      date: 'May 27,2022 | 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 13,
      title: 'Feedbacks',
      date: 'May 27,2022 | 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 14,
      title: 'Sign up',
      date: 'May 27,2022 | 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 15,
      title: 'Research Dashboard',
      date: 'May 27,2022 | 15 minute',
      project: 'New City',
      color: '#FF8A9F',
    },
  ];

  const renderItem = item => (
    <View style={container}>
      <Checbox />
      <View style={content}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={header}>{item.item.title}</Text>
            <Text style={data}> {item.item.date}</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={[
                projSt,
                {
                  backgroundColor: `${item.item.color}`,
                },
              ]}>
              <Text style={desc}> {item.item.project}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={flatSt}>
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
      <View style={{height: Sizes.size389}}>
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

export default Tasks;
