import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Events from '../Events';
import {Sizes} from '../../assets/RootStyle';
import Checbox from '../Tasks/Checbox';
import {TaskStyles} from '../Tasks/style';

function All(props) {
  const {container, content, data, desc, header, projSt} = TaskStyles();
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
    <View
      style={{
        flex: 1,
        width: Sizes.size365,
        marginTop: Sizes.size11,
      }}>
      <View style={{marginTop: -22}}>
        <FlatList
          ListHeaderComponent={<Events />}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default All;
