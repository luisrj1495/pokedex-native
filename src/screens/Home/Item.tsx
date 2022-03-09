import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import FadeInImage from '../../components/FadeInImage';

import {PokemonItemType} from '../../hooks/usePokemos/types';

const Item: React.VFC<{
  pokemon: PokemonItemType;
}> = ({pokemon}) => {
  const [backgroundColor, setBackgroundColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation();

  const getBackgroundColor = async () => {
    try {
      const result = await ImageColors.getColors(pokemon.picture, {
        fallback: 'grey',
        cache: true,
      });

      if (!isMounted.current) return;

      if (result.platform === 'ios') {
        setBackgroundColor(result.background);
        return;
      }

      if (result.platform === 'android') {
        setBackgroundColor(result.dominant || 'grey');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBackgroundColor();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      style={styles.itemLayout}
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate('Pokemon', {
          pokemon: {...pokemon, color: backgroundColor},
        });
      }}>
      <View
        style={StyleSheet.flatten([styles.itemContainer, {backgroundColor}])}>
        <Text style={styles.itemName}>{pokemon.name}</Text>
        <Text style={styles.itemName}>#{pokemon.id}</Text>
        <View style={styles.imagePokeballContainer}>
          <Image
            style={styles.imagePokeball}
            source={require('../../assets/pokebola-blanca.png')}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.itemPicture} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
