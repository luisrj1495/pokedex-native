import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    position: 'absolute',
    height: 100,
    top: 40,
    zIndex: 999,
  },
  headerList: {
    textAlign: 'left',
    marginHorizontal: 10,
  },
});
