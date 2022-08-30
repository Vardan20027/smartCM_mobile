import React from 'react';
import {View, StyleSheet} from 'react-native';
import {VictoryAxis, VictoryLine, VictoryScatter} from 'victory-native';
import {Sizes} from '../../assets/RootStyle';

function VictoryProgress(props) {
  const data = [
    {x: 'Jan', y: 27.7},
    {x: 'Feb', y: 27.5},
    {x: 'Mar', y: 27.6},
    {x: 'Apr', y: 27.7},
    {x: 'May', y: 28},
    {x: 'Jun', y: 27.7},
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={{position: 'relative'}}>
          <VictoryLine
            style={{
              data: {stroke: '#347474'},
            }}
            interpolation="natural"
            data={data}
          />
          <View style={{position: 'absolute', top: 0}}>
            <VictoryScatter
              style={{
                data: {fill: '#347474', stroke: '#fff', strokeWidth: 3},
              }}
              data={data}
              symbol={({datum}) => (datum.x === 'May' ? 'circle' : null)}
              size={({datum}) => (datum.x === 'May' ? Sizes.size8 : 0)}
            />
          </View>
        </View>
        <View style={{position: 'absolute', bottom: Sizes.size0}}>
          <VictoryAxis
            minDomain={{x: 0.5}}
            tickValues={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
            style={{
              axis: {stroke: 'rgba(228, 228, 228, 0.2)'},
              tickLabels: {
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Sizes.size16,
                lineHeight: Sizes.size20,
                fill: '#999999',
              },
            }}
          />
        </View>
        <View style={{position: 'absolute', bottom: Sizes.size15}}>
          <VictoryAxis
            dependentAxis
            tickValues={['29', '28', '27', '26', '25']}
            style={{
              axis: {stroke: 'rgba(228, 228, 228, 0.2)'},
              tickLabels: {
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Sizes.size16,
                lineHeight: Sizes.size20,
                fill: '#999999',
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
    width: Sizes.size350,
    height: Sizes.size280,
    marginTop: Sizes.size20,
    marginLeft: Sizes.size13,
    marginRight: Sizes.size24,
    borderRadius: Sizes.size10,
    marginBottom: Sizes.size20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default VictoryProgress;
