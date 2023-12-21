import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { REVIEWS } from "../constant";
import { StarIcon } from "../assets/icons/icon";
import { styles } from "../screen/Home/styles";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../navigation/routes";

const Review = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reviews}>
      <View style={styles.reviewsHead}>
        <Text style={styles.reviewsText}>Отзывы</Text>
        <TouchableOpacity>
          <Text style={styles.allReviws}>Посмотреть все</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ borderRadius: 10, marginTop: 13 }}
      >
        <View style={styles.reviewsCards}>
          {REVIEWS.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.reviewsCard}
                onPress={() => {
                  navigation.navigate(ROUTES.HOME.ALLREVIEWS as never);
                }}
              >
                <View style={styles.cardHead}>
                  <Image source={e.images} />
                  <Text style={styles.reviewsTitle}>{e.name}</Text>

                  <View style={styles.star}>
                    <StarIcon />
                    <Text style={styles.starText}>{e.star}</Text>
                  </View>
                </View>
                <Text style={styles.comment}>{e.comment}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Review;
