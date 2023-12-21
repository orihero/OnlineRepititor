import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ROUTES} from '../../navigation/routes';

export const EnglishWithHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onEnglishPress = () => {
    navigation.navigate(ROUTES.HOME.ENGLISHWITH as never);
  }
  return {state, onEnglishPress};
};
