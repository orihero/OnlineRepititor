import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import HomeScreen from '../../screen/Home/view';
import ProfileScreen from '../../screen/Profile/view';
import LikedScreen from '../../screen/Liked/view';
import BalanceScreen from '../../screen/Balance/view';
import { ROUTES } from '../routes';

export type drawerType = {
  [ROUTES.DRAWER.HOME]: undefined;
  [ROUTES.DRAWER.PROFILE]: undefined;
  [ROUTES.DRAWER.LIKED]: undefined;
  [ROUTES.DRAWER.BALANCE]: undefined;
};

const Drawer = createDrawerNavigator<drawerType>();

const DrawerScreens = () => {
  return (
    <Drawer.Navigator initialRouteName={ROUTES.DRAWER.HOME}>
        <Drawer.Screen name={ROUTES.DRAWER.HOME} component={HomeScreen}/>
        <Drawer.Screen name={ROUTES.DRAWER.PROFILE} component={ProfileScreen}/>
        <Drawer.Screen name={ROUTES.DRAWER.LIKED} component={LikedScreen}/>
        <Drawer.Screen name={ROUTES.DRAWER.BALANCE} component={BalanceScreen}/>
    </Drawer.Navigator>
  )
}

export default DrawerScreens
