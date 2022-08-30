import React, {useCallback, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './style';
import {Sizes} from '../../../assets/RootStyle';
import CloseIcon from '../../../assets/icons/closeIcon';

function DurationBtSheet({duration, setDuration, data, setData, dur}) {
  const snapPoints = useMemo(() => ['50%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const handleDuration = (item, key, name) => {
    setData({...data, [key]: name});
  };
  const {
    page,
    container,
    content,
    touchable,
    text,
    text1,
    text2,
    textFlat,
    time,
    time1,
    close,
    time2,
    flat,
  } = styles();
  const DATA = [
    {
      id: 0,
      title: '15 minutes',
    },
    {
      id: 1,
      title: '30 minutes',
    },
    {
      id: 2,
      title: '1 hour',
    },
    {
      id: 3,
      title: '2 hours',
    },
    {
      id: 4,
      title: '3 hours',
    },
    {
      id: 5,
      title: 'Half day',
    },
    {
      id: 6,
      title: 'Full day',
    },
  ];
  const renderItem = ({item}) => (
    <>
      {item.id !== 6 ? (
        <TouchableOpacity
          style={time}
          onPress={() => handleDuration(item, dur, item.title)}>
          <Text style={textFlat}>{item.title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={time2}
          onPress={() => handleDuration(item, dur, item.title)}>
          <Text style={textFlat}>{item.title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
  return (
    <GestureHandlerRootView style={page}>
      <View style={container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={0}
          onChange={handleSheetChanges}>
          <View style={content}>
            <TouchableOpacity
              style={close}
              onPress={() => setDuration(!duration)}>
              <CloseIcon />
            </TouchableOpacity>

            <Text style={text1}>Actual Duration</Text>
            <Text style={text2}>
              Select actual duration you spent on this task
            </Text>
            <View style={flat}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
              />
            </View>

            <TouchableOpacity
              style={touchable}
              onPress={() => setDuration(!duration)}>
              <Text style={text}>Select</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default DurationBtSheet;
