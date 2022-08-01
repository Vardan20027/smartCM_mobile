import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: Sizes.size6,
    },
    content: {
      width: Sizes.size315,
      alignItems: 'center',
      // borderWidth: Sizes.size1,
      // borderColor: 'red',
    },
    text: {
      // borderWidth: Sizes.size1,
      // borderColor: 'red',
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size24,
      color: '#11493E',
      marginRight: Sizes.size153,
    },
    selectView: {
      width: Sizes.size316,
      flexDirection: 'row',
      backgroundColor: '#347474',
      marginTop: Sizes.size30,
      borderRadius: Sizes.size4,
    },
    pressable: {
      height: Sizes.size28,
      backgroundColor: '#347474',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pressable2: {
      height: Sizes.size28,
      backgroundColor: '#E7F2F2',
      borderRadius: Sizes.size4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: Sizes.size315,
      height: Sizes.size145,
      margin: Sizes.size20,
    },
    date: {
      fontFamily: Fonts.regular,
      fontSize: Sizes.size14,
      color: '#1B3131',
      marginRight: Sizes.size210,
    },
    butText: {
      fontFamily: Fonts.regular,
      color: '#101010',
      fontSize: Sizes.size14,
    },
    butText2: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
  });
};

export {styles};
