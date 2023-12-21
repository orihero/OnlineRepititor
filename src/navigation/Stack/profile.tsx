import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screen/Home/view';
import {ROUTES, STACk} from '../routes';
import RegistrationScreen from '../../screen/Registration/view';
import CategroyScreen from '../../screen/Category/views';
import ChangeProfile from '../../screen/ChangeProfile/view';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.PROFILE.CHANGEPROFILE} component={ChangeProfile}/>
    </Stack.Navigator>
  );
};

export default ProfileStack;





































