import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ArrowIcon, RemoveIcon, StarIcon} from '../../assets/icons/icon';
import {MY_REVIEWS} from '../../constants';
import {useGoBackHook} from '../../common/hooks';

const MyReviewsScreen = () => {
  const goBack = useGoBackHook();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <ArrowIcon />
            </TouchableOpacity>
            <Text style={styles.title}>Мои отзывы</Text>
          </View>
          <View style={styles.cards}>
            {MY_REVIEWS.map((e, index) => {
              return (
                <Pressable key={index} style={styles.card}>
                  <View style={styles.cardHead}>
                    <View style={styles.head}>
                      <Image source={e.images} />
                      <Text style={styles.name}>{e.name}</Text>
                    </View>
                    <View style={styles.starView}>
                      <StarIcon />
                      <Text style={styles.starText}>{e.star}</Text>
                    </View>
                  </View>
                  <Text style={styles.desc}>{e.desc}</Text>
                  <TouchableOpacity style={styles.remove}>
                    <RemoveIcon />
                  </TouchableOpacity>
                </Pressable>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyReviewsScreen;
