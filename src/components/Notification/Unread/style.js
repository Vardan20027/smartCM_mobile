import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
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
    text: {
      fontFamily: Fonts.regular,
      paddingHorizontal: Sizes.size2,
      fontSize: Sizes.size12,
      color: '#2C2C2C',
    },
  });
};

export {styles};
