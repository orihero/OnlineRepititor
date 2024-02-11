import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
import {ArrowIcon} from '../../assets/icons/icon';
import {useGoBackHook} from '../../common/hooks';
import {useRoute} from '@react-navigation/native';

const PdfScreen = () => {
  const goBack = useGoBackHook();
  const {url} = useRoute().params || {url: ''};
  console.log('====================================');
  console.log({url});
  console.log('====================================');
  return (
    <View style={styles.flex}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <ArrowIcon />
        </TouchableOpacity>
      </View>
      <Pdf
        source={{
          uri: url,
          cache: true,
        }}
        style={styles.pdf}
        trustAllCerts={false}
      />
    </View>
  );
};

export default PdfScreen;

const styles = StyleSheet.create({
  flex: {flex: 1, paddingHorizontal: 20},
  header: {
    marginTop: 36,
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 30,
    color: '#343936',
    paddingTop: 26,
  },
  pdf: {
    width: Dimensions.get('window').width-40,
    height: Dimensions.get('window').height,
    flex: 1,
  },
});
