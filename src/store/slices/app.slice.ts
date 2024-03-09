import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../configureStore';
import {IUser} from '../../api/types';

export interface IAppSettings {
  user: IUser | undefined;
  favorites: {[key: string]: boolean};
  accessToken: string;
  refreshToken: string;
}

const initialState: IAppSettings = {
  user: undefined,
  favorites: {},
  accessToken: '',
  refreshToken: '',
};

export const appSlice = createSlice({
  initialState,
  name: 'appSlice',
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{accessToken: string; refreshToken: string}>,
    ) => {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
    userLoggedIn: (state, action: PayloadAction<any>) => {
      return {...state, user: action.payload};
    },
    userLoggedOut: () => initialState,
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites[action.payload] = true;
      return state;
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      delete state.favorites[action.payload];
      return state;
    },
  },
});

export const selectAppSettings = (st: RootState): typeof initialState => st.app;
export const {
  addToFavorites,
  removeFromFavorites,
  userLoggedOut,
  userLoggedIn,
  setTokens,
} = appSlice.actions;
