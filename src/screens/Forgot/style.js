import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size24,
      color: '#11493E',
    },
    input: {
      flexDirection: 'row',
      margin: Sizes.size10,
      width: Sizes.size330,
      height: Sizes.size45,
      borderWidth: Sizes.size1,
      borderColor: '#DEDEDE',
      padding: Sizes.size10,
      borderRadius: Sizes.size4,
      alignItems: 'center',
    },
    textInput: {
      fontFamily: Fonts.regular,
      width: Sizes.size280,
      height: Sizes.size45,
      marginLeft: Sizes.size10,
    },
    textInput1: {
      fontFamily: Fonts.regular,
      width: Sizes.size250,
      height: Sizes.size45,
      marginLeft: Sizes.size10,
    },
    button: {
      marginTop: Sizes.size10,
      width: Sizes.size329,
      height: Sizes.size45,
      backgroundColor: '#11493E',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Sizes.size4,
    },
    forgot: {
      marginTop: Sizes.size10,
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginLeft: Sizes.size210,
    },
    butText: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
    text2: {
      fontFamily: Fonts.regular,
      margin: Sizes.size10,
    },
    loginTxt: {
      color: '#11493E',
      fontFamily: Fonts.regular,
      marginLeft: Sizes.size5,
    },
  });
};

export {styles};
