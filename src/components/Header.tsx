import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import {
  BurgerIcon,
  LogoWhiteIcon,
  NotificationIcon,
} from "../assets/icons/icon";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../navigation/routes";
import DrawerScreens from "../navigation/Drawer/DrawerScreens";
// import { NavigationScreenProps, NavigationProp } from "react-navigation";
import { DrawerActions } from "@react-navigation/routers";
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootNavigatorParamList } from "../navigation/routNavigation";


const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <BurgerIcon />
          </TouchableOpacity>
          <View>
            <LogoWhiteIcon />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.HOME.NOTIFICATION as never);
            }}
          >
            <NotificationIcon />
            <View style={styles.notiText}>
              <Text style={styles.text}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;
