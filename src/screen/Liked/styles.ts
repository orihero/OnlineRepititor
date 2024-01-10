import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  likedContainer: {
    paddingHorizontal: 20,
    paddingVertical: 23,
  },
  head: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 30,
    color: '#343936',
  },

  cards: {
    marginTop: 14,
  },

  card: {
    width: '100%',
    marginTop: 8,
    height: 91,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  coursAbout: {
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
  },

  title: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 16,
    color: '#343936',
    marginTop: 10,
  },

  priceLesson: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  price: {
    // flexDirection: "row",
    // alignItems: "center",
    gap: 6,
  },

  coursPrice: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 16,
    color: '#0600ac',
  },

  coursPeople: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'space-between',
  },

  popular: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  star: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
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
});
