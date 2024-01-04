import {useNavigation, useRoute} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import {useGoBackHook} from '../../common/hooks';
import {useSelector} from 'react-redux';
import {selectAppSettings} from '../../store/slices/app.slice';

export const useCourseVideoHook = () => {
  const route = useRoute();
  //@ts-ignore
  let videos: [] = route.params?.item?.content || [];
  const courseId = route.params.course.id;
  const {accessToken, user} = useSelector(selectAppSettings);
  let navigation = useNavigation();
  const onVideoPress = (data: any) => {
    //@ts-ignore
    navigation.navigate(ROUTES.HOME.COURSE_INFO, data);
  };
  const onTestPress = (test: any) => {
    //@ts-ignore
    navigation.navigate(ROUTES.HOME.COURSE_TEST, test);
  };
  const goBack = useGoBackHook();
  const onCoursePress = (e: any) => () => {
    if (!!e.test) {
      onTestPress({test: e.test, title: e.title});
    } else {
      onVideoPress({url: e.videoUrl, content: e.content});
    }
  };
  const onBuyPress = () => {
    navigation.navigate(ROUTES.HOME.BUY_COURSE as never);
  };

  let shouldBuy = !!accessToken && !user.purchasedCourses;
  if (!!user?.purchasedCourses) {
    shouldBuy = !user.purchasedCourses?.includes(courseId);
  }
  const shouldRegister = !accessToken;
  return {
    goBack,
    videos,
    onCoursePress,
    //@ts-ignore
    name: route?.params?.item?.name,
    shouldBuy,
    shouldRegister,
    onBuyPress,
  };
};
