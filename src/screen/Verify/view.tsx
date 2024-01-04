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
import {useVerifyHook} from './hooks';

const VerifyScreen = () => {
  const {loading, onOtpChange, otp, onConfirmPress, phone} = useVerifyHook();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logInContainer}>
        <View>
          <Logo />
        </View>
        <View style={styles.authorization}>
          <Text style={styles.authorizationText}>Kodni tasdiqlash</Text>
          <Text style={styles.authorizationDic}>
            Biz sizning {phone} raqamingizga SMS yubordik. Ushbu SMS dagi kodni
            quyidagi joyga kiriting:
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Maxfiy kod ****"
            placeholderTextColor={'#C9C9C9'}
            style={styles.input}
            onChangeText={onOtpChange}
            value={otp}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={onConfirmPress}>
            {loading ? (
              <ActivityIndicator color={'white'} size="large" />
            ) : (
              <Text style={styles.buttonText}>Tasdiqlash</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyScreen;
