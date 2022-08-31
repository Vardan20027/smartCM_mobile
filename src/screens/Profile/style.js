import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
      // borderWidth: Sizes.size1,
      // borderColor: 'red',
      marginTop: Sizes.size30,
      fontFamily: Fonts.medium,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size18,
      lineHeight: Sizes.size24,
      color: '#11493E',
    },
    touch: {
      marginTop: Sizes.size30,
      width: Sizes.size320,
      padding: Sizes.size8,
      height: Sizes.size35,
      justifyContent: 'center',
      borderBottomWidth: Sizes.size1,
      borderColor: '#E3E3E3',
    },
    text2: {
      fontFamily: Fonts.regular,
      fontSize: Sizes.size12,
      lineHeight: Sizes.size15,
      fontWeight: '400',
      color: '#000000',
    },
  });
};

export {styles};
