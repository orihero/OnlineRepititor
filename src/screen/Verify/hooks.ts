import {useNavigation, useRoute} from '@react-navigation/native';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {REQUESTS} from '../../api/requests';
import {useDispatch} from 'react-redux';
import {setTokens} from '../../store/slices/app.slice';
import {ROUTES} from '../../navigation/routes';

export const useVerifyHook = () => {
  const {
    params: {phone},
  } = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const onOtpChange = (e: string) => {
    setOtp(e);
  };

  const onConfirmPress = async () => {
    if (!otp || otp.length !== 4) {
      Toast.show({
        autoHide: true,
        visibilityTime: 3000,
        swipeable: true,
        position: 'top',
        text1: 'Xato!',
        text2: 'Kodni kiriting',
      });
      return;
    }
    try {
      setLoading(true);
      const res = await REQUESTS.auth.verify({otp, phone});
      dispatch(
        setTokens({
          accessToken: res.data.access_token,
          refreshToken: res.data.refresh_token,
        }),
      );
      navigation.navigate(ROUTES.AUTH.TABS);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    otp,
    onOtpChange,
    onConfirmPress,
    phone,
  };
};
