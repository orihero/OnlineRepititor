import {useNavigation} from '@react-navigation/native';

export const useGoBackHook = () => {
  const navigation = useNavigation();
  return () => navigation.goBack();
};
