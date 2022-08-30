import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
  Platform,
} from 'react-native';
import {styles} from './style';
import ArrowBottom from '../../assets/icons/arrowBottom';
import Calendar1Icon from '../../assets/icons/calendar1';
import {Input} from '../../components/Input';
import ProjectBtSheet from '../../components/BottomSheet/TaskBtSheets/Project/ProjectBtSheet';
import DateBtSheet from '../../components/BottomSheet/Date/DateBtSheet';
import DurationBtSheet from '../../components/BottomSheet/Duration/DurationBtSheet';
import {Fonts, Sizes} from '../../assets/RootStyle';

function CreateTask(props) {
  const anun = 'Project';
  const amsativ = 'Date';
  const dur = 'Duration';
  const task = props.route.params.task;
  const setTask = props.route.params.setTask;
  const [project, setProject] = useState(false);
  const [date, setDate] = useState(false);
  const [duration, setDuration] = useState(false);
  const [great, setGreat] = useState(false);
  const [data, setData] = useState({});
  const [value, setValue] = useState('');
  const {container, text, input, inpView, inpView2, touch, button, butText} =
    styles();
  if (date || project || duration || great) {
    props.navigation.setOptions({
      tabBarStyle: {display: 'none'},
    });
  }
  if (!project && !date && !duration && !great) {
    props.navigation.setOptions({
      tabBarStyle: {display: 'flex'},
    });
  }
  const pressHandler = () => {
    props.onSubmit(value);
    setValue('');
  };
  // useEffect(() => {
  //   refBar.current.setNativeProps({display: 'none'});
  // }, []);
  useMemo(() => {
    setData({});
  }, [task]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={container}>
      <Text style={text}>Create Task</Text>
      <Pressable style={inpView}>
        <Input
          style={input}
          {...props}
          placeholder="Title*"
          onChangeText={setValue}
          value={value}
        />
      </Pressable>

      <TouchableOpacity
        style={inpView2}
        onPress={() => {
          setProject(!project);
        }}>
        <Text style={input}>{data.Project || 'Project*'}</Text>
        <View style={touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={inpView2}
        onPress={() => {
          setDate(!date);
        }}>
        <Text style={input}>{data.Date || 'Date'}</Text>
        <View style={touch}>
          <Calendar1Icon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={inpView2}
        onPress={() => {
          setDuration(!duration);
        }}>
        <Text style={input}>{data.Duration || 'Duration'}</Text>
        <View style={touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={button}>
        <Text style={butText} onPress={pressHandler}>
          Create
        </Text>
      </TouchableOpacity>
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

export default CreateTask;
