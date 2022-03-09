import {useState, useEffect, useRef} from 'react';

import {api} from '../../api/api';

// Types
import {FullPokemonType, UsePokemonPropsType} from './types';

const usePokemon = ({pokemonId}: UsePokemonPropsType) => {
  const isMounted = useRef(true);
  const [fullPokemon, setFullPokemon] = useState<FullPokemonType>(
    {} as FullPokemonType,
  );
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonInfo = async () => {
    const {data} = await api.get<FullPokemonType>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    );
    if (!isMounted.current) return;
    setFullPokemon(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonInfo();

    return () => {
      isMounted.current = false;
    };
  }),
    [];

  return {isLoading, fullPokemon};
};

export default usePokemon;
