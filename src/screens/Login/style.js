import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Sizes.size50,
    },
    text: {
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size24,
      color: '#11493E',
      padding: Sizes.size10,
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
      alignItems: 'flex-end',
      marginLeft: Sizes.size210,
    },
    butText: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
    socialLog: {
      flexDirection: 'row',
      padding: Sizes.size5,
      alignItems: 'center',
    },
    googleSt: {
      padding: Sizes.size5,
      marginRight: Sizes.size5,
    },
    fbSt: {
      padding: Sizes.size5,
    },
  });
};

export {styles};
