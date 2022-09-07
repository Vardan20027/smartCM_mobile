import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Sizes} from '../../../assets/RootStyle';
import UnreadIcon from '../../../assets/icons/unreadIcon';
import EmptyNotifIcon from '../../../assets/icons/emptyNotifIcon';

function Unread({
  item,
  setVacation,
  vacation,
  hourly,
  setHourlyLead,
  leadActionID,
  setLeadActionID,
  leadAction,
  remotelyLead,
  setRemotelyLead,
  vacationLead,
  setVacationLead,
  dayOffLead,
  setDayOffLead,
  setHourly,
  remotely,
  setRemotely,
  setDayOff,
  dayOff,
}) {
  const {container, text, image} = styles();
  const handlePress = item => {
    console.log('item1', item);
    if (item.type === 'Hourly leave') {
      setHourly(!hourly);
    } else if (item.type === 'Day off') {
      setDayOff(!dayOff);
    } else if (item.type === 'Work remotely') {
      setRemotely(!remotely);
    } else if (item.type === 'Vacation') {
      setVacation(!vacation);
    } else {
      alert('The type is not defined');
    }

    setHourlyLead(item.role);
    setDayOffLead(item.role);
    setVacationLead(item.role);
    setRemotelyLead(item.role);
    item.read = true;

    if (item.role === 'Team-lead') {
      console.log(leadActionID);
      setLeadActionID(item.id);
    }
  };

  return (
    <>
      <TouchableOpacity style={container} onPress={() => handlePress(item)}>
        <View style={image}>
          <Image
            source={item.avatar}
            style={{maxWidth: Sizes.size32, maxHeight: Sizes.size32}}
          />
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={text}>
              {item.name} {item.surname}
            </Text>
            <Text
              style={[
                text,
                {
                  color:
                    item.action === 'accepted'
                      ? '#347474'
                      : null || item.action === 'declined'
                      ? '#EE9087'
                      : null,
                },
              ]}>
              {item.action}
            </Text>
            <Text style={text}>{item.desc}</Text>
          </View>
          <View>
            <Text style={[text, {color: '#949494'}]}>
              {item.date} | {item.time}
            </Text>
          </View>
        </View>
        <View style={{position: 'absolute', right: 5}}>
          <UnreadIcon
            iconColor={'#347474'}
            iconWidth={Sizes.size8}
            iconHeight={Sizes.size8}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}

export default Unread;
