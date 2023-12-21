import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ROUTES } from "../../navigation/routes";

export const LogInHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onLogInHooks = () => {
    navigation.navigate(ROUTES.AUTH.FORGOTPASS as never)
  }

  const onRegisterHooks = () => {
    navigation.navigate(ROUTES.AUTH.REGISTER as never)
  }

  const onTabsHooks = () => {
    navigation.navigate(ROUTES.AUTH.TABS as never)
  }

  return { state, onLogInHooks, onRegisterHooks, onTabsHooks };
};

