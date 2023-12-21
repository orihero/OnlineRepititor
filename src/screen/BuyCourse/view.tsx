import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {ArrowIcon, PopIcon, StarIcon} from '../../assets/icons/icon';
import {styles} from './styles';
import {LIKED_CARD} from '../../constant';
import Review from '../../components/review';
import {useGoBackHook} from '../../common/hooks';

const BuyCourseScreen = () => {
  const goBack = useGoBackHook();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.courseContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <ArrowIcon />
            </TouchableOpacity>
            <View style={styles.profile}>
              <Image
                source={require('../../assets/images/profileUpload.png')}
              />
              <View>
                <Text style={styles.name}>Рафаэль Ройтман</Text>
                <Text style={styles.desc}>Преподаватель по английскому</Text>
                <View style={styles.population}>
                  <View style={styles.popular}>
                    <PopIcon />
                    <Text style={styles.popText}>189</Text>
                  </View>
                  <View style={styles.starView}>
                    <StarIcon />
                    <Text style={styles.starText}>5.0</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.course}>
            <Text style={styles.courseTitle}>Курсы</Text>
            <View style={styles.cards}>
              {LIKED_CARD.map((e, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.card}>
                    <Image
                      source={e.images}
                      style={{width: 93, height: 91, borderRadius: 10}}
                    />
                    <View style={styles.coursAbout}>
                      <Text style={styles.title}>{e.title}</Text>
                      <View style={styles.priceLesson}>
                        <View style={styles.price}>
                          <Text style={styles.coursPrice}>{e.price}$</Text>
                          <Text style={styles.oldPrice}>{e.oldPrice}$</Text>
                        </View>
                        <View style={styles.coursPeople}>
                          <View style={styles.popular}>
                            <PopIcon />
                            <Text style={styles.popText}>{e.people}</Text>
                          </View>
                          <View style={styles.star}>
                            <StarIcon />
                            <Text style={styles.startText}>{e.star}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.descCard}>
              <Text style={styles.descTitle}>О преподавателе</Text>
              <Text style={styles.description}>
                Welcome to the 100 Days of Code - The Complete Python Pro
                Bootcamp, the only course you need to learn to code with Python.
                With over 500,000 5 STAR reviews and a 4.8 average, my courses
                are some of the HIGHEST RATED courses in the history of Udemy!
              </Text>
            </View>
            <Review />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BuyCourseScreen;
