import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './style';
import {ROUTES} from '../../navigation/routes';
import {ArrowIcon, ClockIcon, StarIcon} from '../../assets/icons/icon';
import {useGoBackHook} from '../../common/hooks';

const CourseVideosView = () => {
  const route = useRoute();
  let videos = route.params?.item?.content || [];
  let navigation = useNavigation();
  const onVideoPress = data => {
    navigation.navigate(ROUTES.HOME.COURSE_INFO, data);
  };
  const onTestPress = (test: any) => {
    navigation.navigate(ROUTES.HOME.COURSE_TEST, test);
  };
  const goBack = useGoBackHook();
  return (
    <View style={{paddingTop: 40}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <ArrowIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{route.params.item.name}</Text>
      </View>
      {videos.map((e, index) => {
        return (
          <TouchableOpacity
            onPress={() =>
              !e.test
                ? onVideoPress({url: e.videoUrl, content: e.content})
                : onTestPress({test: e.test, title: e.title})
            }
            key={index}
            style={styles.card}>
            <Image
              source={{
                uri:
                  e.icon ||
                  'https://static.thenounproject.com/png/3196925-200.png',
              }}
              style={{width: 93, height: 91, borderRadius: 10}}
            />
            <View style={styles.coursAbout}>
              <Text style={styles.titleCard}>{e.title}</Text>
              <View style={styles.priceLesson}>
                {/* <View style={styles.price}>
                        <Text style={styles.coursPrice}>{e.price}$</Text>
                        <Text style={styles.oldPrice}>{e.oldPrice}$</Text>
                      </View> */}
                <View style={styles.coursPeople}>
                  <View style={styles.star}>
                    <ClockIcon />
                    <Text style={styles.startText}>{e.duration}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CourseVideosView;
