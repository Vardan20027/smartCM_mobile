import {StyleSheet} from 'react-native';
import {Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    button: {
      width: Sizes.size77,
      height: Sizes.size60,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Sizes.size30,
    },
    pressable: {
      padding: Sizes.size10,
      width: Sizes.size77,
      height: Sizes.size60,
      marginLeft: Sizes.size140,
      marginTop: Sizes.size671,
    },
    secondaryButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: Sizes.size42,
      height: Sizes.size42,
      borderRadius: Sizes.size24,
      backgroundColor: '#347474',
    },
  });
};

export {styles};
