export interface IPokemons {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: IPokemon[];
}

export interface IPokemon {
  name: string;
  url: string;
}

export interface IInitialPokemon {
  id: number;
  types: ITypes[];
  name: string;
}

export interface ITypes {
  slot: number;
  type: { name: string; url: string };
}

export interface IContext {
  query: { name: string };
}
