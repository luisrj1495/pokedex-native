import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';

//Types
import {PokemonItemType} from '../hooks/usePokemos/types';

export type StackParamsType = {
  Home: undefined;
  Pokemon: {pokemon: Required<PokemonItemType>};
};

const Stack = createStackNavigator<StackParamsType>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
