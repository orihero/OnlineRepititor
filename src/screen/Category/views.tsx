import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { ArrowIcon, SearchIcon } from "../../assets/icons/icon";
import { CATEGORY } from "../../constant";
import { CategoryHooks } from "./hooks";
import { useGoBackHook } from "../../common/hooks";

const CategroyScreen = () => {

  const {onCategoryPress} = CategoryHooks()
  const goBack = useGoBackHook()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.categoryContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <ArrowIcon />
            </TouchableOpacity>
            <Text style={styles.title}>Категории</Text>
          </View>
          <View style={styles.search}>
            <TextInput
              placeholder="Название курса"
              style={{ width: 200, fontSize: 15 }}
            />
            <Pressable>
              <SearchIcon />
            </Pressable>
          </View>
          <View style={styles.category}>
            {CATEGORY.map((e, index) => {
              return (
                <TouchableOpacity key={index} style={styles.card}>
                  <Image source={e.images} style={styles.cardImage}/>
                  <Text style={styles.cardText}>{e.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategroyScreen;
