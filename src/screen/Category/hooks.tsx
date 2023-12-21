import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ROUTES} from '../../navigation/routes';

export const CategoryHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onCategoryPress = () => {
    navigation.navigate(ROUTES.HOME.HOME as never);
  }

  return {state, onCategoryPress};
};
