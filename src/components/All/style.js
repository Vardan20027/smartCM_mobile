import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      marginLeft: 'auto',
      marginRight: 'auto',
      flexDirection: 'row',
      width: Sizes.size315,
      height: Sizes.size55,
      borderRadius: Sizes.size6,
      shadowColor: 'gray',
      shadowRadius: Sizes.size5,
      shadowOpacity: 0.3,
      margin: Sizes.size10,
      backgroundColor: '#EDF3F4',
    },
    content: {
      width: Sizes.size315,
      padding: Sizes.size5,
    },
    header: {
      fontSize: Sizes.size16,
      color: '#616062',
      fontFamily: Fonts.regular,
      fontWeight: '600',
      marginBottom: Sizes.size2,
    },
    desc: {
      fontSize: Sizes.size11,
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
    },
    data: {
      color: '#949494',
      fontSize: Sizes.size12,
      fontFamily: Fonts.regular,
      marginRight: Sizes.size26,
    },
    date: {
      fontFamily: Fonts.bold,
      fontSize: Sizes.size14,
      color: '#1B3131',
      marginLeft: Sizes.size24,
      marginRight: Sizes.size170,
      width: Sizes.size120,
    },
  });
};

export {styles};
