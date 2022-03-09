import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

import {detailsStyle} from './styles';

import {FullPokemonType} from '../../hooks/usePokemon/types';
import FadeInImage from '../../components/FadeInImage';

const Details: React.VFC<{
  fullPokemon: FullPokemonType;
}> = ({fullPokemon}) => {
  return (
    <ScrollView
      style={StyleSheet.flatten([StyleSheet.absoluteFillObject])}
      showsVerticalScrollIndicator={false}>
      <View style={detailsStyle.container}>
        <Text style={detailsStyle.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {fullPokemon.types.map(({type}) => (
            <Text
              style={StyleSheet.flatten([
                detailsStyle.regularText,
                {marginRight: 10},
              ])}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <View>
          <Text style={detailsStyle.title}>Weight</Text>
          <Text style={StyleSheet.flatten([detailsStyle.regularText])}>
            {fullPokemon.weight} kg
          </Text>
        </View>
        <View>
          <Text style={detailsStyle.title}>Sprites</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FadeInImage
              style={detailsStyle.basicSprite}
              uri={fullPokemon.sprites.front_default}
            />

            <FadeInImage
              style={detailsStyle.basicSprite}
              uri={fullPokemon.sprites.back_default}
            />

            <FadeInImage
              style={detailsStyle.basicSprite}
              uri={fullPokemon.sprites.front_shiny}
            />

            <FadeInImage
              style={detailsStyle.basicSprite}
              uri={fullPokemon.sprites.back_shiny}
            />
          </ScrollView>
        </View>

        <View>
          <Text style={detailsStyle.title}>Skills</Text>
          <View style={{flexDirection: 'row'}}>
            {fullPokemon.abilities.map(({ability}) => (
              <Text
                style={StyleSheet.flatten([
                  detailsStyle.regularText,
                  {marginRight: 10},
                ])}
                key={ability.name}>
                {ability.name}
              </Text>
            ))}
          </View>
        </View>

        <View>
          <Text style={detailsStyle.title}>Stats</Text>
          <View>
            {fullPokemon.stats.map(({stat, base_stat}) => (
              <View key={stat.name} style={{flexDirection: 'row'}}>
                <Text
                  style={StyleSheet.flatten([
                    detailsStyle.regularText,
                    {marginRight: 10, width: 150},
                  ])}>
                  {stat.name}
                </Text>
                <Text
                  style={StyleSheet.flatten([
                    detailsStyle.regularText,
                    {fontWeight: 'bold'},
                  ])}>
                  {base_stat}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View
          style={{
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FadeInImage
            style={detailsStyle.basicSprite}
            uri={fullPokemon.sprites.front_default}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
