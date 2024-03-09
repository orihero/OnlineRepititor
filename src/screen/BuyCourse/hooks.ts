import {useState} from 'react';
import {useGoBackHook} from '../../common/hooks';
import {useSelector} from 'react-redux';
import {selectAppSettings} from '../../store/slices/app.slice';
import {Linking} from 'react-native';
import Base64 from '../../utils/base64';
import {REQUESTS} from '../../api/requests';
import {COURSES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';

export const CLICK_SERVICE_ID = '31135';
export const CLICK_MERCHANT_ID = '23305';
const amount = '199000000';
// const return_url = `${SERVER_URL}/paymentSuccessfull?courses=${selectedCourses}`;
// const CLICK_URL = `https://my.click.uz/services/pay?service_id=${CLICK_SERVICE_ID}&merchant_id=${CLICK_MERCHANT_ID}&amount=${amount}&transaction_param=${userPhone}`;

export const useBuyCourseHook = () => {
  const goBack = useGoBackHook();
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const user = useSelector(selectAppSettings).user;
  const onSelectCourse = (e: number) => {
    if (selectedCourses.includes(e)) {
      setSelectedCourses(selectedCourses.filter(el => el !== e));
      return;
    }
    if (selectedCourses.length >= 2) {
      return;
    }
    setSelectedCourses([...selectedCourses, e]);
  };

  const onBuyPress = async () => {
    setLoading(true);
    const PAYME_PARAMS = Base64.btoa(
      `m=65c9f2343c319dec9d8aa905;ac.phone_number=${user?.phone};a=${amount}`,
    );
    const PAYME_URL = `https://checkout.paycom.uz/${PAYME_PARAMS}`;
    try {
      const first = COURSES[selectedCourses[0]].id;
      let second = COURSES[selectedCourses[1]].id;
      const res = await REQUESTS.user.updateUserProfile({
        pickedCourses: [first, second],
      });
      await Linking.openURL(PAYME_URL);
      //@ts-ignore
      navigation.navigate(ROUTES.HOME.HOME);
    } catch (error) {}
    setLoading(false);
  };

  return {
    goBack,
    onSelectCourse,
    selectedCourses,
    onBuyPress,
    loading,
  };
};
