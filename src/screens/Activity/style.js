import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    text: {
      fontFamily: Fonts.medium,
      letterSpacing: 0.25,
      fontWeight: '500',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#11493E',
    },
    text2: {
      fontFamily: Fonts.bold,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#11493E',
    },
    text3: {
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#11493E',
    },
    headers: {
      alignSelf: 'flex-start',
      margin: Sizes.size22,
    },
    header2: {
      alignSelf: 'flex-start',
      marginHorizontal: Sizes.size22,
    },

    vicLeave: {
      width: Sizes.size350,
      height: Sizes.size350,
      borderRadius: Sizes.size8,
      marginBottom: Sizes.size120,
      alignItems: 'center',
      shadowColor: 'gray',
      shadowOffset: {
        width: 0,
        height: Sizes.size2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: Sizes.size5,
    },
  });
};

export {styles};
