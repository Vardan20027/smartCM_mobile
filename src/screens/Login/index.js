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
import PhoneIcon from '../../assets/icons/phoneIcon';
import GoogleIcon from '../../assets/icons/googleIcon';
import FbIcon from '../../assets/icons/fbIcon';
// import firebase from 'firebase';
// import {firebaseConfig} from '../../../firebase-config';
// import auth from '@react-native-firebase/auth';

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
    socialLog,
    googleSt,
    fbSt,
  } = styles();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationID, setVerificationID] = useState(null);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={container}>
        <Image source={require('../../assets/images/login.png')} />
        <Text style={text}>Log in</Text>
        {/*<View style={input}>*/}
        {/*  <UserIcon />*/}
        {/*  <TextInput placeholder="Email" style={textInput} />*/}
        {/*</View>*/}

        {/*<View style={input}>*/}
        {/*  <PassIcon />*/}
        {/*  <TextInput*/}
        {/*    placeholder="Password"*/}
        {/*    secureTextEntry={isSecureEntry}*/}
        {/*    style={textInput1}*/}
        {/*  />*/}
        {/*  <Pressable*/}
        {/*    style={{padding: Sizes.size10}}*/}
        {/*    onPress={() => {*/}
        {/*      setIsSecureEntry(prev => !prev);*/}
        {/*    }}>*/}
        {/*    {isSecureEntry ? <ShowPassIcon /> : <HidePassIcon />}*/}
        {/*  </Pressable>*/}
        {/*</View>*/}
        <View style={input}>
          <PhoneIcon />
          <Text
            style={{
              fontFamily: Fonts.regular,
              marginLeft: Sizes.size10,
              color: 'black',
            }}>
            +374
          </Text>
          <TextInput
            placeholder="98123456"
            keyboardType={'phone-pad'}
            maxLength={8}
            style={textInput1}
          />
        </View>
        <TouchableOpacity
          style={button}
          onPress={() => {
            navigation.navigate('Tab');
          }}>
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
        <Text style={{marginTop: Sizes.size50, fontFamily: Fonts.regular}}>
          Or sign in with
        </Text>
        <View style={socialLog}>
          <TouchableOpacity style={googleSt}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity style={fbSt}>
            <FbIcon />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
