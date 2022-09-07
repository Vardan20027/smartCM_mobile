import React, {useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Sizes} from '../../../assets/RootStyle';
import Checbox from '../Tasks/Checbox';
import {TaskStyles} from '../Tasks/style';
import CalendarComp from '../Calendar';
import * as RootNavigation from '../../../navigation/RootNavigation';
import {EventStyles} from '../Events/style';

function All(props) {
  const ref = useRef(null);
  const scrollToTop = () => ref.current.scrollToIndex({index: 0});
  const {tContainer, tContent, tData, tDesc, tHeader, projSt} = TaskStyles();
  const {container, content, data, desc, line, header} = EventStyles();

  const all = [...props.EventsDATA, ...props.TasksDATA];
  const sortedAll = all.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const renderItem = ({item}) =>
    item.project ? (
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
    ) : (
      <View style={container}>
        <View style={[line, {backgroundColor: item.color}]} />
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
    );

  return (
    <View
      style={{
        flex: 1,
        width: Sizes.size365,
        marginTop: Sizes.size22,
      }}>
      <SafeAreaView style={{marginTop: Sizes.size22 * -1}}>
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
          data={sortedAll}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ref={ref}
        />
      </SafeAreaView>
    </View>
  );
}

export default All;
