import React from 'react';
import {View, StyleSheet} from 'react-native';
import {VictoryBar, VictoryAxis} from 'victory-native';
import {Sizes} from '../../assets/RootStyle';

function Victory(props) {
  const data = [
    {quarter: 1, earnings: 840, day: 'M'},
    {quarter: 2, earnings: 690, day: 'M'},
    {quarter: 3, earnings: 570, day: 'M'},
    {quarter: 4, earnings: 690, day: 'M'},
    {quarter: 5, earnings: 850, day: 'M'},
    {quarter: 6, earnings: 540, day: 'M'},
    {quarter: 7, earnings: 330, day: 'M'},
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={{position: 'relative'}}>
          <VictoryBar
            height={Sizes.size170}
            style={{
              data: {fill: '#83B7AD', width: Sizes.size18},
            }}
            cornerRadius={{top: () => Sizes.size8, bottom: () => Sizes.size8}}
            data={data}
            x="quarter"
            y="earnings"
          />
        </View>
        <View style={{position: 'absolute', bottom: Sizes.size3}}>
          <VictoryAxis
            tickValues={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
            style={{
              axis: {stroke: 'transparent'},
              tickLabels: {
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Sizes.size16,
                lineHeight: Sizes.size20,
                fill: '#616062',
              },
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: Sizes.size20,
  },
});
export default Victory;
