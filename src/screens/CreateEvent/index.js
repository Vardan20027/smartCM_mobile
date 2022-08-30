import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from './style';
import ArrowBottom from '../../assets/icons/arrowBottom';
import Calendar1Icon from '../../assets/icons/calendar1';
import {Input} from '../../components/Input';
import {Sizes} from '../../assets/RootStyle';
import LocatIcon from '../../assets/icons/locatIcon';
import DateBtSheet from '../../components/BottomSheet/Date/DateBtSheet';
import DurationBtSheet from '../../components/BottomSheet/Duration/DurationBtSheet';
import GreatBtSheet from '../../components/BottomSheet/Great/GreatBtSheet';
import TypeBtSheet from '../../components/BottomSheet/EventBtSheets/Type/TypeBtSheet';
import OrgBtSheet from '../../components/BottomSheet/EventBtSheets/Organizer/orgBtSheet';
import RoomBtSheet from '../../components/BottomSheet/EventBtSheets/Room/RoomBtSheet';
import ParticipatorsBtSheet from '../../components/BottomSheet/EventBtSheets/Participators/ParticipatorsBtSheet';
import moment from 'moment';

function CreateEvent(props) {
  const tesak = 'Type';
  const org = 'Organizer';
  const prts = 'Participators';
  const senyak = 'Room';
  const amsativ = 'Date';
  const dur = 'Duration';
  const event = props.route.params.event;
  const setEvent = props.route.params.setEevent;
  const [type, setType] = useState(false);
  const [organizer, setOrganizer] = useState(false);
  const [participators, setParticipators] = useState(false);
  const [room, setRoom] = useState(false);
  const [date, setDate] = useState(false);
  const [duration, setDuration] = useState(false);
  const [great, setGreat] = useState(false);
  const [data, setData] = useState({});
  const {
    container,
    text,
    input,
    inpView,
    touch,
    button,
    butText,
    desc,
    subText,
  } = styles();
  if (type || organizer || participators || room || date || duration || great) {
    props.navigation.setOptions({
      tabBarStyle: {display: 'none'},
    });
  }
  if (
    !type &&
    !organizer &&
    !participators &&
    !room &&
    !date &&
    !duration &&
    !great
  ) {
    props.navigation.setOptions({
      tabBarStyle: {display: 'flex'},
    });
  }
  useMemo(() => {
    setData({});
  }, [event]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={container}>
      <Text style={text}>Create New Events</Text>
      <Text style={subText}>Choose event type*</Text>

      <TouchableOpacity style={inpView} onPress={() => setType(!type)}>
        <Text style={input}>{data.Type || 'Type'}</Text>
        <View style={touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>

      <View style={inpView}>
        <Input
          style={[input, {width: Sizes.size310}]}
          {...props}
          placeholder="Event Title*"
        />
      </View>
      <TouchableOpacity
        style={inpView}
        onPress={() => setOrganizer(!organizer)}>
        <Text style={input}>{data.Organizer || 'Organizer'}</Text>
        <View style={touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={inpView}
        onPress={() => setParticipators(!participators)}>
        <Text style={input}>{data.Participators || 'Participators*'}</Text>
        <View style={touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={inpView} onPress={() => setRoom(!room)}>
        <Text style={input}>{data.Room || 'Room'}</Text>
        <View style={touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={inpView}>
        <Text style={input}>1 Alek Manukyan, Gyumri</Text>
        <View style={touch}>
          <LocatIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={inpView}
        onPress={() => {
          setDate(!date);
        }}>
        <Text style={input}>
          {moment(data.Date).format('DD MMM YYYY') || 'Date'}
        </Text>
        <View style={touch}>
          <Calendar1Icon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={inpView}
        onPress={() => {
          setDuration(!duration);
        }}>
        <Text style={input}>{data.Duration || 'Duration'}</Text>
        <View style={touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <View style={desc}>
        <Input
          style={[input, {width: Sizes.size310}]}
          {...props}
          placeholder="Description"
        />
      </View>
      <TouchableOpacity style={button} onPress={() => setGreat(!great)}>
        <Text style={butText}>Create</Text>
      </TouchableOpacity>
      {type ? (
        <TypeBtSheet
          type={type}
          setType={setType}
          tesak={tesak}
          data={data}
          setData={setData}
        />
      ) : null}
      {organizer ? (
        <OrgBtSheet
          organizer={organizer}
          setOrganizer={setOrganizer}
          org={org}
          data={data}
          setData={setData}
        />
      ) : null}
      {room ? (
        <RoomBtSheet
          room={room}
          setRoom={setRoom}
          senyak={senyak}
          data={data}
          setData={setData}
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
      {participators ? (
        <ParticipatorsBtSheet
          participators={participators}
          setParticipators={setParticipators}
          prts={prts}
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
      {great ? (
        <GreatBtSheet
          great={great}
          setGreat={setGreat}
          data={data}
          setData={setData}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
}

export default CreateEvent;
