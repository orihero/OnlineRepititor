import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { CircleIcon, SMSIcon, SelectedIcon } from '../../assets/icons/icon'
import { styles } from './styles'

const ChangeProfile = () => {
  const [language, setLanguage] = useState<string>("Мужской");
  const languges: string[] = ["Женкский", "Мужской", "Не указон"];
  const [mouseOver, setMouseOver] = useState<boolean>(false);
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
              <View>
                <View style={styles.input}>
                  <Text style={{ paddingVertical: 12 }}>{language}</Text>
                </View>
                <TouchableOpacity
                  style={styles.select}
                >
                  <SelectedIcon />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 13 }}>
              <Text style={{ color: "#C8C8C8", fontWeight: "500" }}>
                Дата рождения
              </Text>
              <TextInput style={styles.input} value="11.03.2008" />
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Изменить</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChangeProfile