import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';

const EventStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      width: Sizes.size315,
      height: Sizes.size111,
      marginHorizontal: Sizes.size22,
      marginVertical: Sizes.size12,
      backgroundColor: '#FCFCFC',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: Sizes.size6,
    },
    content: {
      width: Sizes.size315,
      padding: Sizes.size5,
    },
    line: {
      width: Sizes.size6,
      borderBottomLeftRadius: Sizes.size6,
      borderTopLeftRadius: Sizes.size6,
    },
    date: {
      fontFamily: Fonts.bold,
      fontSize: Sizes.size14,
      color: '#1B3131',
      marginLeft: Sizes.size24,
      marginRight: Sizes.size170,
      width: Sizes.size120,
    },
    header: {
      fontSize: Sizes.size16,
      color: '#616062',
      fontFamily: Fonts.regular,
      fontWeight: '600',
    },
    desc: {
      fontSize: Sizes.size12,
      fontFamily: Fonts.regular,
      color: '#616062',
      marginTop: Sizes.size12,
    },
    data: {
      color: '#949494',
      fontSize: Sizes.size12,
      fontFamily: Fonts.regular,
      marginRight: Sizes.size26,
    },
    flatSt: {
      flex: 1,
      marginTop: Sizes.size10,
      marginLeft: Sizes.size5,
      // width: Sizes.size365,
    },
  });
};

export {EventStyles};
