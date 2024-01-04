import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {PopIcon, SearchIcon, StarIcon} from '../../assets/icons/icon';
import {COURSES, INFORMATION, TOP_COURSES} from '../../constant';
import {styles} from './styles';
import Review from '../../components/review';
import {HomeHooks} from './hooks';
import LottieView from 'lottie-react-native';

const HomeScreen = () => {
  const {
    onCoursePress,
    onApply,
    onValueChange,
    state,
    onFavoritePress,
    favorites,
    courses,
    search,
    onSearchChange,
  } = HomeHooks();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.homeContainer}>
          <View>
            <Text style={styles.headText}>Qidirish</Text>
            <View style={styles.search}>
              <TextInput
                placeholder="Kurs nomi"
                style={{width: 200, fontSize: 15}}
                value={search}
                onChangeText={onSearchChange}
              />
              <Pressable>
                <SearchIcon />
              </Pressable>
            </View>
          </View>
          <View style={styles.category}>
            <View style={styles.categoryHead}>
              <Text style={styles.categoryText}>Kurslar</Text>
              {/* <TouchableOpacity onPress={onCategoryPress}> */}
              {/* <Text style={styles.allCategory}>Barchasini ko'rish</Text> */}
              {/* </TouchableOpacity> */}
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{borderRadius: 10, marginTop: 13}}>
              <View style={styles.cards}>
                {courses.map((e, index) => {
                  let isFavorite = !!favorites[e.id];
                  return (
                    <>
                      <TouchableOpacity
                        key={index}
                        style={styles.courseCard}
                        disabled={!e.courses}
                        onPress={() => onCoursePress(e)}>
                        <Image
                          source={{
                            uri:
                              e.cover ||
                              'https://images.squarespace-cdn.com/content/v1/629acd14894a462d58ab1243/5a229a42-4031-43d8-8aba-b12e39c11982/AdobeStock_139559217.jpeg',
                          }}
                          style={{
                            width: 163,
                            height: 120,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          }}
                        />
                        <View style={styles.popular}>
                          <View style={styles.popIcon}>
                            <PopIcon />
                            <Text style={styles.popText}>{e.people}</Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => onFavoritePress(e.id)}>
                            <View style={styles.star}>
                              <StarIcon filled={isFavorite} />
                            </View>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>{e.name}</Text>
                        {!!e.author && (
                          <Text
                            style={[styles.priceText, {textAlign: 'center'}]}>
                            O'qituvchi: {e.author}
                          </Text>
                        )}

                        {/* <View style={styles.price}>
                          <Text style={styles.priceText}>{e.price}</Text>
                          <Text style={styles.oldPrice}>{e.oldPrice}</Text>
                        </View> */}
                      </TouchableOpacity>
                    </>
                  );
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.card}
                      onPress={() => onCoursePress(e)}>
                      <Image
                        source={{uri: e.cover}}
                        style={styles.cardImage}
                        resizeMode="cover"
                      />
                      <View>
                        <Text style={styles.cardText}>{e.name}</Text>
                        <Text style={styles.priceText}>{e.price}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styles.topCourse}>
            <View style={styles.courseHead}>
              <Text style={styles.courseText}>Xarid qilingan kurslar</Text>
              {/* <TouchableOpacity onPress={onCoursePress}>
                <Text style={styles.allCourse}>Посмотреть все</Text>
              </TouchableOpacity> */}
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{borderRadius: 10, marginTop: 13}}>
              <View style={styles.courseCards}>
                {/* {TOP_COURSES.map((e, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.courseCard}
                      onPress={onCoursePress}
                    >
                      <Image source={e.images} />
                      <View style={styles.popular}>
                        <View style={styles.popIcon}>
                          <PopIcon />
                          <Text style={styles.popText}>{e.popular}</Text>
                        </View>
                        <View style={styles.star}>
                          <StarIcon />
                          <Text style={styles.starText}>{e.star}</Text>
                        </View>
                      </View>
                      <Text style={styles.title}>{e.title}</Text>
                      <View style={styles.price}>
                        <Text style={styles.priceText}>{e.price}$</Text>
                        <Text style={styles.oldPrice}>{e.oldPrice}$</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })} */}
                <View
                  style={{
                    width: Dimensions.get('screen').width - 40,
                    height: 200,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LottieView
                    source={require('../../assets/lottie/empty.json')}
                    style={{width: 150, height: 150}}
                    autoPlay
                  />
                  <Text>Sizda sotib olingan kurslar yo'q</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.information}>
            {INFORMATION.map((e, index) => {
              return (
                <View key={index} style={styles.inforCard}>
                  <Image source={e.images} />
                  <View>
                    <Text style={styles.about}>{e.about}</Text>
                    <Text style={styles.dec}>{e.dec}</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.subscribe}>
            <Text style={styles.subscribeText}>
              Taklif yoki shikoyatingiz bormi?
            </Text>
            <Text style={styles.subscribeDict}>
              Pastdagi ma'lumotlarni to'ldirib yuboring biz siz bilan albatta
              bog'lanamiz
            </Text>
            <View style={styles.subscribeInput}>
              <TextInput
                onChangeText={onValueChange('name')}
                placeholder="Ism Familiya"
                style={styles.input}
                value={state.name}
              />
              <TextInput
                onChangeText={onValueChange('number')}
                placeholder="Telefon raqam"
                style={styles.input}
                value={state.number}
              />
              <TextInput
                multiline
                onChangeText={onValueChange('message')}
                placeholder="Xabar"
                style={[styles.input, {height: 120, textAlignVertical: 'top'}]}
                value={state.message}
              />
              <TouchableOpacity onPress={onApply} style={styles.button}>
                <Text style={styles.buttonText}>Yuborish</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
