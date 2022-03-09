import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backBtn: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeballImg: {
    height: 250,
    width: 250,
    opacity: 0.7,
    bottom: -10,
  },
  pokemonImg: {
    position: 'absolute',
    bottom: -20,
    height: 250,
    width: 250,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const detailsStyle = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 380,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  regularText: {
    fontSize: 17,
    textTransform: 'capitalize',
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
