import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './style';
import {Sizes} from '../../assets/RootStyle';
import Events from '../../components/Home/Events';
import Tasks from '../../components/Home/Tasks';
import All from '../../components/Home/All';
import Header from '../../components/Home/Calendar/header';
import {EventsData, TasksData} from '../../assets/FakeData';

const HomeScreen = props => {
  const EventsDATA = EventsData;

  const TasksDATA = TasksData;
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
