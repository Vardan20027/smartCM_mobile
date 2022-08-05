import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      // borderWidth: Sizes.size1,
      // borderColor: 'red',
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size24,
      color: '#11493E',
    },
  });
};

export {styles};
