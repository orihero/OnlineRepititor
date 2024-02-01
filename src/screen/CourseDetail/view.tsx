import {useRoute} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Video from 'react-native-video-controls';
import {useGoBackHook} from '../../common/hooks';

const CourseDetailView = () => {
  const video = React.useRef<Video>(null);
  const [isPortrait, setIsPortrait] = React.useState(true);
  const route = useRoute();
  const goBack = useGoBackHook();

  const videoRef = useRef<Video>();

  const onOrientationChange = () => {
    setIsPortrait(e => !e);
  };
  useEffect(() => {
    Orientation.unlockAllOrientations();
    Orientation.addOrientationListener(onOrientationChange);
    return () => {
      Orientation.removeAllListeners();
      Orientation.lockToPortrait();
    };
  }, []);

  const {width, height} = Dimensions.get('screen');
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Video
        style={{
          width: width,
          height: 300,
        }}
        source={{
          uri: route.params?.url || '',
        }}
        showOnStart={false}
        onBack={goBack}
        disableSeekbar
        onEnterFullscreen={() => {
          Orientation.lockToLandscape();
        }}
        onExitFullscreen={() => {
          Orientation.lockToPortrait();
        }}
        controlTimeout={3000}
      />
    </View>
  );
};

export default CourseDetailView;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 15,
  },
  header: {
    marginTop: 36,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 30,
    color: '#343936',
    paddingTop: 26,
  },
});
