import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import Video from 'react-native-video';
import {ArrowIcon} from '../../assets/icons/icon';
import {COURSES} from '../../constants';
import {useBuyCourseHook} from './hooks';
import {styles} from './style';
import {SERVER_URL} from '../../api/requests';

export const CLICK_SERVICE_ID = '31135';
export const CLICK_MERCHANT_ID = '23305';
const amount = '1000.00';
// &transaction_param={transaction_param}&return_url={return_url}&card_type={card_type}

//https://my.click.uz/services/pay?service_id={service_id}&merchant_id={merchant_id}&amount={amount}&transaction_param={transaction_param}&return_url={return_url}

const BuyCourseScreen = () => {
  const {goBack, onSelectCourse, selectedCourses, userPhone} =
    useBuyCourseHook();

  const return_url = `${SERVER_URL}/paymentSuccessfull?courses=${selectedCourses}`;
  const CLICK_URL = `https://my.click.uz/services/pay?service_id=${CLICK_SERVICE_ID}&merchant_id=${CLICK_MERCHANT_ID}&amount=${amount}&transaction_param=${userPhone}`;
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
        <Text>Ona tili: Muratova Zilola</Text>
        <Text>Matematika: Eldor Hamroyev</Text>
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
