import {useState} from 'react';
import {useGoBackHook} from '../../common/hooks';
import {useSelector} from 'react-redux';
import {selectAppSettings} from '../../store/slices/app.slice';

export const useBuyCourseHook = () => {
  const goBack = useGoBackHook();
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
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

  return {
    goBack,
    onSelectCourse,
    selectedCourses,
    userPhone: user.phone,
  };
};
