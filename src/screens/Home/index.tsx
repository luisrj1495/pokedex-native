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

const Home = () => {
  const {pokemons, getMore} = usePokemons();
  return (
    <SafeAreaView>
      <Image
        source={require('../../assets/pokebola.png')}
        style={styles.pokeBall}
      />

      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <Text style={StyleSheet.flatten([globalStyles.title])}>Pokedex</Text>
        }
        style={{marginHorizontal: 10}}
        data={pokemons.data}
        renderItem={props => <Item pokemon={props.item} />}
        keyExtractor={pokemon => pokemon.id}
        onEndReached={getMore}
        onEndReachedThreshold={0.4}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="gray" />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
