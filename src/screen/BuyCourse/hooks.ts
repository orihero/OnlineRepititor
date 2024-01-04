import {useState} from 'react';
import {useGoBackHook} from '../../common/hooks';

export const useBuyCourseHook = () => {
  const goBack = useGoBackHook();
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);

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
  };
};
