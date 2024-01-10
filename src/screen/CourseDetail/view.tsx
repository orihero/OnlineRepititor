import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Video from 'react-native-video-controls';
import {ArrowIcon} from '../../assets/icons/icon';
import {useGoBackHook} from '../../common/hooks';

const CourseDetailView = () => {
  const video = React.useRef<Video>(null);
  const [status, setStatus] = React.useState({});
  const route = useRoute();
  const goBack = useGoBackHook();

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <ArrowIcon />
        </TouchableOpacity>
        {/* <Text style={styles.title}>Транзакции</Text> */}
      </View>
      <View style={{flex: 1}}>
        <Video
          style={{
            width: Dimensions.get('window').width,
            height: 300,
          }}
          source={{
            uri: route.params?.url || '',
          }}
          showOnStart={false}
          disableBack
        />
      </View>
      {/* <Text style={styles.content}>{route.params.content}</Text> */}
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
