import { IInitialPokemon } from "../model";

export const handlePokeId = (initialPokemon: IInitialPokemon) => {
  const ind = "" + initialPokemon.id;
  const pad = "000";
  const pokeIndex = pad.substring(0, pad.length - ind.length) + ind;
  return pokeIndex;
};

export const handlePokeIndex = (index: number) => {
  const ind = "" + (index + 1);
  const pad = "000";
  const pokeIndex = pad.substring(0, pad.length - ind.length) + ind;
  return pokeIndex;
};
