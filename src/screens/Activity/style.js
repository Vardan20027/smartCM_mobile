import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    text: {
      // borderWidth: Sizes.size1,
      // borderColor: 'red',
      fontFamily: Fonts.medium,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#11493E',
    },
    text2: {
      // borderWidth: Sizes.size1,
      // borderColor: 'red',
      fontFamily: Fonts.bold,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size14,
      color: '#11493E',
    },
  });
};

export {styles};
