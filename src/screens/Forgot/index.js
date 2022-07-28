import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from './style';
import UserIcon from '../../assets/icons/user';
import {Fonts, Sizes} from '../../assets/RootStyle';
import {useNavigation} from '@react-navigation/native';

const ForgotScreen = props => {
  const {
    container,
    text,
    input,
    button,
    butText,
    forgot,
    textInput,
    loginTxt,
    text2,
  } = styles();
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1, justifyContent: 'center'}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={container}>
        <Image
          source={require('../../assets/images/Forgot.png')}
          style={{margin: Sizes.size85}}
        />
        <Text style={text}>Forgot Password</Text>
        <Text style={text2}>
          Enter your email address and we'll email you your new password
        </Text>
        <View style={input}>
          <UserIcon />
          <TextInput placeholder="Email" style={textInput} />
        </View>

        <TouchableOpacity style={button}>
          <Text style={butText}>Send</Text>
        </TouchableOpacity>
        <View style={forgot}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <View style={{flexDirection: 'row', padding: Sizes.size5}}>
              <Text style={{fontFamily: Fonts.regular}}>Back To</Text>
              <Text style={loginTxt}>Login</Text>
            </View>

            {/*<Text style={{fontFamily: Fonts.regular}}>Back To</Text>*/}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotScreen;
