import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ROUTES } from "../../navigation/routes";

const BalanceHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onBalanceHooks = () => {
    navigation.navigate(ROUTES.BALANCE.TRANSACTIONS as never)
  }

  return { state, onBalanceHooks };
};

export default BalanceHooks;
