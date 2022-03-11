import {useEffect, useState} from 'react';

import {api} from '../../api/api';

// Types
import {PokemonsType, UsePokemonsStateType} from './types';

const usePokemosSearch = () => {
  const [pokemons, setPokemons] = useState<UsePokemonsStateType>({
    data: [],
    isLoading: true,
  });

  const [] = useState();

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
    const {data} = await api.get<PokemonsType>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200',
    );

    const pokemonsToSave = transformPokemons(data.results);
    setPokemons({data: pokemonsToSave, isLoading: false});
  };

  useEffect(() => {
    load();
  }, []);

  return {pokemons};
};

export default usePokemosSearch;
