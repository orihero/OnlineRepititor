import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ArrowIcon, PopIcon, SavedIcon, StarIcon} from '../../assets/icons/icon';
import CourseIncludes from './components/courseIncludes';
import Learn from './components/learn';
import MaterialCourse from './components/materialCourse';
import Description from './components/description';
import Review from '../../components/review';
import {EnglishWithHooks} from './hooks';
import {useGoBackHook} from '../../common/hooks';

const EnglishWithScreen = () => {
  const {onBuyCoursePress} = EnglishWithHooks();
  const goBack = useGoBackHook();
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.englishContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={goBack}>
                <ArrowIcon />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={styles.title}>Английский с Андреем</Text>
                  <View style={styles.interesting}>
                    <View style={styles.population}>
                      <PopIcon />
                      <Text style={styles.populationText}>189</Text>
                    </View>
                    <View style={styles.star}>
                      <StarIcon />
                      <Text style={styles.starText}>5.0</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity>
                  <SavedIcon />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.includes}>
              <CourseIncludes />
            </View>
            <View style={styles.learn}>
              <Learn />
            </View>
            <View style={styles.material}>
              <MaterialCourse />
            </View>
            <View style={styles.descript}>
              <Description />
            </View>
            <Review />
            <View style={styles.author}>
              <Text style={styles.authorTitle}>Автор курса</Text>
              <View style={styles.authorCard}>
                <View style={styles.starView}>
                  <StarIcon />
                  <Text style={styles.starText}>5.0</Text>
                </View>
                <Image
                  source={require('../../assets/images/profileUpload.png')}
                  style={{width: 53, height: 53}}
                />
                <View>
                  <Text style={styles.name}>Рафаэль Ройтман</Text>
                  <Text style={styles.comment}>
                    Преподаватель по английскому
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.price}>Стоимость:</Text>
          <Text style={styles.total}>10$</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onBuyCoursePress}>
          <Text style={styles.buttonText}>Купить</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EnglishWithScreen;
