import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import {COURSES} from '../../constants';
import {Linking} from 'react-native';
import {useSelector} from 'react-redux';
import {selectAppSettings} from '../../store/slices/app.slice';
import Base64 from '../../utils/base64';
import {useState} from 'react';
import {REQUESTS} from '../../api/requests';

const amount = '150000000';

export const useIIVHook = () => {
  const navigation = useNavigation();
  const {phone} = useSelector(selectAppSettings).user || {};
  const [loading, setLoading] = useState(false);
  const onCoursePress = (e: any) => {
    //@ts-ignore
    navigation.navigate(ROUTES.HOME.COURSE as never, {course: e});
  };
  const iivCourseIds = [1, 2, 8];
  const courses = COURSES.filter(e => iivCourseIds.includes(e.id));

  const onBuyPress = async () => {
    setLoading(true);
    const PAYME_PARAMS = Base64.btoa(
      `m=65c9f2343c319dec9d8aa905;ac.phone_number=${phone};a=${amount}`,
    );
    const PAYME_URL = `https://checkout.paycom.uz/${PAYME_PARAMS}`;
    try {
      const res = await REQUESTS.user.updateUserProfile({
        pickedCourses: iivCourseIds.map(e => `${e}`),
      });
      await Linking.openURL(PAYME_URL);
      //@ts-ignore
      navigation.navigate(ROUTES.HOME.HOME);
    } catch (error) {}
    setLoading(false);
  };

  return {courses, onCoursePress, onBuyPress, loading};
};
