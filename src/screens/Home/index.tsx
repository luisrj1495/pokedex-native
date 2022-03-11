import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Item from './Item';

import {styles} from './styles';
import {globalStyles} from '../../theme/app';
import usePokemons from '../../hooks/usePokemos';
import List from './List';

const Home = () => {
  const {pokemons, getMore} = usePokemons();
  return (
    <SafeAreaView>
      <Image
        source={require('../../assets/pokebola.png')}
        style={styles.pokeBall}
      />

      <List
        headerText="Pokedex"
        data={pokemons.data}
        onEndReached={getMore}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="gray" />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
