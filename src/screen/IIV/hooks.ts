import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import {COURSES} from '../../constants';
import {Linking} from 'react-native';
import {CLICK_MERCHANT_ID, CLICK_SERVICE_ID} from '../BuyCourse/view';
import {useSelector} from 'react-redux';
import {selectAppSettings} from '../../store/slices/app.slice';

export const useIIVHook = () => {
  const navigation = useNavigation();
  const {phone} = useSelector(selectAppSettings).user;
  const onCoursePress = e => {
    navigation.navigate(ROUTES.HOME.COURSE as never, {course: e});
  };
  const iivCourseIds = [1, 2, 8];
  const courses = COURSES.filter(e => iivCourseIds.includes(e.id));

  const onBuyPress = () => {
    const amount = '1500000.00';
    Linking.openURL(
      `https://my.click.uz/services/pay?service_id=${CLICK_SERVICE_ID}&merchant_id=${CLICK_MERCHANT_ID}&amount=${amount}&transaction_param=${
        phone || '+998994480500'
      }`,
    );
  };

  return {courses, onCoursePress, onBuyPress};
};
