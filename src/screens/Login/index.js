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
  ScrollView,
} from 'react-native';
import {styles} from './style';
import UserIcon from '../../assets/icons/user';
import PassIcon from '../../assets/icons/password';
import ShowPassIcon from '../../assets/icons/showPass';
import HidePassIcon from '../../assets/icons/hidePass';
import {Fonts, Sizes} from '../../assets/RootStyle';

const LoginScreen = ({navigation}) => {
  const {
    container,
    text,
    input,
    button,
    butText,
    forgot,
    textInput,
    textInput1,
  } = styles();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={container}>
        <Image source={require('../../assets/images/login.png')} />
        <Text style={text}>Log in</Text>
        <View style={input}>
          <UserIcon />
          <TextInput placeholder="Email" style={textInput} />
        </View>

        <View style={input}>
          <PassIcon />
          <TextInput
            placeholder="Password"
            secureTextEntry={isSecureEntry}
            style={textInput1}
          />
          <Pressable
            style={{padding: Sizes.size10}}
            onPress={() => {
              setIsSecureEntry(prev => !prev);
            }}>
            {isSecureEntry ? <ShowPassIcon /> : <HidePassIcon />}
          </Pressable>
        </View>
        <TouchableOpacity style={button}>
          <Text style={butText}>Login</Text>
        </TouchableOpacity>
        <View style={forgot}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Forgot');
            }}>
            <Text style={{fontFamily: Fonts.regular, padding: Sizes.size5}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
