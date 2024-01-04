import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {REQUESTS} from '../../api/requests';
import {ROUTES} from '../../navigation/routes';

export const useLoginHook = () => {
  const navigation = useNavigation();
  const [phone, setState] = useState('');
  const [loading, setLoading] = useState(false);

  const onLoginPress = async () => {
    if (!phone) {
      Toast.show({
        text1: 'Xato',
        text2: 'Telefon raqamini to`ldiring',
        position: 'top',
        autoHide: true,
        swipeable: true,
        type: 'error',
        visibilityTime: 3000,
      });
      return;
    }
    try {
      setLoading(true);
      const res = await REQUESTS.auth.login({phone});
      navigation.navigate(ROUTES.AUTH.VERIFY as never, {phone});
    } catch (error) {
      console.log(JSON.stringify(error, null, 4));
    } finally {
      setLoading(false);
    }
  };

  const onPhoneChange = (e: string) => {
    setState(e);
  };

  const onRegisterPress = () => {
    navigation.navigate(ROUTES.AUTH.REGISTER as never);
  };

  return {phone, onLoginPress, onRegisterPress, loading, onPhoneChange};
};
