import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Sizes} from '../../../assets/RootStyle';

function Read({
  item,
  leadAction,
  setVacation,
  vacation,
  hourly,
  setHourlyLead,
  setRemotelyLead,
  setVacationLead,
  setLeadActionID,
  setDayOffLead,
  setHourly,
  remotely,
  setRemotely,
  setDayOff,
  dayOff,
}) {
  const {container, text, image} = styles();
  const handlePress = item => {
    console.log('i', item.action);
    if (item.type === 'Hourly leave') {
      setHourly(!hourly);
      setHourlyLead(null);
    } else if (item.type === 'Day off') {
      setDayOff(!dayOff);
      setDayOffLead(null);
    } else if (item.type === 'Work remotely') {
      setRemotely(!remotely);
      setRemotelyLead(null);
    } else if (item.type === 'Vacation') {
      setVacation(!vacation);
      setVacationLead(null);
    } else {
      alert('The type is not defined');
    }
    if (item.action === 'send') {
      setHourlyLead(item.role);
      setDayOffLead(item.role);
      setVacationLead(item.role);
      setRemotelyLead(item.role);
    } else {
      setHourlyLead(null);
      setDayOffLead(null);
      setVacationLead(null);
      setRemotelyLead(null);
    }
    if (item.role) {
      setLeadActionID(item.id);
      console.log('Selected READ id:', item.id);
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
              {item.role ? 'You' : `${item.name} ${item.surname}`}
            </Text>
            <Text
              style={[
                text,
                {
                  color:
                    item.action === 'accepted' || leadAction === 'accepted'
                      ? '#347474'
                      : item.action === 'declined' || leadAction === 'declined'
                      ? '#EE9087'
                      : null,
                },
              ]}>
              {item.action}
            </Text>
            <Text style={text}>
              {item.role ? `${item.name} ${item.surname}'s request` : item.desc}
            </Text>
          </View>
          <View>
            <Text style={[text, {color: '#949494'}]}>
              {item.date} | {item.time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default Read;
