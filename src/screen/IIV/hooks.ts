import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import {COURSES} from '../../constants';

export const useIIVHook = () => {
  const navigation = useNavigation();
  const onCoursePress = e => {
    navigation.navigate(ROUTES.HOME.COURSE as never, {course: e});
  };
  const iivCourseIds = [1, 8, 2];
  const courses = COURSES.filter(e => iivCourseIds.includes(e.id));
  return {courses, onCoursePress};
};
