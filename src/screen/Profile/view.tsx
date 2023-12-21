import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { CircleIcon, SMSIcon, SelectedIcon } from "../../assets/icons/icon";
import { ProfileInHooks } from "./hooks";
import { TouchableHighlight } from "react-native-gesture-handler";
import TouchableNativeFeedback from "react-native-gesture-handler/lib/typescript/components/touchables/TouchableNativeFeedback.android";

const ProfileScreen = () => {
  const [language, setLanguage] = useState<string>("Мужской");
  const languges: string[] = ["Женкский", "Мужской", "Не указон"];
  const [mouseOver, setMouseOver] = useState<boolean>(false);

  const { onRegisterHooks } = ProfileInHooks();
  const { onChangeProfileHooks } = ProfileInHooks();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Text style={styles.head}>Личные данные</Text>
          <View style={styles.profileUpload}>
            <View>
              <Image
                source={require("../../assets/images/profileUpload.png")}
              />
              <View style={styles.circle}>
                <CircleIcon />
              </View>
            </View>
            <View>
              <Text style={styles.name}>Рафаэль Ройтман</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  paddingTop: 20,
                }}
              >
                <SMSIcon />
                <Text style={styles.youReviews}>Мои отзывы</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>Имя</Text>
              <TextInput style={styles.input} value="Asliddin" />
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>
                Фамилия
              </Text>
              <TextInput style={styles.input} value="Abdumalikov" />
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>
                Отчество
              </Text>
              <TextInput style={styles.input} value="Abdurasulvich" />
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>Email</Text>
              <TextInput
                style={styles.input}
                value="asliddinabdumalikov8002@gmail.com"
              />
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>Пол</Text>
              <Pressable
                onPress={() => {
                  setMouseOver(!mouseOver);
                }}
              >
                <View style={styles.input}>
                  <Text style={{ paddingVertical: 12 }}>{language}</Text>
                </View>

                <View style={styles.select}>
                  <TouchableOpacity
                    // style={styles.select}
                    onPress={() => {
                      setMouseOver(!mouseOver);
                    }}
                    style={
                      !mouseOver
                        ? {
                            transform: [{ rotate: "-180deg" }],
                          }
                        : {}
                    }
                  >
                    <SelectedIcon />
                  </TouchableOpacity>
                </View>
                <View style={styles.cards}>
                  {languges.map((e: string) => {
                    return (
                      <TouchableOpacity
                        key={e}
                        onPress={() => {
                          setLanguage(e);
                        }}
                        style={!mouseOver ? styles.card : styles.cardLang}
                      >
                        <Text>{e}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </Pressable>
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>
                Дата рождения
              </Text>
              <TextInput style={styles.input} value="11.03.2008" />
              {/* <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      /> */}
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>
                Номер телефона
              </Text>
              <TextInput style={styles.input} value="+998 33 926 07 77" />
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>
                Регион
              </Text>
              <TextInput style={styles.input} value="Ташкент" />
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonChange}
            onPress={onRegisterHooks}
          >
            <Text style={styles.buttonTextChange}>Изменить пароль</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={onChangeProfileHooks}
          >
            <Text style={styles.buttonText}>Изменить</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
