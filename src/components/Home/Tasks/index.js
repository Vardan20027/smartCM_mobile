import React, {useState, useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TaskStyles} from './style';
import CalendarComp from '../Calendar';
import Checbox from './Checbox';

import * as RootNavigation from '../../../navigation/RootNavigation';

function Tasks(props) {
  const ref = useRef(null);
  const scrollToTop = () => ref.current.scrollToIndex({index: 0});
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
    <View style={tFlatSt}>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={
            props.focused ? (
              <CalendarComp
                scrollToTop={scrollToTop}
                {...props}
                EventsDATA={props.EventsDATA}
                TasksDATA={props.TasksDATA}
              />
            ) : null
          }
          data={props.TasksDATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ref={ref}
        />
      </SafeAreaView>
    </View>
  );
}

export default Tasks;
