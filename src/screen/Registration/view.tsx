import { View, Text, TextInput, ScrollView, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { ArrowIcon } from "../../assets/icons/icon";
import { RegisterHooks } from "./hooks";

const RegistrationScreen = () => {

    const {onLogInHooks} = RegisterHooks()
    const {onHomeHooks} = RegisterHooks()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.registerContainer}>
          <View style={styles.header}>
            <Pressable onPress={onLogInHooks}>
                <ArrowIcon/>
            </Pressable>
            <Text style={styles.title}>Регистрация</Text>
          </View>
          <View style={styles.inputContainer}>
            <View>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>Имя</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>
                Фамилия
              </Text>
              <TextInput style={styles.input} secureTextEntry />
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>
                Номер телефона
              </Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>Email</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>
                Пароль
              </Text>
              <TextInput style={styles.input} secureTextEntry />
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>
                Подтвердить пароль
              </Text>
              <TextInput style={styles.input} secureTextEntry />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={onHomeHooks}>
            <Text style={styles.buttonText}>Зарегестрироваться</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
