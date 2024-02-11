import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ROUTES} from '../../navigation/routes';
import {useGoBackHook} from '../../common/hooks';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';
import {REQUESTS} from '../../api/requests';

const phoneRegExp =
  /^[+]998([0-9][012345789]|[0-9][125679]|7[01234569])[0-9]{7}$/;
const dateRegex =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const validation = yup.object({
  phone: yup
    .string()
    .matches(phoneRegExp, "Noto'g'ri telefon raqam kiritilgan")
    .required('Telefon raqam majburiy'),
  parentNumber: yup
    .string()
    .required('Ota onangiz telefon raqami majburiy')
    .matches(phoneRegExp, "Noto'g'ri telefon raqam kiritilgan"),
  region: yup
    .string()
    .min(3, "Noto'g'ri viloyat")
    .required('Viloyatingizni kiritish majburiy'),
  dateOfBirth: yup
    .string()
    .matches(dateRegex, "Tug'ilgan sana noto'g'ri")
    .required("Tug'ilgan sana majburiy"),
  name: yup.string().required('Ism majburiy'),
  surname: yup.string().required('Familya majburiy'),
  affilateSource: yup.string().required('Biz haqimizda qayerdan eshitdingiz!'),
});

export const useRegisterHook = () => {
  const navigation = useNavigation();
  const [state, setState] = useState<yup.InferType<typeof validation>>({
    dateOfBirth: '',
    name: '',
    parentNumber: '',
    phone: '',
    region: '',
    surname: '',
    affilateSource: '',
  });
  const [loading, setLoading] = useState(false);

  const goBack = useGoBackHook();

  const getInputProps = (key: keyof yup.InferType<typeof validation>) => {
    return {
      value: state[key],
      onChangeText: (value: string) => {
        setState({...state, [key]: value});
      },
    };
  };

  const onSubmit = async () => {
    try {
      await validation.validate(state);
    } catch (error) {
      Toast.show({
        text1: 'Xato!',
        text2: error.errors.join(','),
        type: 'error',
      });
      return;
    }
    setLoading(true);
    try {
      let res = REQUESTS.auth.register({
        ...state,
        name: state.name + ' ' + state.surname,
      });
      //@ts-ignore
      navigation.navigate(ROUTES.AUTH.VERIFY as never, {
        phone: state.phone,
        isRegister: true,
      });
    } catch (error) {}
    setLoading(false);
  };

  const onTCPress = () => {
    navigation.navigate(ROUTES.HOME.PDF, {
      url: 'https://d1kuux35i7xqfi.cloudfront.net/assets/tc.pdf',
    });
  };

  console.log('====================================');
  console.log(state);
  console.log('====================================');

  return {onSubmit, goBack, getInputProps, loading, onTCPress};
};
