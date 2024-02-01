import React, {useEffect} from 'react';
import {View, NativeModules} from 'react-native';
import RootNavigator from './src/navigation/routNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/configureStore';
import Toast from 'react-native-toast-message';

const App = () => {
  const {RNScreenRecordPrevent} = NativeModules;
  RNScreenRecordPrevent.enable();
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
      <Toast />
    </View>
  );
};

export default App;
