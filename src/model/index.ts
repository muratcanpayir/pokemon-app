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
  stats: any;
}

export interface ITypes {
  slot: number;
  type: { name: string; url: string };
}

export interface IContext {
  query: { name: string };
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

export enum OffSet {
  defaultOffSet = 0,
  pageOffSet = 20,
}

export enum PokemonSize {
  homePage = 150,
  detail = 200,
}
