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
import {ArrowIcon, StarIcon} from '../../assets/icons/icon';
import {useGoBackHook} from '../../common/hooks';

const AllReviesScreen = () => {
  const goBack = useGoBackHook();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <ArrowIcon />
            </TouchableOpacity>
            <Text style={styles.title}>Все отзывы</Text>
          </View>
          <View style={styles.cards}>
            {[1, 2, 3, 4, 5, 6].map(e => {
              return (
                <View key={e} style={styles.card}>
                  <View style={styles.cardHead}>
                    <View style={styles.profile}>
                      <Image
                        source={require('../../assets/images/profile.png')}
                      />
                      <Text style={styles.name}>Рафаэль Ройтман</Text>
                    </View>
                    <View style={styles.star}>
                      <StarIcon />
                      <Text style={styles.starText}>5.0</Text>
                    </View>
                  </View>
                  <Text style={styles.desc}>
                    You will master the Python programming language by building
                    100 unique projects over 100 days.
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllReviesScreen;
