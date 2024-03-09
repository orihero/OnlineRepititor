import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalButton: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bullet: {
    width: 12,
    height: 12,
    borderRadius: 20,
    backgroundColor: 'black',
    margin: 8,
  },
  modalText: {
    color: 'black',
    fontSize: 14,
    marginVertical: 5,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
  modalContainer: {
    padding: 15,
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  header: {
    width: '100%',
    backgroundColor: '#0600ac',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    paddingTop: 28,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  notiText: {
    position: 'absolute',
    right: -3,
    width: 19,
    height: 19,
    backgroundColor: '#F4B840',
    textAlign: 'center',
    borderRadius: 100,
    top: -8,
  },

  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFFFFF',
  },
});
