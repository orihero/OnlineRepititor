import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ArrowIcon, DateIcon} from '../../assets/icons/icon';
import {TranSactionHooks} from './hooks';
import {useGoBackHook} from '../../common/hooks';

const TransactionsScreen = () => {
  const {onMyReviews} = TranSactionHooks();
  const goBack = useGoBackHook();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.transContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <ArrowIcon />
            </TouchableOpacity>
            <Text style={styles.title}>Транзакции</Text>
          </View>
          <View style={styles.cards}>
            {[1, 2, 3, 4, 5, 6, 7].map(e => {
              return (
                <TouchableOpacity
                  key={e}
                  style={styles.card}
                  onPress={onMyReviews}>
                  <View style={styles.cardHead}>
                    <Text style={styles.id}>ID 7</Text>
                    <View style={styles.date}>
                      <DateIcon />
                      <Text style={styles.dateText}>16.09.2023</Text>
                    </View>
                  </View>
                  <Text style={styles.name}>Английский с Андреем</Text>
                  <View style={styles.status}>
                    <Text style={styles.statusText}>Статус:</Text>
                    <Text style={styles.paid}>Оплачено</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionsScreen;
