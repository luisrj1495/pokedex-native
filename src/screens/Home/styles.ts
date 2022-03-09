import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pokeBall: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -100,
    right: -100,
    opacity: 0.2,
  },
  itemLayout: {
    padding: 10,
    flex: 1,
  },
  itemContainer: {
    padding: 20,
    flex: 1,
    height: 120,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  itemPicture: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -10,
    bottom: -10,
  },
  itemName: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  imagePokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.5,
  },
  imagePokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
});
