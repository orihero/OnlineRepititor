import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {REQUESTS} from '../../api/requests';
import {ROUTES} from '../../navigation/routes';
import {PHONE_INPUT_PROPS} from '../../common/configs';

export const useLoginHook = () => {
  const navigation = useNavigation();
  const [phone, setState] = useState('');
  const [unmaskedPhone, setUnmaskedPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const onLoginPress = async () => {
    if (!phone || phone.length !== PHONE_INPUT_PROPS.maxLength) {
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
      const res = await REQUESTS.auth.login({phone: `+998${unmaskedPhone}`});
      //@ts-ignore
      navigation.navigate(ROUTES.AUTH.VERIFY as never, {phone: unmaskedPhone});
    } catch (error) {
      console.log(JSON.stringify(error, null, 4));
    } finally {
      setLoading(false);
    }
  };

  const onPhoneChange = (e: string, unmasked: string) => {
    setState(e);
    setUnmaskedPhone(unmasked);
  };

  const onRegisterPress = () => {
    navigation.navigate(ROUTES.AUTH.REGISTER as never);
  };

  return {phone, onLoginPress, onRegisterPress, loading, onPhoneChange};
};
