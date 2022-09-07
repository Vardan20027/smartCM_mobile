import React, {useState} from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Fonts, Sizes} from '../../assets/RootStyle';
import Unread from '../../components/Notification/Unread';
import Read from '../../components/Notification/Read';
import DayOffBtSheet from '../../components/BottomSheet/NotificationBtSheets/Day off';
import HourlyBtSheet from '../../components/BottomSheet/NotificationBtSheets/Hourly';
import RemotelyBtSheet from '../../components/BottomSheet/NotificationBtSheets/Work remotely';
import NotifVacationBtSheet from '../../components/BottomSheet/NotificationBtSheets/Vacation';
import EmptyNotifIcon from '../../assets/icons/emptyNotifIcon';

const NotificationsDATA = [
  {
    id: 0,
    avatar: require('../../assets/images/notif_image.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'send',
    desc: 'request',
    date: 'May 20, 2022',
    time: '12:00',
    read: false,
    type: 'Hourly leave',
    role: 'Team-lead',
  },
  {
    id: 1,
    avatar: require('../../assets/images/notif_image1.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '15:00',
    read: false,
    type: 'Vacation',
  },
  {
    id: 2,
    avatar: require('../../assets/images/notif_image2.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'send',
    desc: 'request',
    date: 'May 20, 2022',
    time: '12:00',
    read: false,
    type: 'Day off',
    role: 'Team-lead',
  },
  {
    id: 3,
    avatar: require('../../assets/images/notif_image3.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'declined',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '15:00',
    read: false,
    type: 'Work remotely',
  },
  {
    id: 4,
    avatar: require('../../assets/images/notif_image4.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '12:00',
    read: false,
    type: 'Day off',
  },
  {
    id: 5,
    avatar: require('../../assets/images/notif_image5.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'send',
    desc: 'request',
    date: 'May 20, 2022',
    time: '15:00',
    read: false,
    type: 'Work remotely',
    role: 'Team-lead',
  },
  {
    id: 6,
    avatar: require('../../assets/images/notif_image6.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '12:00',
    read: true,
    type: 'Hourly leave',
  },
  {
    id: 7,
    avatar: require('../../assets/images/notif_image7.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '15:00',
    read: true,
    type: 'Day off',
  },
  {
    id: 8,
    avatar: require('../../assets/images/notif_image8.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'declined',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '12:00',
    read: true,
    type: 'Work remotely',
  },
  {
    id: 9,
    avatar: require('../../assets/images/notif_image9.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '15:00',
    read: true,
    type: 'Vacation',
  },
];
const NotificationsScreen = props => {
  const [arr, setArr] = useState(NotificationsDATA);
  const [leadAction, setLeadAction] = useState('');
  const [leadActionID, setLeadActionID] = useState();

  const func = el => {
    const newArr = NotificationsDATA.map(object => {
      if (object.id === el.leadActionID) {
        return {...object, action: el.leadAction};
      }
      return object;
    });
    setArr(newArr);
  };
  console.log(
    arr[0].id,
    arr[0].action,
    arr[2].id,
    arr[2].action,
    arr[5].id,
    arr[5].action,
  );

  const [focused, setFocused] = useState(1);
  const [hourly, setHourly] = useState(false);
  const [hourlyLead, setHourlyLead] = useState();
  const [dayOff, setDayOff] = useState(false);
  const [dayOffLead, setDayOffLead] = useState();
  const [remotely, setRemotely] = useState(false);
  const [remotelyLead, setRemotelyLead] = useState();
  const [vacation, setVacation] = useState(false);
  const [vacationLead, setVacationLead] = useState();
  const [i, setI] = useState(false);

  const {
    container,
    text,
    selectView,
    pressable,
    pressable2,
    btSheet,
    butText,
    butText2,
    mark,
    markTouch,
  } = styles();
  const renderItem = ({item}) => {
    if (focused === 1 && !item.read) {
      return (
        <Unread
          item={item}
          func={func}
          hourly={hourly}
          hourlyLead={hourlyLead}
          setHourly={setHourly}
          setHourlyLead={setHourlyLead}
          vacation={vacation}
          vacationLead={vacationLead}
          setVacation={setVacation}
          setVacationLead={setVacationLead}
          remotely={remotely}
          remotelyLead={remotelyLead}
          setRemotely={setRemotely}
          setRemotelyLead={setRemotelyLead}
          dayOff={dayOff}
          leadActionID={leadActionID}
          leadAction={leadAction}
          setLeadActionID={setLeadActionID}
          dayOffLead={dayOffLead}
          setDayOff={setDayOff}
          setDayOffLead={setDayOffLead}
        />
      );
    } else if (focused === 2 && item.read) {
      return (
        <Read
          item={item}
          leadAction={leadAction}
          hourly={hourly}
          hourlyLead={hourlyLead}
          leadActionID={leadActionID}
          setHourly={setHourly}
          setHourlyLead={setHourlyLead}
          vacation={vacation}
          vacationLead={vacationLead}
          setVacation={setVacation}
          setVacationLead={setVacationLead}
          remotely={remotely}
          remotelyLead={remotelyLead}
          setRemotely={setRemotely}
          setRemotelyLead={setRemotelyLead}
          dayOff={dayOff}
          dayOffLead={dayOffLead}
          setDayOff={setDayOff}
          setDayOffLead={setDayOffLead}
        />
      );
    }
  };

  const handleReadAll = () => {
    arr.map(item => {
      item.read = true;
      setI(true);
    });
  };
  if (dayOff || hourly || remotely || vacation) {
    props.navigation.setOptions({
      tabBarStyle: {display: 'none'},
    });
  }
  if (!dayOff && !hourly && !remotely && !vacation) {
    props.navigation.setOptions({
      tabBarStyle: {display: 'flex'},
    });
  }

  // const ListEmptyView = ({item}) => {
  //   return (
  //     <View>
  //       <View style={{margin: Sizes.size10}}>
  //         <EmptyNotifIcon />
  //       </View>
  //       <Text>No notifications</Text>
  //     </View>
  //   );
  // };
  return (
    <>
      <View style={{position: 'relative'}}>
        <View style={container}>
          <Text style={text}>Notifications</Text>
          <View
            style={
              focused === 2
                ? [selectView, {marginBottom: Sizes.size10}]
                : selectView
            }>
            <View style={{flex: 0.5}}>
              <Pressable
                onPress={() => setFocused(1)}
                style={focused === 1 ? pressable2 : pressable}>
                <Text style={focused === 1 ? butText : butText2}>Unread</Text>
              </Pressable>
            </View>
            <View style={{flex: 0.5}}>
              <Pressable
                onPress={() => setFocused(2)}
                style={focused === 2 ? pressable2 : pressable}>
                <Text style={focused === 2 ? butText : butText2}>Read</Text>
              </Pressable>
            </View>
          </View>

          {focused === 1 ? (
            <TouchableOpacity style={markTouch} onPress={() => handleReadAll()}>
              <Text style={mark}>Mark all as read</Text>
            </TouchableOpacity>
          ) : null}
          {i && focused === 1 ? (
            <View>
              <View style={{margin: Sizes.size10}}>
                <EmptyNotifIcon />
              </View>
              <Text style={{fontFamily: Fonts.regular}}>No notifications</Text>
            </View>
          ) : null}
          <FlatList
            data={arr}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <View style={btSheet}>
        {dayOff ? (
          <DayOffBtSheet
            func={func}
            leadActionID={leadActionID}
            setDayOff={setDayOff}
            dayOff={dayOff}
            dayOffLead={dayOffLead}
            setLeadAction={setLeadAction}
          />
        ) : null}
        {hourly ? (
          <HourlyBtSheet
            func={func}
            leadActionID={leadActionID}
            setHourly={setHourly}
            hourly={hourly}
            hourlyLead={hourlyLead}
            setLeadAction={setLeadAction}
          />
        ) : null}
        {remotely ? (
          <RemotelyBtSheet
            func={func}
            leadActionID={leadActionID}
            setRemotely={setRemotely}
            remotely={remotely}
            setLeadAction={setLeadAction}
            remotelyLead={remotelyLead}
          />
        ) : null}
        {vacation ? (
          <NotifVacationBtSheet
            func={func}
            leadActionID={leadActionID}
            setVacation={setVacation}
            vacation={vacation}
            vacationLead={vacationLead}
            setLeadAction={setLeadAction}
          />
        ) : null}
      </View>
    </>
  );
};

export default NotificationsScreen;
