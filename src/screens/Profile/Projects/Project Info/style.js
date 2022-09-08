import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      marginTop: Sizes.size30,
      fontFamily: Fonts.bold,
      fontStyle: 'normal',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      letterSpacing: 0.25,
      color: '#1B3131',
    },
    subTitle: {
      marginTop: Sizes.size20,
      fontFamily: Fonts.medium,
      fontSize: Sizes.size16,
      color: '#1B3131',
    },
    descView: {
      width: Sizes.size313,
    },
    descTitle: {
      alignSelf: 'flex-start',

      marginTop: Sizes.size20,
      fontFamily: Fonts.medium,
      fontSize: Sizes.size14,
      color: '#616062',
      marginBottom: Sizes.size20,
    },
    desc: {
      fontFamily: Fonts.regular,
      fontSize: Sizes.size14,
    },
    image: {
      maxWidth: Sizes.size50,
      maxHeight: Sizes.size50,
      borderRadius: Sizes.size20,
    },
    memberView: {
      marginLeft: Sizes.size10,
    },
    memberName: {
      fontFamily: Fonts.medium,
      fontSize: Sizes.size14,
    },
  });
};

export {styles};
