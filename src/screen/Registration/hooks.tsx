import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ROUTES } from "../../navigation/routes";

export const RegisterHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onLogInHooks = () => {
    navigation.navigate(ROUTES.AUTH.LOGIN as never)
  }

  const onHomeHooks = () => {
    navigation.navigate(ROUTES.AUTH.TABS as never)
  }

  return { state, onLogInHooks, onHomeHooks };
};

