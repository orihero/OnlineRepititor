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
import SelectDropdown from 'react-native-select-dropdown';
import MaskInput from 'react-native-mask-input';
import {PHONE_INPUT_PROPS} from '../../common/configs';

const RegistrationScreen = () => {
  const {goBack, onSubmit, getInputProps, loading, onTCPress} =
    useRegisterHook();

  const {onChangeText, value} = getInputProps('affilateSource');

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
              <Text style={{color: '#343936'}}>Ism</Text>
              <TextInput
                placeholderTextColor="#343936"
                style={styles.input}
                {...getInputProps('name')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#343936'}}>Familiya</Text>
              <TextInput
                placeholderTextColor="#343936"
                style={styles.input}
                {...getInputProps('surname')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#343936'}}>Telefon raqam</Text>
              <TextInput
                placeholderTextColor="#343936"
                style={styles.input}
                {...getInputProps('phone')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#343936'}}>Ota onangiz telefon raqami</Text>
              <MaskInput
                placeholderTextColor="#343936"
                style={styles.input}
                {...PHONE_INPUT_PROPS}
                {...getInputProps('parentNumber')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#343936'}}>
                Tug'ilgan yilingiz (01.01.2005)
              </Text>
              <MaskInput
                placeholderTextColor="#343936"
                style={styles.input}
                mask={[
                  /\d/,
                  /\d/,
                  '.',
                  /\d/,
                  /\d/,
                  '.',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                {...getInputProps('dateOfBirth')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#343936'}}>Viloyat</Text>
              <TextInput
                placeholderTextColor="#343936"
                style={styles.input}
                {...getInputProps('region')}
              />
            </View>
            <View style={{marginTop: 13}}>
              <Text style={{color: '#343936'}}>
                Biz haqimizda qayerdan eshitdingiz
              </Text>
              <SelectDropdown
                data={[
                  "O'zim topdim",
                  'Ijtimoiy tarmoqlar orqali',
                  'Tanishim orqali',
                  'Sotuv guruhi maslahati bilan',
                ]}
                onSelect={(selectedItem, index) => {
                  onChangeText(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
                defaultButtonText="Tanlang"
                buttonStyle={{
                  backgroundColor: 'white',
                  width: '100%',
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>

          <Text style={styles.blackText}>
            Ro'yxatdan o'tish tugmasini bosib siz{' '}
            <Text onPress={onTCPress} style={{color: 'blue'}}>
              Foydalanish shartlari
            </Text>
            ga ro'zi bo'lasi
          </Text>

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
