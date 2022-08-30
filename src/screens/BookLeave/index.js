import React, {useState, useMemo} from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Input} from '../../components/Input';
import ArrowBottom from '../../assets/icons/arrowBottom';

import {Sizes} from '../../assets/RootStyle';
import {Calendar} from 'react-native-calendars';
import ArrowLeft from '../../assets/icons/arrowLeft';
import ArrowRight from '../../assets/icons/arrowRight';
import GreatBtSheet from '../../components/BottomSheet/Great/GreatBtSheet';
import TypeBtSheet from '../../components/BottomSheet/BookLeaveBtSheets/Type/TypeBtSheet';
import HourlyBtSheet from '../../components/BottomSheet/BookLeaveBtSheets/Hourly/HourlyBtSheet';
import VacationBtSheet from '../../components/BottomSheet/BookLeaveBtSheets/Vacation/VacationBtSheet';
import {backgroundColor} from 'react-native-calendars/src/style';
import moment from 'moment';

function BookLeave(props) {
  const currentDate = moment().format('YYYY-MM-DD');
  const tesak = 'Type';
  const [greate, setGreate] = useState(false);
  const [type, setType] = useState(false);
  const [hourly, setHourly] = useState(false);
  const [refresh, setRefresh] = useState(true);

  const [data, setData] = useState({});
  const [or, setOr] = useState([]);
  const [itemData, setItemData] = useState();
  const leave = props.route.params.leave;
  const setLeave = props.route.params.setLeave;
  const handleBtSheet = item => {
    if (item === 0) {
      setHourly(!hourly);
    } else if (item === 1 && item === 2) {
      setType(!type);
    } else {
      alert('Hop');
    }
  };

  const {
    container,
    text,
    input,
    inpView,
    touch,
    calendar,
    button,
    butText,
    desc,
    subText,
  } = styles();
  if (type || hourly || greate) {
    props.navigation.setOptions({
      tabBarStyle: {display: 'none'},
    });
  }
  if (!type && !hourly && !greate) {
    props.navigation.setOptions({
      tabBarStyle: {display: 'flex'},
    });
  }
  useMemo(() => {
    setData({});
  }, [leave]);
  return (
    <KeyboardAvoidingView style={container}>
      <Text style={text}>Book your leave time</Text>
      <Text style={subText}>Choose book leave type*</Text>

      <TouchableOpacity
        style={inpView}
        onPress={() => {
          setType(!type);
        }}>
        <Text style={input}>{data.Type || 'Type'}</Text>
        <View style={touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>

      <Calendar
        style={calendar}
        theme={{
          textSectionTitleColor: '#347474',
          backgroundColor: '#F5F5F5',
          calendarBackground: '#F5F5F5',
          todayBackgroundColor: '#11493E',
          todayTextColor: '#FCFCFC',
          arrowColor: '#606060',
          disabledArrowColor: '#606060',
        }}
        markedDates={{
          [or]: refresh
            ? {
                selected: true,
                selectedColor: '#1db7bf',
              }
            : {selected: false},
          [currentDate]: {selected: true, selectedColor: '#347474'},
        }}
        onDayPress={day => {
          setOr(day.dateString);
        }}
        renderArrow={direction =>
          direction === 'left' ? (
            <ArrowLeft
              iconWidth={Sizes.size6}
              iconHeight={Sizes.size12}
              iconColor={'#347474'}
              strokeWidth={Sizes.size2}
            />
          ) : (
            <ArrowRight
              iconWidth={Sizes.size6}
              iconHeight={Sizes.size12}
              iconColor={'#347474'}
              strokeWidth={Sizes.size2}
            />
          )
        }
      />

      <View style={desc}>
        <Input
          style={[input, {width: Sizes.size310}]}
          {...props}
          placeholder="Description"
        />
      </View>
      <TouchableOpacity style={button} onPress={() => handleBtSheet(itemData)}>
        <Text style={butText}>Create</Text>
      </TouchableOpacity>
      {type ? (
        <TypeBtSheet
          type={type}
          setType={setType}
          setData={setData}
          itemData={itemData}
          setItemData={setItemData}
          data={data}
          tesak={tesak}
        />
      ) : null}
      {greate ? (
        <GreatBtSheet
          greate={greate}
          setGreate={setGreate}
          refresh={refresh}
          setRefresh={setRefresh}
          or={or}
          setOr={setOr}
        />
      ) : null}
      {hourly ? (
        <HourlyBtSheet
          hourly={hourly}
          setHourly={setHourly}
          currentDate={currentDate}
          or={or}
          setData={setData}
          data={data}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
}

export default BookLeave;
