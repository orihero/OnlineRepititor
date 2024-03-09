import {useNavigation, useRoute} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import {useGoBackHook} from '../../common/hooks';
import {useSelector} from 'react-redux';
import {selectAppSettings} from '../../store/slices/app.slice';
import {Linking} from 'react-native';

export const useCourseVideoHook = () => {
  const route = useRoute();
  //@ts-ignore
  let videos: [] = route.params?.item?.content || [];
  const courseId = route.params.course.id;
  const classId = route.params?.item?.id;
  const {accessToken, user} = useSelector(selectAppSettings);

  const getLatestOpenCourseIndex = () => {
    if (!user || !user.progress) {
      return videos.findIndex(e => !!e.test);
    }
    let pr = user.progress.find(
      e => e.courseId == courseId && e.classId == classId,
    );

    if (!pr) {
      return videos.findIndex(e => !!e.test);
    }
    const currentPr = [...pr.progress]
      .reverse()
      .find(e => e.testResult >= route.params.course.testPass)?.videoId;
    const testIndex = videos.findIndex(e => e.id == currentPr);
    //User has successfull tests
    if (!!currentPr) {
      return videos.findIndex((e, i) => testIndex < i && !!e.test);
    }
    return videos.findIndex(e => !!e.test);
  };

  let navigation = useNavigation();
  const onVideoPress = (data: any) => {
    //@ts-ignore
    navigation.navigate(ROUTES.HOME.COURSE_INFO, data);
  };
  const onTestPress = (test: any, videoId: string | number) => {
    //@ts-ignore
    navigation.navigate(ROUTES.HOME.COURSE_TEST, {
      test,
      courseId,
      classId: route.params.item.id,
      videoId,
    });
  };
  const goBack = useGoBackHook();
  const onCoursePress = (e: any) => () => {
    if (!!e.test) {
      onTestPress({test: e.test, title: e.title}, e.id);
    } else {
      onVideoPress({url: e.videoUrl, content: e.content});
    }
  };
  const onBuyPress = () => {
    navigation.navigate(ROUTES.HOME.BUY_COURSE as never);
  };

  let shouldBuy = !accessToken || !!user?.purchasedCourses;

  if (!!user?.purchasedCourses) {
    shouldBuy = !user.purchasedCourses?.includes(courseId.toString());
  }

  const onRegisterPress = () => {
    navigation.navigate(ROUTES.AUTH.LOGIN);
  };

  const onDocumentPress = (e: string) => () => {
    navigation.navigate(ROUTES.HOME.PDF, {url: e});
  };

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
    onRegisterPress,
    onDocumentPress,
    getLatestOpenCourseIndex,
  };
};
