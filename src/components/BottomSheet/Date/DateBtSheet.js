import React, {useCallback, useMemo, useRef} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Fonts, Sizes} from '../../../assets/RootStyle';
import CloseIcon from '../../../assets/icons/closeIcon';
import {styles} from './style';
import {Calendar} from 'react-native-calendars';
import ArrowLeft from '../../../assets/icons/arrowLeft';
import ArrowRight from '../../../assets/icons/arrowRight';

function DateBtSheet({date, setDate, amsativ, data, setData}) {
  const snapPoints = useMemo(() => ['70%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const {calendar, container, content, touchable, text, page, text1, close} =
    styles();
  return (
    <GestureHandlerRootView style={page}>
      <View style={container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={0}
          onChange={handleSheetChanges}>
          <View style={content}>
            <TouchableOpacity style={close} onPress={() => setDate(!date)}>
              <CloseIcon />
            </TouchableOpacity>
            <Text style={text1}>Select Day</Text>
            <Calendar
              renderArrow={direction =>
                direction === 'left' ? (
                  <ArrowLeft
                    iconWidth={Sizes.size5}
                    iconHeight={Sizes.size12}
                    iconColor={'#347474'}
                    strokeWidth={Sizes.size2}
                  />
                ) : (
                  <ArrowRight
                    iconWidth={Sizes.size5}
                    iconHeight={Sizes.size12}
                    iconColor={'#347474'}
                    strokeWidth={Sizes.size2}
                  />
                )
              }
              style={calendar}
              theme={{
                textSectionTitleColor: '#347474',
                todayTextColor: '#D83535',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
              }}
              onDayPress={day => {
                setData({...data, [amsativ]: day.dateString});
              }}
            />
            <TouchableOpacity
              style={touchable}
              onPress={() => {
                setDate(!date);
              }}>
              <Text style={text}>Select</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default DateBtSheet;
