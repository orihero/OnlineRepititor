import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screen/Home/view';
import {ROUTES, STACk} from '../routes';
import RegistrationScreen from '../../screen/Registration/view';
import CategroyScreen from '../../screen/Category/views';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
