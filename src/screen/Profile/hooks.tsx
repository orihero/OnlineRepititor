import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ROUTES } from "../../navigation/routes";

export const ProfileInHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();


  const onRegisterHooks = () => {
    navigation.navigate(ROUTES.AUTH.REGISTER as never)
  }

  const onChangeProfileHooks = () => {
    navigation.navigate(ROUTES.PROFILE.CHANGEPROFILE as never)
  }


  return { state, onRegisterHooks, onChangeProfileHooks};
};
