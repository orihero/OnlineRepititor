import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
// import Tabs from "./Tab";
import {NavigationContainer} from '@react-navigation/native';
import LanguageScreen from '../screen/Language/view';
import LogInScreen from '../screen/LogIn/view';
import ForgotPassScreen from '../screen/ForgotPass/view';
import RegistrationScreen from '../screen/Registration/view';
import Tabs from './Tab';
import CategroyScreen from '../screen/Category/views';
import ChangeProfile from '../screen/ChangeProfile/view';
import CourseScreen from '../screen/Course/view';
import FilterScreen from '../screen/Filter/view';
import NotificationScreen from '../screen/Natification/view';
import EnglishWithScreen from '../screen/EnglishWith/view';
import BuyCourseScreen from '../screen/BuyCourse/view';
import AllReviesScreen from '../screen/AllReviews/view';
import TransactionsScreen from '../screen/Transactions/view';
import MyReviewsScreen from '../screen/MyReviews/view';
import CourseDetailView from '../screen/CourseDetail/view';
import CourseVideosView from '../screen/CourseVideos/view';
import QuizView from '../screen/Quiz/view';

export type RootNavigatorParamList = {
  [ROUTES.LANGUAGE.RUS]: undefined;
  [ROUTES.AUTH.LOGIN]: undefined;
  [ROUTES.AUTH.FORGOTPASS]: undefined;
  [ROUTES.AUTH.REGISTER]: undefined;
  [ROUTES.AUTH.TABS]: undefined;
  [ROUTES.HOME.CATEGORY]: undefined;
  [ROUTES.HOME.CATEGORY]: undefined;
  [ROUTES.PROFILE.CHANGEPROFILE]: undefined;
  [ROUTES.HOME.COURSE]: undefined;
  [ROUTES.HOME.FILTER]: undefined;
  [ROUTES.HOME.NOTIFICATION]: undefined;
  [ROUTES.HOME.ENGLISHWITH]: undefined;
  [ROUTES.HOME.BUYCOURSE]: undefined;
  [ROUTES.HOME.ALLREVIEWS]: undefined;
  [ROUTES.HOME.COURSE_INFO]: undefined;
  [ROUTES.HOME.COURSE_VIDEOS]: {url: string};
  [ROUTES.HOME.COURSE_TEST]: {test: string};
  [ROUTES.BALANCE.TRANSACTIONS]: undefined;
  [ROUTES.BALANCE.MYREVIEWS]: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={ROUTES.LANGUAGE.RUS} component={LanguageScreen} /> */}
        <Stack.Screen name={ROUTES.AUTH.LOGIN} component={LogInScreen} />
        <Stack.Screen
          name={ROUTES.AUTH.FORGOTPASS}
          component={ForgotPassScreen}
        />
        <Stack.Screen
          name={ROUTES.AUTH.REGISTER}
          component={RegistrationScreen}
        />
        <Stack.Screen name={ROUTES.AUTH.TABS} component={Tabs} />
        <Stack.Screen name={ROUTES.HOME.CATEGORY} component={CategroyScreen} />
        <Stack.Screen name={ROUTES.HOME.COURSE} component={CourseScreen} />
        <Stack.Screen name={ROUTES.HOME.FILTER} component={FilterScreen} />
        <Stack.Screen
          name={ROUTES.HOME.NOTIFICATION}
          component={NotificationScreen}
        />
        <Stack.Screen
          name={ROUTES.HOME.ENGLISHWITH}
          component={EnglishWithScreen}
        />
        <Stack.Screen
          name={ROUTES.HOME.BUYCOURSE}
          component={BuyCourseScreen}
        />
        <Stack.Screen
          name={ROUTES.HOME.ALLREVIEWS}
          component={AllReviesScreen}
        />
        <Stack.Screen
          name={ROUTES.HOME.COURSE_INFO}
          component={CourseDetailView}
        />
        <Stack.Screen
          name={ROUTES.HOME.COURSE_VIDEOS}
          component={CourseVideosView}
        />
        <Stack.Screen name={ROUTES.HOME.COURSE_TEST} component={QuizView} />
        <Stack.Screen
          name={ROUTES.BALANCE.TRANSACTIONS}
          component={TransactionsScreen}
        />
        <Stack.Screen
          name={ROUTES.BALANCE.MYREVIEWS}
          component={MyReviewsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
