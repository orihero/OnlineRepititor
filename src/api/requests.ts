import axios from 'axios';
import {
  IAuthResponse,
  ILoginRequest,
  IRegisterRequest,
  IUser,
  IVerifyRequest,
} from './types';
import Toast from 'react-native-toast-message';
import {store} from '../store/configureStore';

// export const SERVER_URL = 'http://10.0.2.2:7300/api';
export const SERVER_URL = 'http://185.196.213.144:7400/api';

export const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  url: SERVER_URL,
});

axiosInstance.interceptors.response.use(
  e => e,
  err => {
    let text2 = 'Internal server error';
    if (!!err && !!err?.response && !!err?.response?.data?.message) {
      text2 = err?.response?.data.message;
    }
    Toast.show({
      autoHide: true,
      swipeable: true,
      type: 'error',
      position: 'top',
      text2,
      text1: 'Xato!',
      visibilityTime: 3000,
    });
    throw err;
  },
);

axiosInstance.interceptors.request.use(e => {
  if (!!store.getState().app.accessToken) {
    //@ts-ignore
    e.headers = {
      ...e.headers,
      Authorization: `Bearer ${store.getState().app.accessToken}`,
    };
  }
  return e;
});

export const REQUESTS = {
  auth: {
    login: (creds: ILoginRequest) =>
      axiosInstance.post(SERVER_URL + '/auth/login', creds),
    register: (creds: IRegisterRequest) =>
      axiosInstance.post('/auth/register', creds),
    verify: (creds: IVerifyRequest) =>
      axiosInstance.post<IAuthResponse>('/auth/verify', creds),
  },
  user: {
    getUserProfile: () => axiosInstance.get('/user/me'),
    updateUserProfile: (creds: Partial<IUser>) =>
      axiosInstance.put('/user/me', creds),
    setProgress: (params: {
      classId: string;
      courseId: string;
      testResult: string;
      videoId: string;
      progress: string;
    }) => axiosInstance.put(`/user/setProgress`, null, {params}),
  },
};
