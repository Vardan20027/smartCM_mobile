import React, {useState} from 'react';
import {View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

function Checbox(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <View
      style={{
        alignSelf: 'center',
      }}>
      <CheckBox
        onValueChange={newValue => setIsActive(!isActive)}
        value={isActive}
      />
    </View>
  );
}

export default Checbox;
