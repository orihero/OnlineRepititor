import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ROUTES } from "../../navigation/routes";

export const HomeHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onCategoryPress = () => {
    navigation.navigate(ROUTES.HOME.CATEGORY as never);
  };

  const onCoursePress = (e) => {
    navigation.navigate(ROUTES.HOME.COURSE as never, { course: e });
  };

  return { state, onCategoryPress, onCoursePress };
};
