import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screen/Home/view';
import {ROUTES} from '../routes';

const Stack = createNativeStackNavigator();

const BalanseStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default BalanseStack;
