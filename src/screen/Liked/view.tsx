import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native";
import { styles } from './styles';
import { LIKED_CARD } from '../../constant';
import { PopIcon, StarIcon } from '../../assets/icons/icon';


const LikedScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.likedContainer}>
          <Text style={styles.head}>Избранное</Text>
          <View style={styles.cards}>
            {LIKED_CARD.map((e, index) => {
              return (
                <TouchableOpacity key={index} style={styles.card}>
                  <Image source={e.images} style={{width:93, height: 91, borderRadius: 10}}/>
                  <View style={styles.coursAbout}>
                    <Text style={styles.title}>{e.title}</Text>
                    <View style={styles.priceLesson}>
                      <View style={styles.price}>
                        <Text style={styles.coursPrice}>{e.price}$</Text>
                        <Text style={styles.oldPrice}>{e.oldPrice}$</Text>
                      </View>
                      <View style={styles.coursPeople}>
                        <View style={styles.popular}>
                          <PopIcon/>
                          <Text style={styles.popText}>{e.people}</Text>
                        </View>
                        <View style={styles.star}>
                          <StarIcon/>
                          <Text style={styles.startText}>{e.star}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LikedScreen