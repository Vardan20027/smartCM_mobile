import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './style';
import CheckBox from '@react-native-community/checkbox';
import CloseIcon from '../../../../assets/icons/closeIcon';

function ProjectBtSheet({project, setProject, data, setData, anun}) {
  const snapPoints = useMemo(() => ['50%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const handleChange = (item, key, name) => {
    setIsActive(item.id);
    setData({...data, [key]: name});
  };
  const [isActive, setIsActive] = useState(false);
  const {
    view,
    viewText,
    container,
    content,
    touchable,
    text,
    page,
    text1,
    close,
  } = styles();
  const DATA = [
    {
      id: 0,
      title: 'Bob AI',
    },
    {
      id: 1,
      title: 'New City',
    },
    {
      id: 2,
      title: 'Mapplo',
    },
    {
      id: 3,
      title: 'Broker ...',
    },
  ];
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={view}
        onPress={() => handleChange(item, anun, item.title)}>
        <CheckBox value={isActive === item.id} />
        <Text style={viewText}>{item.title}</Text>
      </TouchableOpacity>
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
              onPress={() => {
                setProject(!project);
              }}>
              <CloseIcon />
            </TouchableOpacity>
            <Text style={text1}>Select Project</Text>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <TouchableOpacity
              style={touchable}
              onPress={() => {
                setProject(!project);
              }}>
              <Text style={text}>Select</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default ProjectBtSheet;
