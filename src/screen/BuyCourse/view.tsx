import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import Video from 'react-native-video';
import Video from 'react-native-video-controls';
import {ArrowIcon} from '../../assets/icons/icon';
import {COURSES} from '../../constant';
import {useBuyCourseHook} from './hooks';
import {styles} from './style';

const service_id = '31135';
const merchant_id = '23305';
const amount = '1400000.00';
// &transaction_param={transaction_param}&return_url={return_url}&card_type={card_type}

const CLICK_URL = `https://my.click.uz/services/pay?service_id=${service_id}&merchant_id=${merchant_id}&amount=${amount}&transaction_param=test`;

const BuyCourseScreen = () => {
  const {goBack, onSelectCourse, selectedCourses} = useBuyCourseHook();

  // return (
  //   <View style={{backgroundColor: 'red', flex: 1}}>
  //     <Video
  //       source={{
  //         uri: 'https://d1kuux35i7xqfi.cloudfront.net/o8aBIcUReE6rwCD9BHgFkiyGQfvZlREBAg6xKA.mp4',
  //       }}
  //       style={{width: Dimensions.get('window').width, height: 100}}
  //     />
  //   </View>
  // );

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <ArrowIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Asosiy ikki blokingizni tanlang</Text>
      </View>
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingBottom: 220}}>
          {COURSES.map((e, index) => {
            let isActive = selectedCourses.includes(index);
            return (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => onSelectCourse(index)}
                  key={index}
                  style={[
                    styles.card,
                    isActive && {
                      backgroundColor: '#0600ac',
                    },
                  ]}>
                  <Image
                    source={{uri: e.cover}}
                    style={{width: 93, height: 90, borderRadius: 10}}
                  />
                  <View style={styles.coursAbout}>
                    <Text style={[styles.title, isActive && {color: 'white'}]}>
                      {e.name}
                    </Text>
                    {!!e.author && (
                      <Text
                        style={[
                          styles.coursPrice,
                          isActive && {color: 'white'},
                        ]}>
                        O'qituvchi: {e.author}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.infoCard}>
        <Text>Sizga ushbu majburiy fanlar tekinga qo'shib beriladi</Text>
        <Text>Tarix: Abduhakimov Otabek</Text>
        <Text>Ona tili: Somebody Some</Text>
        <Text>Matematika: Somebody Some</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(CLICK_URL)}
          style={styles.button}>
          <Text style={styles.buttonText}>Sotib olish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuyCourseScreen;
