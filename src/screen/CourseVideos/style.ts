import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  courseDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overlayText: {
    color: '#0600ac',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,.9)',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  courseContainer: {
    paddingHorizontal: 20,
  },

  header: {
    // marginTop: 36,
    // flexDirection: 'row',
    // alignItems: 'center',
    marginLeft: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 30,
    color: '#343936',
    // paddingLeft: 26,
    marginVertical: 20,
  },

  rating: {
    width: 54,
    height: 54,
    borderRadius: 10,
    backgroundColor: '#0600ac',
    paddingHorizontal: 15,
    paddingVertical: 17,
  },

  courseHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  course: {
    paddingTop: 5,
    fontSize: 18,
    lineHeight: 20,
    color: '#9A9A9A',
  },

  ratingList: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  arrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  arrowText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    color: '#9A9A9A',
  },

  cards: {
    marginTop: 14,
  },

  card: {
    width: '90%',
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignSelf: 'center',
    // paddingVertical: 8,
    alignItems: 'center',
    paddingLeft: 10,
  },

  coursAbout: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
    flex: 1,
  },

  titleCard: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 16,
    color: '#343936',
  },

  priceLesson: {
    paddingTop: 32,
  },

  price: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  coursPrice: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 16,
    color: '#0600ac',
  },

  coursPeople: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  popular: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  star: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 6,
  },

  oldPrice: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    color: '#C8C8C8',
    textDecorationLine: 'line-through',
  },

  popText: {
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 20,
    textAlign: 'center',
    color: '#C8C8C8',
  },

  startText: {
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 20,
    textAlign: 'center',
    color: '#0600ac',
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
