import {useEffect, useRef, useState} from 'react';

import {api} from '../../api/api';

// Types
import {PokemonsType, UsePokemonsStateType} from './types';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<UsePokemonsStateType>({
    data: [],
    isLoading: true,
  });
  const nextPageUrl = useRef<string | null>(
    'https://pokeapi.co/api/v2/pokemon?limit=40',
  );

  const transformPokemons = (
    data: PokemonsType['results'],
  ): UsePokemonsStateType['data'] =>
    data.map(record => {
      const urlArray = record.url.split('/');
      const id = urlArray[urlArray.length - 2];



      return {
        name: record.name,
        id,
        picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      };
    });

  const load = async () => {
    if (!nextPageUrl.current) return;

    setPokemons(prev => ({...prev, isLoading: true}));

    const {data} = await api.get<PokemonsType>(nextPageUrl.current);

    nextPageUrl.current = data.next;
    const pokemonsToSave = transformPokemons(data.results);
    setPokemons(prev => ({
      data: prev.data.concat(pokemonsToSave),
      isLoading: false,
    }));
  };

  useEffect(() => {
    load();
  }, []);

  return {pokemons, getMore: load};
};

export default usePokemons;
