import React, {useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import SearchInput from '../../components/SearchInput';
import useDebounce from '../../hooks/useDebounce';
import usePokemosSearch from '../../hooks/usePokemosSearch';
import List from '../Home/List';

import {styles} from './styles';

const {width} = Dimensions.get('window');

const Search = () => {
  const {pokemons} = usePokemosSearch();
  const {top} = useSafeAreaInsets();
  const [search, setSearch] = useState('');

  const searchDebounced = useDebounce(search, 500);

  const filteredPokemons = useMemo(() => {
    if (isNaN(Number(searchDebounced))) {
      return pokemons.data.filter(({name}) =>
        name.toLowerCase().includes(searchDebounced.toLowerCase()),
      );
    }

    const pokemon = pokemons.data.find(({id}) => id == searchDebounced);

    return pokemon ? [pokemon] : [];
  }, [searchDebounced, pokemons.data]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        style={StyleSheet.flatten([styles.searchInput, {width: width - 40}])}
        value={search}
        onChange={setSearch}
      />

      {pokemons.isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={20} color="black" />
        </View>
      ) : (
        <List
          data={filteredPokemons}
          headerText={search}
          headerStyle={StyleSheet.flatten([
            styles.headerList,
            {marginTop: top + 20},
          ])}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
