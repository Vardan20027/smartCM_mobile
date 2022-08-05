import {StyleSheet} from 'react-native';
import {Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      zIndex: 1,
    },
    background: {
      position: 'absolute',
      width: Sizes.size340,
      height: Sizes.size70,
      bottom: Sizes.size3,
    },
    content: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    container2: {
      flex: 1,
      alignItems: 'center',
      zIndex: 1,
      marginTop: -60,
    },
    focusedSt: {
      width: Sizes.size44,
      height: Sizes.size44,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Sizes.size50,
    },
    unFocusedSt: {
      width: Sizes.size44,
      height: Sizes.size44,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export {styles};
