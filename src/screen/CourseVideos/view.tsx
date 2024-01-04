import React from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {ArrowIcon, ClockIcon} from '../../assets/icons/icon';
import {useCourseVideoHook} from './hooks';
import {styles} from './style';

const CourseVideosView = () => {
  const {
    goBack,
    onCoursePress,
    videos,
    name,
    shouldBuy,
    shouldRegister,
    onBuyPress,
  } = useCourseVideoHook();

  return (
    <View style={{paddingTop: 40, flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <ArrowIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={{flex: 1}}>
        <ScrollView>
          {videos.map((e, index) => {
            return (
              <TouchableOpacity
                onPress={onCoursePress(e)}
                key={index}
                disabled={!e.public && (shouldBuy || shouldRegister)}
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
                  <View style={styles.star}>
                    <ClockIcon />
                    <Text style={styles.startText}>{e.duration}</Text>
                  </View>
                </View>
                {!e.public && (shouldBuy || shouldRegister) ? (
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>
                      Iltimos bu videodarsliklardan foydalanish uchun{' '}
                      {shouldBuy ? 'kursni sotib oling' : "ro'yxatdan o'ting"}
                    </Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {shouldBuy && (
        <TouchableOpacity onPress={onBuyPress} style={styles.button}>
          <Text style={styles.buttonText}>Sotib olish</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CourseVideosView;
