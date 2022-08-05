import React from 'react';
import {Calendar} from 'react-native-calendars';
import {Fonts, Sizes} from '../../assets/RootStyle';

function CalendarComp(props) {
  return (
    <>
      <Calendar
        style={{
          flex: 1,
          width: Sizes.size368,
          height: Sizes.size390,
          backgroundColor: '#F5F5F5',
        }}
        theme={{
          dayTextAtIndex0: {
            color: 'red',
          },
          sundayTextSectionTitleColor: 'red',
          backgroundColor: '#F5F5F5',
          calendarBackground: '#F5F5F5',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#11493E',
          selectedDayTextColor: '#ffffff',
          todayBackgroundColor: '#11493E',
          todayTextColor: '#FCFCFC',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: '#606060',
          disabledArrowColor: '#606060',
          monthTextColor: '#1B3131',
          indicatorColor: 'blue',
          textDayFontFamily: Fonts.nunito,
          textMonthFontFamily: Fonts.bold,
          textDayHeaderFontFamily: Fonts.regular,
          textDayFontWeight: '600',
          textMonthFontWeight: '300',
          textDayHeaderFontWeight: '300',
          textDayFontSize: Sizes.size14,
          textMonthFontSize: Sizes.size16,
          textDayHeaderFontSize: Sizes.size12,
        }}
      />
    </>
  );
}

export default CalendarComp;
