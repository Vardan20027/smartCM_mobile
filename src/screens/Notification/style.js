import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      // flex: 1,
      alignItems: 'center',
    },
    container2: {
      width: Sizes.size313,
      height: Sizes.size35,
      flexDirection: 'row',
      margin: Sizes.size5,
      paddingHorizontal: Sizes.size3,
      alignItems: 'center',
    },
    image: {
      marginRight: Sizes.size15,
    },
    btSheet: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
    },
    text2: {
      fontFamily: Fonts.regular,
      paddingHorizontal: Sizes.size2,
      fontSize: Sizes.size12,
      color: '#2C2C2C',
    },
    text: {
      fontFamily: Fonts.regular,
      marginTop: Sizes.size10,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size24,
      color: '#11493E',
    },
    selectView: {
      width: Sizes.size316,
      flexDirection: 'row',
      backgroundColor: '#E7F2F2',
      marginTop: Sizes.size30,
      borderRadius: Sizes.size6,
    },
    pressable: {
      height: Sizes.size28,
      backgroundColor: '#E7F2F2',
      borderRadius: Sizes.size4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pressable2: {
      height: Sizes.size28,
      backgroundColor: '#347474',
      borderRadius: Sizes.size4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mark: {
      fontFamily: Fonts.regular,
      color: '#347474',
    },
    markTouch: {
      marginTop: Sizes.size10,
      alignSelf: 'flex-end',
      right: Sizes.size35,
      padding: Sizes.size5,
    },
    butText2: {
      fontFamily: Fonts.regular,
      color: '#11493E',
      fontSize: Sizes.size14,
    },
    butText: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
  });
};

export {styles};
