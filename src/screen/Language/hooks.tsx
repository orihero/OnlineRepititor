import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ROUTES} from '../../navigation/routes';

export const LanguageHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onLanguagePress = () => {
    navigation.navigate(ROUTES.AUTH.LOGIN as never);
  }

  return {state, onLanguagePress};
};
