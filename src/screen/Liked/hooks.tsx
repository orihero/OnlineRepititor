import {useSelector} from 'react-redux';
import {selectAppSettings} from '../../store/slices/app.slice';
import {COURSES} from '../../constants';

export const useFavoritesHook = () => {
  const {favorites} = useSelector(selectAppSettings);
  let realFavorites = COURSES.filter(e => !!favorites[e.id]);
  return {favorites: realFavorites};
};
