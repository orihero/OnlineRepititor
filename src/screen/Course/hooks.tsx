import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { ROUTES } from "../../navigation/routes";

export const CourseHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();
  const route = useRoute();

  const onFilterPress = () => {
    navigation.navigate(ROUTES.HOME.FILTER as never);
  };

  const onCoursePress = (e) => {
    navigation.navigate(ROUTES.HOME.COURSE_VIDEOS, {
      course: route.params.course,
      item: e,
    });
  };

  return { state, onFilterPress, course: route.params.course, onCoursePress };
};
