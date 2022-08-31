// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import {VictoryBar, VictoryAxis} from 'victory-native';
// import {Fonts, Sizes} from '../../assets/RootStyle';
//
// function VictoryLeave(props) {
//   const data = [
//     {quarter: 1, earnings: 850},
//     {quarter: 2, earnings: 850},
//     {quarter: 3, earnings: 850},
//     {quarter: 4, earnings: 850},
//     {quarter: 5, earnings: 850},
//     {quarter: 6, earnings: 850},
//     {quarter: 7, earnings: 850},
//     {quarter: 8, earnings: 850},
//     {quarter: 9, earnings: 850},
//     {quarter: 10, earnings: 850},
//     {quarter: 11, earnings: 850},
//     {quarter: 12, earnings: 850},
//   ];
//   return (
//     <>
//       <View style={styles.container}>
//         <View style={{position: 'relative'}}>
//           <VictoryBar
//             height={Sizes.size220}
//             style={{
//               data: {fill: '#F4C584', width: Sizes.size7},
//             }}
//             cornerRadius={{top: () => Sizes.size4, bottom: () => Sizes.size4}}
//             data={data}
//             x="quarter"
//             y="earnings"
//           />
//         </View>
//         <View style={{position: 'absolute', bottom: Sizes.size3}}>
//           <VictoryAxis
//             tickValues={[
//               'J',
//               'F',
//               'M',
//               'A',
//               'M',
//               'J',
//               'J',
//               'A',
//               'S',
//               'O',
//               'N',
//               'D',
//             ]}
//             style={{
//               axis: {stroke: 'transparent'},
//               tickLabels: {
//                 fontFamily: Fonts.regular,
//                 fontStyle: 'normal',
//                 fontWeight: '500',
//                 fontSize: Sizes.size16,
//                 lineHeight: Sizes.size20,
//                 fill: '#616062',
//               },
//             }}
//           />
//         </View>
//       </View>
//     </>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderRadius: Sizes.size10,
//   },
// });
// export default VictoryLeave;
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
} from 'victory-native';
import UnreadIcon from '../../assets/icons/unreadIcon';
import {Fonts, Sizes} from '../../assets/RootStyle';

function VictoryLeave(props) {
  const data = [
    {quarter: 1, earnings: 20, y: 7, z: 4, k: 1.4},
    {quarter: 2, earnings: 20, y: 9, z: 1.4, k: 4},
    {quarter: 3, earnings: 20, y: 9, z: 1.4, k: 4},
    {quarter: 4, earnings: 20, y: 11, z: 4, k: 0.001},
    {quarter: 5, earnings: 20, y: 9, z: 1.4, k: 4},
    {quarter: 6, earnings: 20, y: 11, z: 4, k: 0.001},
    {quarter: 7, earnings: 20, y: 7, z: 4, k: 1.4},
    {quarter: 8, earnings: 20, y: 2, z: 5, k: 11},
    {quarter: 9, earnings: 20, y: 7, z: 4, k: 1.4},
    {quarter: 10, earnings: 20, y: 7, z: 4, k: 1.4},
    {quarter: 11, earnings: 20, y: 2, z: 5, k: 11},
    {quarter: 12, earnings: 20, y: 2, z: 5, k: 11},
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={{marginTop: Sizes.size60 * -1}}>
          <VictoryChart
            width={Sizes.size350}
            height={Sizes.size280}
            domain={{y: [0, 29]}}>
            <VictoryAxis
              crossAxis
              style={{
                axis: {stroke: 'none'},
                tickLabels: {
                  fontFamily: Fonts.regular,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: Sizes.size16,
                  lineHeight: Sizes.size20,
                  fill: '#616062',
                },
              }}
              tickValues={[
                'J',
                'F',
                'M',
                'A ',
                'M ',
                'J ',
                'J  ',
                'A  ',
                'S',
                'O',
                'N',
                'D',
              ]}
            />
            <VictoryBar
              style={{data: {fill: '#F4C584', width: Sizes.size7}}}
              cornerRadius={{top: () => Sizes.size3, bottom: () => Sizes.size3}}
              data={data}
              x="quarter"
              y="earnings"
            />
            <VictoryStack colorScale={['#EF988F', '#92BEFA', '#83B7AD']}>
              <VictoryBar
                data={data}
                x="quarter"
                y="y"
                style={{data: {width: Sizes.size7}}}
                cornerRadius={{
                  top: () => Sizes.size4,
                  bottom: () => Sizes.size4,
                }}
              />
              <VictoryBar
                data={data}
                style={{data: {width: Sizes.size7}}}
                x="quarter"
                y="z"
                cornerRadius={{
                  top: () => Sizes.size4,
                  bottom: () => Sizes.size4,
                }}
              />
              <VictoryBar
                data={data}
                x="quarter"
                y="k"
                style={{data: {width: Sizes.size7}}}
                cornerRadius={{
                  top: () => Sizes.size4,
                  bottom: () => Sizes.size4,
                }}
              />
            </VictoryStack>
          </VictoryChart>
        </View>
        <View style={styles.icon}>
          <UnreadIcon
            iconColor={'#92BEFA'}
            iconWidth={Sizes.size10}
            iconHeight={Sizes.size10}
          />
          <Text style={styles.title}>Vacation</Text>
          <Text style={styles.duration}>12 day</Text>
        </View>
        <View style={styles.icon}>
          <UnreadIcon
            iconColor={'#EF988F'}
            iconWidth={Sizes.size10}
            iconHeight={Sizes.size10}
          />
          <Text style={styles.title}>Day Offs</Text>
          <Text style={styles.duration}>3 day</Text>
        </View>
        <View style={styles.icon}>
          <UnreadIcon
            iconColor={'#83B7AD'}
            iconWidth={Sizes.size10}
            iconHeight={Sizes.size10}
          />
          <Text style={styles.title}>Hourly leaved</Text>
          <Text style={styles.duration}>1 h 15 m</Text>
        </View>
        <View style={styles.icon}>
          <UnreadIcon
            iconColor={'#F5CC93'}
            iconWidth={Sizes.size10}
            iconHeight={Sizes.size10}
          />
          <Text style={styles.title}>Work remotely</Text>
          <Text style={styles.duration}>5 day</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: Sizes.size350,
    height: Sizes.size350,

    backgroundColor: '#f5f5f5',
    borderRadius: Sizes.size10,
    marginBottom: Sizes.size120,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    flexDirection: 'row',
    width: Sizes.size300,
    height: Sizes.size30,
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.regular,
    marginHorizontal: Sizes.size5,
    color: '#151522',
  },
  duration: {
    fontFamily: Fonts.regular,
    position: 'absolute',
    color: '#151522',
    right: 0,
  },
});
export default VictoryLeave;
