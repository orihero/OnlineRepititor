import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { FaceIcon, GoogleIcon, LogoIcon } from "../../assets/icons/icon";
import Logo from "../../components/Logo";
import { LogInHooks } from "./hooks";

const LogInScreen = () => {
  const { onLogInHooks } = LogInHooks();
  const { onRegisterHooks } = LogInHooks();
  const { onTabsHooks } = LogInHooks();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logInContainer}>
        <View>
          <Logo />
        </View>
        <View style={styles.authorization}>
          <Text style={styles.authorizationText}>Авторизация</Text>
          <Text style={styles.authorizationDic}>
            Авторизуйтесь для получения доступа ко всем возможностям системы
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Номер телефона или email"
            placeholderTextColor={"#C9C9C9"}
            style={styles.input}
          />
          <TextInput
            placeholder="Пароль"
            placeholderTextColor={"#C9C9C9"}
            style={styles.input}
            secureTextEntry
          />
          <Pressable style={styles.forgotPass} onPress={onLogInHooks}>
            <Text style={{ color: "#29CB73" }}>Забыли пароль?</Text>
          </Pressable>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={onTabsHooks}>
            <Text style={styles.buttonText}>Войти</Text>
          </TouchableOpacity>
          <Pressable onPress={onRegisterHooks}>
            <Text style={styles.noAccount}>Нет аккаунта?</Text>
          </Pressable>
        </View>
        <View style={styles.usingApp}>
          <Text style={{ color: "#C9C9C9" }}>или авторизуйтесь при помощи</Text>
          <View style={styles.app}>
            <Pressable>
              <FaceIcon />
            </Pressable>
            <Pressable>
              <GoogleIcon />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogInScreen;
