import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AlertIcon, LogoWhiteIcon, NotificationIcon} from '../assets/icons/icon';
import {ROUTES} from '../navigation/routes';
import {styles} from './styles';
// import { NavigationScreenProps, NavigationProp } from "react-navigation";
import {DrawerActions} from '@react-navigation/routers';
import Modal from 'react-native-modal';

const Header = () => {
  const navigation = useNavigation();
  const [isOpened, setIsOpened] = React.useState(false);
  const onDismiss = () => setIsOpened(false);
  return (
    <View style={styles.header}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => setIsOpened(!isOpened)}>
            <AlertIcon />
          </TouchableOpacity>
          <View>
            <LogoWhiteIcon />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.HOME.NOTIFICATION as never);
            }}>
            <View style={{width: 35}} />
            {/* <NotificationIcon />
            <View style={styles.notiText}>
              <Text style={styles.text}>1</Text>
            </View> */}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Modal
        onDismiss={onDismiss}
        onBackdropPress={onDismiss}
        isVisible={isOpened}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Ustozdan tavsiyalar</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.modalText}>
              <View style={styles.bullet}></View>
              {`\t\t`}Darsni yolg’iz va tinch xonada o’zlashtirish sizga
              diqqatni jamlab,bilimlarni yaxshi o’zlashtirishingizga imkon
              yaratib beradi.
            </Text>
            <Text style={styles.modalText}>
              <View style={styles.bullet}></View>
              {`\t\t`}Dars jarayonida tushunmagan qismlarni qayta ko’rib
              chiqing.
            </Text>
            <Text style={styles.modalText}>
              <View style={styles.bullet}></View>
              {`\t\t`}Tarix,geografiya,huquq,biologiya kabi ma’ruzali
              darsliklarning kitob varianti doim yoningizda turishi,video
              darslikda muhim deyilgan ma’lumotlarni kitobga belgilab qo’yish va
              yana mustaqil o’qib chiqish maqsadga muvofiq.
            </Text>
            <Text style={styles.modalText}>
              <View style={styles.bullet}></View>
              {`\t\t`}Darslarni o’zlashtirish uchun kunning o’zingizga qulay bir
              vaqtini belgilab oling va re’ja asosida davomiyligini ta’minlang.
            </Text>
            <Text style={styles.modalText}>
              <View style={styles.bullet}></View>
              {`\t\t`}Har dars so’ngida olgan bilimlaringizni tahlil qiling va
              yozib boring.
            </Text>
          </ScrollView>
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={onDismiss}>
              <Text style={styles.modalButton}>Tanishib chiqdim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Header;
