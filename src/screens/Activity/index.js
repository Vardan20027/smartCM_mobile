import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './style';
import Victory from './VictoryBar';
import VictoryProgress from './VictoryProgress';
import {Sizes} from '../../assets/RootStyle';

const ActivityScreen = () => {
  const {container, text, text2} = styles();
  return (
    <ScrollView>
      <View style={container}>
        <View style={{marginTop: Sizes.size30}}>
          <Text style={text}>My Activties</Text>
        </View>

        <View
          style={{
            alignSelf: 'flex-start',
            margin: Sizes.size22,
          }}>
          <Text style={text2}>Week Tasks</Text>
        </View>
        <Victory />
        <View style={{alignSelf: 'flex-start', margin: Sizes.size22}}>
          <Text style={text2}>Progress tasks</Text>
        </View>
        <View style={{alignSelf: 'flex-start', marginHorizontal: Sizes.size22}}>
          <Text style={text2}>This is the schedule of your tasks 📊</Text>
        </View>
        <VictoryProgress />
      </View>
    </ScrollView>
  );
};

export default ActivityScreen;
