import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {styles} from './style';
import Victory from './VictoryBar';
import VictoryProgress from './VictoryProgress';
import {Sizes} from '../../assets/RootStyle';
import VictoryLeave from './VictoryLeave';

const ActivityScreen = () => {
  const {container, text, text2, headers, header2, text3} = styles();

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={container}>
        <View style={{marginTop: Sizes.size30}}>
          <Text style={text}>My Activties</Text>
        </View>

        <View style={headers}>
          <Text style={text2}>Week Tasks</Text>
        </View>
        <Victory />
        <View style={headers}>
          <Text style={text2}>Progress tasks</Text>
        </View>
        <View style={header2}>
          <Text style={text3}>This is the schedule of your tasks 📊</Text>
        </View>
        <VictoryProgress />
        <View style={headers}>
          <Text style={text2}>Annual leave</Text>
        </View>
        <View>
          <VictoryLeave />
        </View>
      </View>
    </ScrollView>
  );
};

export default ActivityScreen;
