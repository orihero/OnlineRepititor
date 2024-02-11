import {Dimensions, StyleSheet} from 'react-native';

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
    flexShrink: 1,
    width: Dimensions.get('window').width - 20,
  },
  button: {
    marginVertical: 13,
    height: 51,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: '#0600ac',
    shadowColor: 'rgba(41, 203, 115, 0.29)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 17,
    shadowOpacity: 1,
    marginHorizontal: 20,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
