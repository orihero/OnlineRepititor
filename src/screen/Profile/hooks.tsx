import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import {useDispatch, useSelector} from 'react-redux';
import {selectAppSettings, userLoggedOut} from '../../store/slices/app.slice';

export const useProfileHook = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onRegisterPress = () => {
    navigation.navigate(ROUTES.AUTH.LOGIN as never);
  };

  const onChangeProfileHooks = () => {
    navigation.navigate(ROUTES.PROFILE.CHANGEPROFILE as never);
  };

  const {accessToken, user} = useSelector(selectAppSettings);

  const onLogoutPress = () => {
    dispatch(userLoggedOut());
  };

  return {
    onRegisterPress,
    onChangeProfileHooks,
    accessToken,
    user,
    onLogoutPress,
  };
};
