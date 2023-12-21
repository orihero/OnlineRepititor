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
import {useGoBackHook} from '../../common/hooks';

const NotificationScreen = () => {
  const goBack = useGoBackHook();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.notificationContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <ArrowIcon />
            </TouchableOpacity>
            <Text style={styles.title}>Уведомления</Text>
          </View>
          <View style={styles.notificationCard}>
            <Text style={styles.version}>Обновление приложения 2.0</Text>
            <View style={styles.date}>
              <DateIcon />
              <Text style={styles.dateText}>16.09.2023</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
