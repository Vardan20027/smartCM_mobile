import React, {useState, useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {EventStyles} from './style';
import {Sizes} from '../../../assets/RootStyle';
import CalendarComp from '../Calendar';
import Calendar2Icon from '../../../assets/icons/calendar2';

function Events(props) {
  const ref = useRef(null);
  const scrollToTop = () => ref.current.scrollToIndex({index: 0});
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
        flex: 1,
        width: Sizes.size365,
      }}>
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
          data={props.EventsDATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ref={ref}
        />
      </SafeAreaView>
    </View>
  );
}

export default Events;
