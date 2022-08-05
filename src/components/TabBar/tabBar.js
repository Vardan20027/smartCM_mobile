import React from 'react';
import {View, ImageBackground, TouchableOpacity, Pressable} from 'react-native';
import {Sizes} from '../../assets/RootStyle';
import {styles} from './tabStyle';
import HomeIcon from '../../assets/icons/homeIcon';
import NotifIcon from '../../assets/icons/notifIcon';
import ActivityIcon from '../../assets/icons/activityIcon';
import ProfileIcon from '../../assets/icons/profileIcon';

function TabBar({state, descriptors, navigation}) {
  const {container, container2, content, background, focusedSt, unFocusedSt} =
    styles();
  return (
    <View>
      <Pressable style={container}>
        <ImageBackground
          source={require('../../assets/images/tabBarBackground.png')}
          style={background}
        />
      </Pressable>
      <View style={content}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          const Svg = {
            Home: <HomeIcon iconColor={isFocused ? '#347474' : '#fff'} />,
            Notifications: (
              <NotifIcon iconColor={isFocused ? '#347474' : '#fff'} />
            ),
            Activity: (
              <ActivityIcon iconColor={isFocused ? '#347474' : '#fff'} />
            ),
            Profile: <ProfileIcon iconColor={isFocused ? '#347474' : '#fff'} />,
          };

          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={container2}
              key={route.key}>
              <View style={isFocused ? focusedSt : unFocusedSt}>
                {Svg[route.name]}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default TabBar;
