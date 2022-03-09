export type PokemonsType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonResultType>;
};

export type PokemonResultType = {
  name: string;
  url: string;
};

export type PokemonItemType = {
  id: string;
  color?: string;
  picture: string;
  name: string;
};

export type UsePokemonsStateType = {
  data: PokemonItemType[];
  isLoading: boolean;
};
