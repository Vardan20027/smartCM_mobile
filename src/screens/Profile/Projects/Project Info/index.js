import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './style';
import VictoryProject from './VictoryProject';
import {MembersData} from '../../../../assets/FakeData';
import {Sizes} from '../../../../assets/RootStyle';

function ProjectInfo(props) {
  const project = props.route.params.item;
  const {
    container,
    title,
    subTitle,
    descView,
    descTitle,
    desc,
    image,
    memberView,
    memberName,
  } = styles();

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={container}>
        <Text style={title}>{project.title}</Text>
        <Text style={subTitle}>This is the schedule of your tasks 📊 </Text>
        <VictoryProject />
        <View style={descView}>
          <Text style={descTitle}>Description</Text>

          <Text style={desc}>{project.description}</Text>
          <Text style={[descTitle, {marginBottom: Sizes.size5}]}>Start at</Text>
          <Text style={desc}>{project.start}</Text>
          <Text style={[descTitle, {marginBottom: Sizes.size5}]}>Deadline</Text>
          <Text style={desc}>{project.deadline}</Text>
          <Text style={descTitle}>Members</Text>

          {MembersData.map(member => {
            return (
              <View style={{flexDirection: 'row', marginBottom: Sizes.size10}}>
                <Image source={member.membImg} style={image} />
                <View style={memberView}>
                  <Text style={memberName}>
                    {member.membName}
                    {member.membSurname}
                  </Text>
                  <Text style={memberName}>{member.membSpec}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

export default ProjectInfo;
