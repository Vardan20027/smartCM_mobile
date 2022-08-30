import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    page: {
      height: '100%',
      position: 'absolute',
      width: '100%',
    },
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchable: {
      marginTop: Sizes.size80,
      width: Sizes.size313,
      height: Sizes.size45,
      backgroundColor: '#11493E',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Sizes.size4,
    },
    text: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
    text1: {
      fontFamily: Fonts.bold,
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      letterSpacing: 0.25,
      color: '#11493E',
      marginTop: Sizes.size20,
    },
    view: {
      marginTop: Sizes.size10,
      width: Sizes.size335,
      borderBottomWidth: Sizes.size1,
      borderColor: '#E3E3E3',
      flexDirection: 'row',
      alignItems: 'center',
    },
    close: {
      left: Sizes.size150,
      width: Sizes.size20,
      height: Sizes.size20,
      padding: Sizes.size5,
    },
    employeeView: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      margin: Sizes.size10,
    },
    employee: {
      fontFamily: Fonts.regular,
      fontSize: Sizes.size14,
      marginRight: Sizes.size3,
    },
    name: {
      fontFamily: Fonts.regular,
      color: '#347474',
      fontSize: Sizes.size14,
    },
    comView: {
      alignSelf: 'flex-start',
      margin: Sizes.size10,
    },
    comment: {
      fontFamily: Fonts.regular,
      fontSize: Sizes.size14,
      color: '#949494',
      marginTop: Sizes.size5,
    },
    viewText: {
      fontFamily: Fonts.regular,
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size14,
      lineHeight: Sizes.size16,
      letterSpacing: 0.25,
      color: '#616062',
    },
  });
};

export {styles};
