import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ArrowIcon,
  PopIcon,
  RatingArrowIcon,
  RatingIcon,
} from '../../assets/icons/icon';
import {CourseHooks} from './hooks';
import {styles} from './styles';
import {useGoBackHook} from '../../common/hooks';
import Video from 'react-native-video-controls';

const CourseScreen = () => {
  const {onFilterPress, course, onCoursePress} = CourseHooks();
  const goBack = useGoBackHook();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{paddingBottom: 30}}>
        <View style={styles.courseContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <ArrowIcon />
            </TouchableOpacity>
            <View style={styles.courseHead}>
              <View>
                <Text style={styles.title}>{course.name}</Text>
                <Text style={styles.course}>{course.courseCount}</Text>
              </View>
              {/* <TouchableOpacity style={styles.rating} onPress={onFilterPress}>
                <RatingIcon />
              </TouchableOpacity> */}
            </View>
          </View>
          {/* <View style={styles.ratingList}>
            <Text>Сортировка:</Text>
            <Pressable style={styles.arrow}>
              <Text style={styles.arrowText}>По рейтингу</Text>
              <RatingArrowIcon />
            </Pressable>
            <Pressable style={styles.arrow}>
              <Text style={styles.arrowText}>По цене</Text>
              <RatingArrowIcon />
            </Pressable>
          </View> */}
          {course.videoUrl && (
            <Video
              style={{
                width: Dimensions.get('window').width,
                height: 300,
                marginLeft: -20,
              }}
              source={{uri: course.videoUrl}}
              showOnStart={false}
              disableBack
              disableSeekbar
            />
          )}
          <View style={styles.cards}>
            {course?.courses?.map((e, index) => {
              return (
                <TouchableOpacity
                  onPress={() => onCoursePress(e)}
                  key={index}
                  style={styles.card}>
                  <Image
                    source={{uri: e.cover}}
                    style={{width: 93, height: 91, borderRadius: 10}}
                  />
                  <View style={styles.coursAbout}>
                    <Text style={styles.titleCard}>{e.name}</Text>
                    <View style={styles.priceLesson}>
                      {/* <View style={styles.price}>
                        <Text style={styles.coursPrice}>{e.price}$</Text>
                        <Text style={styles.oldPrice}>{e.oldPrice}$</Text>
                      </View> */}
                      <View style={styles.coursPeople}>
                        <View style={styles.popular}>
                          <PopIcon />
                          <Text style={styles.popText}>{course.people}</Text>
                        </View>
                        <View style={styles.star}>
                          {/* <StarIcon /> */}
                          <Text style={styles.startText}>
                            O'qituvchi: {course.author}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseScreen;
