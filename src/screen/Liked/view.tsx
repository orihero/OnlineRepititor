import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {useFavoritesHook} from './hooks';
import {PopIcon, StarIcon} from '../../assets/icons/icon';
import LottieView from 'lottie-react-native';

const LikedScreen = () => {
  const {favorites} = useFavoritesHook();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.likedContainer}>
          <Text style={styles.head}>Saqlanganlar</Text>
          <View style={styles.cards}>
            {favorites.length > 0 ? (
              favorites.map((e, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.card}>
                    <Image
                      source={{uri: e.cover}}
                      style={{width: 93, height: 91, borderRadius: 10}}
                    />
                    <View style={styles.coursAbout}>
                      <View style={{flex: 1}}>
                        <Text style={styles.title}>{e.name}</Text>
                        <View style={styles.priceLesson}>
                          <View style={styles.price}>
                            {!!e.author && (
                              <Text style={styles.coursPrice}>
                                O'qituvchi: {e.author}
                              </Text>
                            )}
                            {/* <Text style={styles.oldPrice}>{e.oldPrice}</Text> */}
                          </View>
                        </View>
                      </View>
                      <View style={styles.coursPeople}>
                        <View style={styles.popular}>
                          <PopIcon />
                          <Text style={styles.popText}>{e.people}</Text>
                        </View>
                        <View style={styles.star}>
                          <StarIcon />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })
            ) : (
              <>
                <LottieView
                  source={require('../../assets/lottie/empty.json')}
                  style={{width: 250, height: 300, alignSelf: 'center'}}
                  autoPlay
                />
                <Text style={{textAlign: 'center'}}>
                  Sizda saqlangan kurslar yoq!
                </Text>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LikedScreen;
