import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import {styles} from './style';
import ArrowBottom from '../../assets/icons/arrowBottom';
import Calendar1Icon from '../../assets/icons/calendar1';
import {Input} from '../../components/Input';
import ProjectBtSheet from '../../components/BottomSheet/TaskBtSheets/Project/ProjectBtSheet';
import DateBtSheet from '../../components/BottomSheet/Date/DateBtSheet';
import DurationBtSheet from '../../components/BottomSheet/Duration/DurationBtSheet';
import * as RootNavigation from '../../navigation/RootNavigation';
import ArrowLeft from '../../assets/icons/arrowLeft';
import {Sizes} from '../../assets/RootStyle';
import moment from 'moment';

function UpdateTask(props) {
  const anun = 'Project';
  const amsativ = 'Date';
  const dur = 'Duration';
  const current = props.route.params.item;
  const [project, setProject] = useState(false);
  const [date, setDate] = useState(false);
  const [duration, setDuration] = useState(false);
  const [data, setData] = useState({});
  const {
    container,
    text,
    input,
    inpView,
    inpView2,
    touch,
    back,
    button,
    button2,
    butText,
    butText2,
  } = styles();
  if (date || project || duration) {
    props.navigation.setOptions({
      tabBarStyle: {display: 'none'},
    });
  }
  if (!project && !date && !duration) {
    props.navigation.setOptions({
      tabBarStyle: {display: 'flex'},
    });
  }
  // useEffect(() => {
  //   refBar.current.setNativeProps({display: 'none'});
  // }, []);
  return (
    <KeyboardAvoidingView style={container}>
      <TouchableOpacity
        style={back}
        onPress={() => RootNavigation.navigate('Home')}>
        <ArrowLeft
          iconWidth={Sizes.size13}
          iconHeight={Sizes.size20}
          iconColor={'#347474'}
        />
      </TouchableOpacity>

      <Text style={text}>Update Task</Text>
      <Pressable style={inpView}>
        <Input style={input} {...props} placeholder={'Title*'}>
          <Text>{current.title}</Text>
        </Input>
      </Pressable>

      <TouchableOpacity
        style={inpView2}
        onPress={() => {
          setProject(!project);
        }}>
        <Text style={input}>{data.Project || current.project}</Text>
        <View style={touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={inpView2}
        onPress={() => {
          setDate(!date);
        }}>
        <Text style={input}>
          {moment(data.Date).format('DD MMM YYYY') || current.date}
        </Text>
        <View style={touch}>
          <Calendar1Icon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={inpView2}
        onPress={() => {
          setDuration(!duration);
        }}>
        <Text style={input}>{data.Duration || current.duration}</Text>
        <View style={touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={button2}>
          <Text style={butText2}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={button}>
          <Text style={butText}>Update</Text>
        </TouchableOpacity>
      </View>

      {project ? (
        <ProjectBtSheet
          project={project}
          setProject={setProject}
          data={data}
          setData={setData}
          anun={anun}
        />
      ) : null}
      {date ? (
        <DateBtSheet
          date={date}
          setDate={setDate}
          amsativ={amsativ}
          data={data}
          setData={setData}
        />
      ) : null}
      {duration ? (
        <DurationBtSheet
          duration={duration}
          setDuration={setDuration}
          dur={dur}
          data={data}
          setData={setData}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
}

export default UpdateTask;
