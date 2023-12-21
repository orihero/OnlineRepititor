import { View, Text, Image, TouchableOpacity } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { LanguageHooks } from "./hooks";
import { EngIcon, LogoIcon, RusIcon, UzbIcon } from "../../assets/icons/icon";
import Svg, { Use } from "react-native-svg";
import Logo from "../../components/Logo";
import i18n, { languageMenu } from "../../configs/i18nConfig";

const LanguageScreen = () => {
  const { onLanguagePress } = LanguageHooks();

  const getSelectedLanguage = (item: any) => {
    i18n.changeLanguage(item.code);
  };

  console.log(languageMenu)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.langContainer}>
        <View>
          <Logo />
        </View>
        <View style={styles.hello}>
          <Text style={{ fontSize: 28, fontWeight: "700" }}>
            Добро пожаловать
          </Text>
          <Text style={{ fontSize: 16, color: "#C8C8C8" }}>Выберите язык</Text>
        </View>
        <View style={styles.selectLang}>
          {languageMenu.map((e, index) => {
            return (
              <TouchableOpacity style={styles.select}onPress={onLanguagePress} onPressIn={getSelectedLanguage} key={index}>
                <Image source={e.flag}/>
                <Text style={{ color: "#9A9A9A" }}>{e.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;
