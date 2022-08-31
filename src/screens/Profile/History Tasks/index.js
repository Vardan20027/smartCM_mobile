import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import VictoryTasks from '../Victory/VictoryTasks';
import {Fonts, Sizes} from '../../../assets/RootStyle';
import Checbox from '../../../components/Home/Tasks/Checbox';
import * as RootNavigation from '../../../navigation/RootNavigation';
import {TaskStyles} from '../../../components/Home/Tasks/style';
import CalendarComp from '../../../components/Home/Calendar';

function HistoryTasks(props) {
  const DATA = [
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
  const {tContainer, tContent, tData, tDesc, tHeader, projSt, tFlatSt} =
    TaskStyles();
  const renderItem = ({item}) => (
    <>
      <View style={tContainer}>
        <Checbox />
        <View style={tContent}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => RootNavigation.navigate('UpdateTask', {item})}>
            <View>
              <Text style={tHeader}>{item.title}</Text>
              <Text style={tData}>
                {item.date} | {item.duration}
              </Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={[
                  projSt,
                  {
                    backgroundColor: `${item.color}`,
                  },
                ]}>
                <Text style={tDesc}> {item.project}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
        History Tasks
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

export default HistoryTasks;
