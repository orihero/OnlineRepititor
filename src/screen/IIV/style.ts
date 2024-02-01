import {StyleSheet} from 'react-native';

export const iivStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
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
  courseHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  crdTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    color: 'black',
    marginBottom: 4,
  },
  crsCrd: {
    padding: 20,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
