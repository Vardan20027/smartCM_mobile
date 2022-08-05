import React, {useRef} from 'react';
import {
  Animated,
  ImageBackground,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import PlusIcon from '../../assets/icons/plusIcon';
import {useState} from 'react';
import {styles} from './AddStyle';
import TasksIcon from '../../assets/icons/tasksIcon';
import DoneTasksIcon from '../../assets/icons/doneTasksIcon';
import PlaneIcon from '../../assets/icons/planeIcon';
import PolygIcon from '../../assets/icons/polygon';
import {Sizes} from '../../assets/RootStyle';

function AddButton(props) {
  const [focused, setFocused] = useState(false);
  const {pressable, button, secondaryButton} = styles();
  const mode = useRef(new Animated.Value(0)).current;
  const buttonSize = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 20,
        useNativeDriver: false,
      }),

      Animated.timing(buttonSize, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();
    setFocused(!focused);
  };
  const tasksX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [175, 125],
  });

  const tasksY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [720, 690],
  });

  const doneTasksX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [175, 175],
  });

  const doneTasksY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [720, 655],
  });

  const planeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [175, 225],
  });

  const planeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [720, 690],
  });

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const sizeStyle = {
    transform: [{scale: buttonSize}],
  };
  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View style={{position: 'absolute', left: tasksX, top: tasksY}}>
        <View style={secondaryButton}>
          <TasksIcon />
        </View>
      </Animated.View>
      <Animated.View
        style={{position: 'absolute', left: doneTasksX, top: doneTasksY}}>
        <View style={secondaryButton}>
          <DoneTasksIcon />
        </View>
      </Animated.View>
      <Animated.View style={{position: 'absolute', left: planeX, top: planeY}}>
        <View style={secondaryButton}>
          <PlaneIcon />
        </View>
      </Animated.View>
      <Pressable onPress={handlePress} style={pressable}>
        <Animated.View style={[button, sizeStyle]}>
          <ImageBackground
            source={
              focused
                ? require('../../assets/images/Polygon1.png')
                : require('../../assets/images/Polygon2.png')
            }
            style={{width: Sizes.size122, height: Sizes.size122}}
          />
          <Animated.View
            style={{transform: [{rotate: rotation}], position: 'absolute'}}>
            <PlusIcon iconColor={!focused ? '#F5F5F5' : '#347474'} />
          </Animated.View>
        </Animated.View>
      </Pressable>
    </View>
  );
}

export default AddButton;
