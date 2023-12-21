import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ROUTES } from "../../navigation/routes";

export const TranSactionHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onMyReviews = () => {
    navigation.navigate(ROUTES.BALANCE.MYREVIEWS as never)
  }

//   const onHomeHooks = () => {
//     navigation.navigate(ROUTES.AUTH.REGISTER as never)
//   }

  return { state, onMyReviews };
};

