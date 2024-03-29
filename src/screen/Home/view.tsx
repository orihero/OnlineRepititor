import LottieView from 'lottie-react-native';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COURSES, INFORMATION} from '../../constants';
import {HomeHooks} from './hooks';
import {styles} from './styles';

const CourseItem = ({
  item: e,
  onPress,
}: {
  onPress: (item: (typeof COURSES)[0]) => void;
  item: (typeof COURSES)[0];
}) => {
  return (
    <TouchableOpacity key={e.name} onPress={() => onPress(e)}>
      <View style={styles.crsCrd}>
        <View>
          <Text style={styles.crdTitle}>{e.name}</Text>
          <Text>{e.author}</Text>
        </View>
        <Image
          style={{width: 80, height: 80, borderRadius: 80}}
          source={{uri: e.cover}}
        />
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const {
    onApply,
    onValueChange,
    state,
    onCoursePress,
    onIIVPress,
    purchasedCourses,
  } = HomeHooks();

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.homeContainer}>
          {!!purchasedCourses && purchasedCourses.length > 0 && (
            <View style={styles.topCourse}>
              <View style={styles.courseHead}>
                <Text style={styles.courseText}>Xarid qilingan kurslar</Text>
              </View>
              {purchasedCourses.map(e => {
                return (
                  <CourseItem onPress={onCoursePress} item={e} key={e.id} />
                );
              })}
            </View>
          )}
          <View style={styles.category}>
            <View style={styles.categoryHead}>
              <Text style={styles.categoryText}>Kurslar</Text>
            </View>
          </View>
          {COURSES.map((e, i) => {
            return <CourseItem item={e} onPress={onCoursePress} />;
          })}
          <View style={styles.category}>
            <View style={styles.categoryHead}>
              <Text style={styles.categoryText}>Xizmatlar</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onIIVPress}>
            <View style={styles.serviceCard}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/800px-Emblem_of_Uzbekistan.svg.png',
                }}
                style={styles.iivImage}
              />
              <View style={styles.serviceTextContainer}>
                <Text style={styles.serviceTitle}>IIV Litseyga tayyorlov</Text>
                <Text style={styles.serviceDescription}>
                  IIV Litseylariga kirish uchun to'liq psixologik test, fanlar,
                  jismoniy tayyorgarlik va tiktant qo'llanmalari jamlanmasi
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.serviceCard}>
            <Image
              source={{
                uri: 'https://uzbmb.uz/upload/file/post/news/Icon/dtm.jpg',
              }}
              style={styles.iivImage}
            />
            <View style={styles.serviceTextContainer}>
              <Text style={styles.serviceTitle}>DTM test topshirish</Text>
              <Text style={styles.serviceDescription}>
                O'zlashtirgan bilimlaringizni DTM tomonidan tasdiqlangan testni
                yechib tekshiring
              </Text>
            </View>
          </View>
          <View style={styles.serviceCard}>
            <Image
              source={{
                uri: 'https://uzbmb.uz/upload/file/post/news/Icon/dtm.jpg',
              }}
              style={styles.iivImage}
            />
            <View style={styles.serviceTextContainer}>
              <Text style={styles.serviceTitle}>Test tahlili</Text>
              <Text style={styles.serviceDescription}>
                Javobsiz yoki qiyinchilik tug'dirgan testlar yechimlari va
                to'liq tahlini video dars korinishida o'rganing
              </Text>
            </View>
          </View>
          {!purchasedCourses ||
            (purchasedCourses.length == 0 && (
              <View style={styles.topCourse}>
                <View style={styles.courseHead}>
                  <Text style={styles.courseText}>Xarid qilingan kurslar</Text>
                </View>
                <View style={styles.courseCards}>
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
              </View>
            ))}
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

/**
 *  <ScrollView
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
 */
