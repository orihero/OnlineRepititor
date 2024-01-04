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
import {CircleIcon, LogoutIcon} from '../../assets/icons/icon';
import {useProfileHook} from './hooks';
import {styles} from './styles';

const ProfileScreen = () => {
  const {
    onChangeProfileHooks,
    onRegisterPress,
    accessToken,
    user,
    onLogoutPress,
  } = useProfileHook();

  if (!accessToken || !user || Object.keys(user).length <= 0) {
    return (
      <View>
        <LottieView
          autoPlay
          source={require('../../assets/lottie/profile.json')}
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').width,
          }}
        />
        <Text style={{textAlign: 'center'}}>
          O'z profilingizni ko'rish uchun{' '}
        </Text>
        <TouchableOpacity
          style={[styles.button, {width: '80%', alignSelf: 'center'}]}
          onPress={onRegisterPress}>
          <Text style={styles.buttonText}>Ro'yxatdan o'ting</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.head}>Shaxsiy ma'lumotlar</Text>
            <TouchableOpacity onPress={onLogoutPress}>
              <LogoutIcon stroke={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.profileUpload}>
            <View>
              <Image
                source={require('../../assets/images/profileUpload.png')}
              />
              <View style={styles.circle}>
                <CircleIcon />
              </View>
            </View>
            <View>
              <Text style={styles.name}>{user.name.split(' ').join('\n')}</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#C8C8C8', fontWeight: '500'}}>Email</Text>
              <TextInput style={styles.input} value={user.email} />
            </View>

            <View style={{marginTop: 13}}>
              <Text style={{color: '#C8C8C8', fontWeight: '500'}}>
                Tug'ilgan sana
              </Text>
              <TextInput style={styles.input} value={user.dateOfBirth} />
            </View>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#C8C8C8', fontWeight: '500'}}>
                Telefon raqami
              </Text>
              <TextInput style={styles.input} value={user.phone} />
            </View>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#C8C8C8', fontWeight: '500'}}>
                Ota onasining telefon raqami
              </Text>
              <TextInput style={styles.input} value={user.parentNumber} />
            </View>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#C8C8C8', fontWeight: '500'}}>Viloyat</Text>
              <TextInput style={styles.input} value={user.region} />
            </View>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#C8C8C8', fontWeight: '500'}}>Tuman</Text>
              <TextInput style={styles.input} value={user.district} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={onChangeProfileHooks}>
            <Text style={styles.buttonText}>O'zgartirish</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
