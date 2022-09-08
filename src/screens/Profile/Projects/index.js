import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {styles} from './style';
import {ProjectsData} from '../../../assets/FakeData';
import {Sizes} from '../../../assets/RootStyle';
import ArrowRightNew from '../../../assets/icons/arrowRightNew';

function Projects(props) {
  const {container, title, content, image} = styles();
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: Sizes.size310,
          height: Sizes.size60,
          alignItems: 'center',
        }}>
        <View>
          <Image source={item.img} style={image} />
        </View>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.short}</Text>
        </View>
        <ArrowRightNew />
      </TouchableOpacity>
    </>
  );
  return (
    <View style={container}>
      <Text style={title}>Projects</Text>
      <View>
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
