import React, {useEffect} from 'react';
import {View, NativeModules} from 'react-native';
import RootNavigator from './src/navigation/routNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/configureStore';
import Toast from 'react-native-toast-message';
import VersionCheck from 'react-native-version-check';

const App = () => {
  const {RNScreenRecordPrevent} = NativeModules;
  RNScreenRecordPrevent.enable();
  useEffect(() => {
    VersionCheck.getLatestVersion() // Automatically choose profer provider using `Platform.select` by device platform.
      .then(latestVersion => {
        console.log(latestVersion); // 0.1.2
      });
  });
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
