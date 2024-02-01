import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ROUTES} from '../../navigation/routes';
import axios from 'axios';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
  selectAppSettings,
  userLoggedIn,
} from '../../store/slices/app.slice';
import {REQUESTS} from '../../api/requests';
import {COURSES} from '../../constants';

export const HomeHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({message: '', number: '', name: ''});

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const {favorites} = useSelector(selectAppSettings);

  const {accessToken} = useSelector(selectAppSettings);

  const onValueChange = (name: string) => (value: string) => {
    setState({...state, [name]: value});
  };

  const onCategoryPress = () => {
    navigation.navigate(ROUTES.HOME.CATEGORY as never);
  };

  const onCoursePress = e => {
    navigation.navigate(ROUTES.HOME.COURSE as never, {course: e});
  };

  const onApply = async () => {
    let message = `O'quvchi xabar jonatdi \n Ismi: ${state.name} \n Telefon raqami: ${state.number} \n Xabarnoma: ${state.message}`;
    try {
      axios.get(
        `https://api.telegram.org/bot6702393714:AAGT6iePHnrI1jIpf2xwu9tGRs_TGKFlSkA/sendMessage?chat_id=-1002003833482&text=${message}`,
      );
      setState({message: '', name: '', number: ''});
      Alert.alert(
        'Diqqat!',
        "So'rovingiz qabul qilindi. Biz siz bilan tez orada bog'lanamiz",
      );
    } catch (error) {}
  };

  const onFavoritePress = (id: number) => {
    if (!favorites[id]) {
      dispatch(addToFavorites(id.toString()));
    } else {
      dispatch(removeFromFavorites(id.toString()));
    }
  };
  const fetchProfile = async () => {
    try {
      const res = await REQUESTS.user.getUserProfile();
      dispatch(userLoggedIn(res.data));
    } catch (error) {}
  };

  useEffect(() => {
    if (!!accessToken) {
      fetchProfile();
    }
  }, [accessToken]);

  const courses = search
    ? COURSES.filter(
        e =>
          e.name.toLowerCase().includes(search.toLowerCase()) ||
          e.author?.toLocaleLowerCase().includes(search.toLowerCase()),
      )
    : COURSES;

  const onIIVPress = () => {
    navigation.navigate(ROUTES.HOME.IIV);
  };

  return {
    state,
    onCategoryPress,
    onCoursePress,
    onApply,
    onValueChange,
    onFavoritePress,
    favorites,
    courses,
    search,
    onSearchChange: (e: string) => setSearch(e),
    onIIVPress,
  };
};
