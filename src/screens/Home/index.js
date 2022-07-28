import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

const HomeScreen = ({navigation}) => {
  const {container} = styles();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <View style={container}>
      <Text> HI</Text>
    </View>
  );
};

export default HomeScreen;
