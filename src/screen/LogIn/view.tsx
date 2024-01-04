import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import Logo from '../../components/Logo';
import {useLoginHook} from './hooks';

const LogInScreen = () => {
  const {onLoginPress, onRegisterPress, phone, loading, onPhoneChange} =
    useLoginHook();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logInContainer}>
        <View>
          <Logo />
        </View>
        <View style={styles.authorization}>
          <Text style={styles.authorizationText}>Kabinetga kirish</Text>
          <Text style={styles.authorizationDic}>
            Tizimning barcha funksiyalarini to'liq ishlatish uchun
            kabinetingizga kiring
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Raqam +998  77  666  55  44"
            placeholderTextColor={'#C9C9C9'}
            style={styles.input}
            onChangeText={onPhoneChange}
            value={phone}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={onLoginPress}>
            {loading ? (
              <ActivityIndicator color={'white'} size="large" />
            ) : (
              <Text style={styles.buttonText}>Kirish</Text>
            )}
          </TouchableOpacity>
          <Pressable onPress={onRegisterPress}>
            <Text style={styles.noAccount}>Ro'yxatdan o'tmadingizmi?</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogInScreen;
