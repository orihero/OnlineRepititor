import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ArrowIcon} from '../../assets/icons/icon';
import {COURSES} from '../../constants';
import {useBuyCourseHook} from './hooks';
import {styles} from './style';

const BuyCourseScreen = () => {
  const {goBack, onSelectCourse, selectedCourses, onBuyPress, loading} =
    useBuyCourseHook();

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
          disabled={loading || selectedCourses.length !== 2}
          onPress={onBuyPress}
          style={[
            styles.button,
            selectedCourses.length !== 2 && {backgroundColor: 'gray'},
          ]}>
          {loading ? (
            <ActivityIndicator size={'large'} color={'white'} />
          ) : (
            <Text style={styles.buttonText}>Sotib olish</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuyCourseScreen;
