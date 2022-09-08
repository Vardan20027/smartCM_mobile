import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {ProjectsData} from '../../../assets/FakeData';
import ArrowRightNew from '../../../assets/icons/arrowRightNew';
import * as RootNavigation from '../../../navigation/RootNavigation';

function Projects(props) {
  const {container, title, content, image, touch, flatTitle, desc, flat} =
    styles();
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={touch}
        onPress={() => {
          RootNavigation.navigate('Project Info', {item});
        }}>
        <View>
          <Image source={item.img} style={image} />
        </View>
        <View style={content}>
          <Text style={flatTitle}>{item.title}</Text>
          <Text style={desc}>{item.short}</Text>
        </View>
        <ArrowRightNew />
      </TouchableOpacity>
    </>
  );
  return (
    <View style={container}>
      <Text style={title}>Projects</Text>
      <View style={flat}>
        <FlatList
          data={ProjectsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default Projects;
