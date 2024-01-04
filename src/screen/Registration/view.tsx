import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {ArrowIcon} from '../../assets/icons/icon';
import {useRegisterHook} from './hooks';

const RegistrationScreen = () => {
  const {goBack, onSubmit, getInputProps, loading} = useRegisterHook();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.registerContainer}>
          <View style={styles.header}>
            <Pressable onPress={goBack}>
              <ArrowIcon />
            </Pressable>
            <Text style={styles.title}>Ro'yxatdan o'tish</Text>
          </View>
          <View style={styles.inputContainer}>
            <View>
              <Text>Ism</Text>
              <TextInput
                placeholderTextColor="#C8C8C8"
                placeholder="Eshmat"
                style={styles.input}
                {...getInputProps('name')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text>Familiya</Text>
              <TextInput
                placeholderTextColor="#C8C8C8"
                placeholder="Toshmatov"
                style={styles.input}
                {...getInputProps('surname')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text>Telefon raqam</Text>
              <TextInput
                placeholderTextColor={'#C8C8C8'}
                placeholder="+998776665544"
                style={styles.input}
                {...getInputProps('phone')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text>Ota onangiz telefon raqami</Text>
              <TextInput
                placeholderTextColor={'#C8C8C8'}
                placeholder="+998776665544"
                style={styles.input}
                {...getInputProps('parentNumber')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text>Tug'ilgan yilingiz</Text>
              <TextInput
                placeholderTextColor={'#C8C8C8'}
                placeholder="01.01.1980"
                style={styles.input}
                {...getInputProps('dateOfBirth')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text>Email</Text>
              <TextInput
                placeholderTextColor={'#C8C8C8'}
                placeholder="example@gmail.com"
                style={styles.input}
                {...getInputProps('email')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text>Viloyat</Text>
              <TextInput
                placeholderTextColor={'#C8C8C8'}
                placeholder="Toshkent"
                style={styles.input}
                {...getInputProps('region')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text>Tuman</Text>
              <TextInput
                placeholderTextColor={'#C8C8C8'}
                placeholder="Yakkasaroy"
                {...getInputProps('district')}
                style={styles.input}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            {loading ? (
              <ActivityIndicator color={'white'} size={'large'} />
            ) : (
              <Text style={styles.buttonText}>Ro'yxatdan o'tish</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
