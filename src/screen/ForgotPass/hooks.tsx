import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ROUTES } from "../../navigation/routes";

const ForgotPassHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onHomeHooks = () => {
    navigation.navigate(ROUTES.AUTH.TABS as never)
  }

  return { state, onHomeHooks };
};

export default ForgotPassHooks;
