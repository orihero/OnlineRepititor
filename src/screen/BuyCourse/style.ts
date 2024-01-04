import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    marginTop: 36,
    // flexDirection: 'row',
    // alignItems: 'center',
    marginLeft: 20,
  },

  dot: {
    borderRadius: 200,
    borderWidth: 2,
    borderColor: 'gray',
    padding: 8,
    height: 16,
    alignSelf: 'center',
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
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
  },

  coursAbout: {
    paddingHorizontal: 15,
    flex: 1,
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
    color: '#29CB73',
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
    color: '#29CB73',
  },
  infoCard: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    marginVertical: 13,
    height: 51,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: '#29CB73',
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
