import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import FadeInImage from '../../components/FadeInImage';

import {styles} from './styles';

// Styles
import {StackParamsType} from '../../navigator/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import usePokemon from '../../hooks/usePokemon';
import Details from './Details';

const Pokemon: React.VFC<StackScreenProps<StackParamsType, 'Pokemon'>> = ({
  route: {
    params: {pokemon},
  },
  navigation,
}) => {
  const {top} = useSafeAreaInsets();
  const {fullPokemon, isLoading} = usePokemon({pokemonId: pokemon.id});

  return (
    <View style={{flex: 1}}>
      <View
        style={StyleSheet.flatten([
          styles.header,
          {backgroundColor: pokemon.color},
        ])}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          style={StyleSheet.flatten([styles.backBtn, {top: top + 5}])}>
          <Icon name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={StyleSheet.flatten([styles.name, {top: top + 40}])}>
          {pokemon.name + '\n'} #{pokemon.id}
        </Text>
        <Text style={styles.name}></Text>
        <Image
          style={styles.pokeballImg}
          source={require('../../assets/pokebola-blanca.png')}
        />
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImg} />
      </View>

      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={30} color={pokemon.color} />
        </View>
      ) : (
        <Details fullPokemon={fullPokemon} />
      )}
    </View>
  );
};

export default Pokemon;
