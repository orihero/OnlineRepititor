import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {iivStyles} from './style';
import {ArrowIcon} from '../../assets/icons/icon';
import {useGoBackHook} from '../../common/hooks';
import {COURSES} from '../../constants';
import {useIIVHook} from './hooks';

const IIVScreen = () => {
  const goBack = useGoBackHook();
  const {courses, onCoursePress} = useIIVHook();

  return (
    <ScrollView style={iivStyles.container}>
      <View style={iivStyles.header}>
        <TouchableOpacity onPress={goBack}>
          <ArrowIcon />
        </TouchableOpacity>
        <View style={iivStyles.courseHead}>
          <View>
            <Text style={iivStyles.title}>IIV litseyiga tayyorlov</Text>
          </View>
        </View>
      </View>
      {courses.map((e, i) => {
        return (
          <TouchableOpacity onPress={() => onCoursePress(e)} key={e.name}>
            <View style={iivStyles.crsCrd}>
              <View>
                <Text style={iivStyles.crdTitle}>{e.name}</Text>
                <Text>{e.author}</Text>
              </View>
              <Image
                style={{width: 80, height: 80, borderRadius: 80}}
                source={{uri: e.cover}}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default IIVScreen;
