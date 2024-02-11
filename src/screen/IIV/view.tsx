import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ArrowIcon} from '../../assets/icons/icon';
import {useGoBackHook} from '../../common/hooks';
import {useIIVHook} from './hooks';
import {iivStyles} from './style';

const IIVScreen = () => {
  const goBack = useGoBackHook();
  const {courses, onCoursePress, onBuyPress} = useIIVHook();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={iivStyles.container}
      contentContainerStyle={{paddingBottom: 30}}>
      <View style={iivStyles.header}>
        <TouchableOpacity onPress={goBack}>
          <ArrowIcon />
        </TouchableOpacity>
        <View style={iivStyles.courseHead}>
          <View>
            <Text style={iivStyles.title}>IIV litseyiga tayyorlov</Text>
            <Text style={{marginVertical: 10}}>Kurs narxi: 1 500 000 UZS</Text>
          </View>
        </View>
      </View>
      {courses.map((e, i) => {
        return (
          <TouchableOpacity onPress={() => onCoursePress(e)} key={e.name}>
            <View style={iivStyles.crsCrd}>
              <View>
                <Text style={iivStyles.crdTitle}>{e.name}</Text>
                <Text>{e.author}</Text>
              </View>
              <Image
                style={{width: 80, height: 80, borderRadius: 80}}
                source={{uri: e.cover}}
              />
            </View>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity>
        <View style={iivStyles.crsCrd}>
          <View>
            <Text style={iivStyles.crdTitle}>Psixologik test</Text>
            <Text>Abduhakimov Otabek</Text>
          </View>
          <Image
            style={{width: 80, height: 80, borderRadius: 80}}
            source={{uri: 'https://www.mooc.org/hubfs/what-is-psych-jpg.jpeg'}}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={iivStyles.crsCrd}>
          <View style={{flexWrap: 'wrap'}}>
            <Text style={iivStyles.crdTitle} numberOfLines={1}>
              Jismoniy tayyorgarlik
            </Text>
            <Text>Abduhakimov Otabek</Text>
          </View>
          <Image
            style={{width: 80, height: 80, borderRadius: 80}}
            source={{
              uri: 'https://i.pinimg.com/474x/3f/3d/b8/3f3db8e4c64d1ee9e69c7fec91c45556.jpg',
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={iivStyles.crsCrd}>
          <View>
            <Text style={iivStyles.crdTitle}>Diktant</Text>
            <Text>Abduhakimov Otabek</Text>
          </View>
          <Image
            style={{width: 80, height: 80, borderRadius: 80}}
            source={{
              uri: 'https://m.media-amazon.com/images/I/616np2nOCtL._AC_UF1000,1000_QL80_.jpg',
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={iivStyles.crsCrd}>
          <View>
            <Text style={iivStyles.crdTitle}>Suhbatga tayyorlov</Text>
            <Text>Abduhakimov Otabek</Text>
          </View>
          <Image
            style={{width: 80, height: 80, borderRadius: 80}}
            source={{
              uri: 'https://static.norma.uz/images/175431_80a8113628997712b9637a067a52.jpg',
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onBuyPress} style={iivStyles.button}>
        <Text style={iivStyles.buttonText}>Sotib olish (1 500 000 UZS)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default IIVScreen;
