import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';
import {EventsData} from '../../../assets/FakeData';
import {EventStyles} from '../../../components/Home/Events/style';
import VictoryEvents from '../Victory/VictoryEvents';
import UnreadIcon from '../../../assets/icons/unreadIcon';
import Calendar1Icon from '../../../assets/icons/calendar1';
import {Input} from '../../../components/Input';

function HistoryEvents(props) {
  const {container, content, data, desc, line, header} = EventStyles();
  const renderItem = ({item}) => (
    <>
      <View style={container}>
        <View style={[line, {backgroundColor: item.color}]} />
        <View style={content}>
          <Text style={header}>{item.title}</Text>
          <Text style={desc}> {item.description}</Text>
          <View style={{flexDirection: 'row', marginTop: Sizes.size12}}>
            <Text style={data}>
              {item.date} | {item.duration}
            </Text>
            <Text style={data}> {item.location}</Text>
          </View>
        </View>
      </View>
    </>
  );
  return (
    <View
      style={{
        marginBottom: Sizes.size220,
        paddingBottom: Sizes.size220,
      }}>
      <Text
        style={{
          alignSelf: 'center',
          fontFamily: Fonts.medium,
          fontSize: Sizes.size16,
          lineHeight: Sizes.size24,
          color: '#1B3131',
          marginTop: Sizes.size30,
        }}>
        History Events
      </Text>
      <View style={{flexDirection: 'row', padding: Sizes.size10}}>
        <VictoryEvents />
        <View
          style={{
            position: 'absolute',
            right: Sizes.size5,
            top: Sizes.size80,
          }}>
          <View style={styles.icon}>
            <UnreadIcon
              iconColor={'#19B3A6'}
              iconWidth={Sizes.size10}
              iconHeight={Sizes.size10}
            />
            <Text style={styles.title}>Events</Text>
          </View>
          <View style={styles.icon}>
            <UnreadIcon
              iconColor={'#92BEFA'}
              iconWidth={Sizes.size10}
              iconHeight={Sizes.size10}
            />
            <Text style={styles.title}>Trainings</Text>
          </View>
          <View style={styles.icon}>
            <UnreadIcon
              iconColor={'#F4C584'}
              iconWidth={Sizes.size10}
              iconHeight={Sizes.size10}
            />
            <Text style={styles.title}>Meeting</Text>
          </View>
          <View style={styles.icon}>
            <UnreadIcon
              iconColor={'#EF988F'}
              iconWidth={Sizes.size10}
              iconHeight={Sizes.size10}
            />
            <Text style={styles.title}>Teambuilding</Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            borderWidth: Sizes.size1,
            borderColor: '#D1CDCD',
            borderRadius: Sizes.size4,
            paddingLeft: Sizes.size10,
            width: Sizes.size330,
            marginTop: Sizes.size270,
            marginLeft: Sizes.size20,
            flexDirection: 'row',
          }}>
          <TextInput
            placeholder={'Search history'}
            style={{fontFamily: Fonts.regular, width: '80%'}}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: Sizes.size10,
              alignSelf: 'center',
            }}>
            <Calendar1Icon />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: Sizes.size300,
          height: '100%',
          alignSelf: 'center',
          paddingBottom: Sizes.size420,
        }}>
        <FlatList
          data={EventsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    height: Sizes.size30,
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.regular,
    marginHorizontal: Sizes.size5,
    color: '#151522',
  },
});
export default HistoryEvents;
