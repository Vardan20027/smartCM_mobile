import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryScatter,
} from 'victory-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';

function VictoryTasks(props) {
  const data = [
    {x: 1, y: 26.5},
    {x: 1.3, y: 26.45},
    {x: 1.5, y: 26.7},
    {x: 1.58, y: 26.75},
    {x: 2.1, y: 27},
    {x: 3, y: 27.8},
    {x: 3.48, y: 26.9},
    {x: 3.69, y: 26.73},
    {x: 4.3, y: 26.2},
    {x: 4.7, y: 26.42},
    {x: 4.78, y: 26.46},
    {x: 5, y: 26.45},
    {x: 5.5, y: 26.7},
    {x: 6, y: 26.1},
    {x: 7, y: 27},
  ];
  return (
    <>
      <View style={styles.container}>
        <VictoryChart minDomain={{x: 0.8, y: 0}} domain={{y: [25, 29]}}>
          <VictoryAxis
            crossAxis
            style={{
              axis: {stroke: '#334E68'},
              tickLabels: {
                fontFamily: Fonts.regular,
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Sizes.size11,
                lineHeight: Sizes.size13,
                fill: '#616062',
              },
            }}
            tickValues={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          />
          <VictoryAxis
            dependentAxis
            crossAxis
            style={{
              axis: {stroke: '#334E68'},
              grid: {stroke: '#334E68'},
              tickLabels: {
                fontFamily: Fonts.regular,
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Sizes.size11,
                lineHeight: Sizes.size13,
                fill: '#616062',
              },
            }}
            tickFormat={y => `${y}`.substring(0, 2)}
          />
          <VictoryLine
            data={data}
            style={{
              data: {stroke: '#347474'},
              parent: {border: '2px solid #347474'},
            }}
            interpolation="cardinal"
          />

          <VictoryScatter
            style={{data: {fill: '#347474', stroke: '#fff', strokeWidth: 3}}}
            size={Sizes.size8}
            data={[{x: 3, y: 27.8}]}
          />
        </VictoryChart>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Sizes.size375,
    height: Sizes.size280,
  },
});
export default VictoryTasks;
