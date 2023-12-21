import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ROUTES} from '../../navigation/routes';

export const EnglishWithHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onBuyCoursePress = () => {
    navigation.navigate(ROUTES.HOME.BUYCOURSE as never);
  }
  return {state, onBuyCoursePress};
};
