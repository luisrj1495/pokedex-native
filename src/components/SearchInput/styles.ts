import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
  textBackground: {
    backgroundColor: '#f3f1f3',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
