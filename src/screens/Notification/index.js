import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {Sizes} from '../../assets/RootStyle';
import Unread from '../../components/Notification/Unread';
import Read from '../../components/Notification/Read';
import UnreadIcon from '../../assets/icons/unreadIcon';
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
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '12:00',
    read: false,
    type: 'Hourly leave',
  },
  {
    id: 1,
    avatar: require('../../assets/images/notif_image1.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'declined',
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
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '12:00',
    read: false,
    type: 'Day off',
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
    action: 'declined',
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
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '15:00',
    read: false,
    type: 'Vacation',
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
  const [focused, setFocused] = useState(1);
  const [hourly, setHourly] = useState(false);
  const [dayOff, setDayOff] = useState(false);
  const [remotely, setRemotely] = useState(false);
  const [vacation, setVacation] = useState(false);
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
          hourly={hourly}
          setHourly={setHourly}
          vacation={vacation}
          setVacation={setVacation}
          remotely={remotely}
          setRemotely={setRemotely}
          dayOff={dayOff}
          setDayOff={setDayOff}
        />
      );
    } else if (focused === 2 && item.read) {
      return (
        <Read
          item={item}
          hourly={hourly}
          setHourly={setHourly}
          vacation={vacation}
          setVacation={setVacation}
          remotely={remotely}
          setRemotely={setRemotely}
          dayOff={dayOff}
          setDayOff={setDayOff}
        />
      );
    }
  };

  const handleReadAll = () => {
    NotificationsDATA.map(item => {
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
              <Text>No notifications</Text>
            </View>
          ) : null}
          <FlatList
            data={NotificationsDATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            // ListEmptyComponent={}
          />
        </View>
      </View>
      <View style={btSheet}>
        {dayOff ? (
          <DayOffBtSheet setDayOff={setDayOff} dayOff={dayOff} />
        ) : null}
        {hourly ? (
          <HourlyBtSheet setHourly={setHourly} hourly={hourly} />
        ) : null}
        {remotely ? (
          <RemotelyBtSheet setRemotely={setRemotely} remotely={remotely} />
        ) : null}
        {vacation ? (
          <NotifVacationBtSheet setVacation={setVacation} vacation={vacation} />
        ) : null}
      </View>
    </>
  );
};

export default NotificationsScreen;
