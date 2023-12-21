import * as React from "react";
import { Image, Text, View, TouchableOpacity, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routes";
import HomeScreen from "../screen/Home/view";
import ProfileScreen from "../screen/Profile/view";
import LikedScreen from "../screen/Liked/view";
import BalanceScreen from "../screen/Balance/view";
import {
  BalanceIcon,
  HomeIcon,
  LikedIcon,
  MailIcon,
  ProfileIcon,
} from "../assets/icons/icon";
import Header from "../components/Header";
import DrawerScreens from "./Drawer/DrawerScreens";

const Tab = createBottomTabNavigator();

const tabBarData = [
  {
    label: "Главная",
    icon: HomeIcon,
  },
  {
    label: "Профиль",
    icon: ProfileIcon,
  },
  {
    label: "Избранное",
    icon: LikedIcon,
  },
  {
    label: "Баланс",
    icon: BalanceIcon,
  },
];

const NavigationIcon = ({
  label,
  isFocused,
}: {
  label: string;
  isFocused: boolean;
}) => {
  const Icon = tabBarData.find((tabBar) => tabBar.label === label) || {
    label: "icon",
    icon: HomeIcon,
  };

  return <Icon.icon isFocused={isFocused} />;
};

function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-around",
        paddingHorizontal: 20,
        alignItems: "center",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingBottom: Platform.OS === "ios" ? 12 : 10,
        paddingTop: 24,
      }}
    >
      {state.routes.map(
        (route: { key: string | number; name: any }, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                padding: 15,
                alignItems: "center",
                gap: 6,
              }}
            >
              <NavigationIcon label={label} isFocused={isFocused} />
              <Text
                style={isFocused ? { color: "#29CB73" } : { color: "#B5B5B5" }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
}

const Tabs = () => {
  return (
    <>
      <Header />
      {/* <DrawerScreens/> */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        tabBar={(props: any) => <MyTabBar {...props} />}
      >
        <Tab.Screen name={tabBarData[0].label} component={HomeScreen} />
        <Tab.Screen name={tabBarData[1].label} component={ProfileScreen} />
        <Tab.Screen name={tabBarData[2].label} component={LikedScreen} />
        <Tab.Screen name={tabBarData[3].label} component={BalanceScreen} />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
