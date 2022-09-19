import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Fonts, Sizes} from '../../assets/RootStyle';

function Verification({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: Fonts.bold,
          fontSize: Sizes.size24,
          color: '#1B3131',
          marginBottom: Sizes.size10,
        }}>
        Enter Code
      </Text>
      <Text
        style={{
          fontFamily: Fonts.regular,
          width: Sizes.size313,
          marginBottom: Sizes.size10,
        }}>
        A 6-digit code has been sent to your mobile number 98****56
      </Text>
      <View
        style={{
          flexDirection: 'row',
          margin: Sizes.size10,
          width: Sizes.size330,
          height: Sizes.size45,
          borderWidth: Sizes.size1,
          borderColor: '#DEDEDE',
          padding: Sizes.size10,
          borderRadius: Sizes.size4,
          alignItems: 'center',
        }}>
        <TextInput
          placeholder={'******'}
          keyboardType={'number-pad'}
          maxLength={6}
          style={{
            fontFamily: Fonts.regular,
            width: Sizes.size250,
            height: Sizes.size65,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          marginTop: Sizes.size30,
          width: Sizes.size329,
          height: Sizes.size45,
          backgroundColor: '#11493E',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: Sizes.size4,
        }}
        onPress={() => {
          navigation.navigate('Tab');
        }}>
        <Text
          style={{
            fontFamily: Fonts.regular,
            color: '#FCFCFC',
            fontSize: Sizes.size14,
          }}>
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Verification;
