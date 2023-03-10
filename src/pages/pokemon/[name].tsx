import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import {
  IContext,
  IInitialPokemon,
  IStat,
  ITypes,
  PokemonSize,
} from "../../model";
import { handlePokeId } from "../../utils/helper";
import { pokemonApi } from "../../services/pokemon";

function Pokemon({ initialPokemon }: { initialPokemon: IInitialPokemon }) {
  const router = useRouter();
  const pokeIndex = handlePokeId(initialPokemon);

  const renderTypes = () =>
    initialPokemon.types.map((type: ITypes) => (
      <li className="bg-slate-600 rounded m-1 p-1 " key={type.slot}>
        {type.type.name}
      </li>
    ));

  const renderStats = () =>
    initialPokemon.stats.map((stat: IStat, index: number) => (
      <div className="bg-slate-600 rounded m-1 p-1" key={index}>
        {stat?.stat.name}: {stat.base_stat}
      </div>
    ));

  return (
    <>
      <title>{initialPokemon.name}</title>
      <header className="bg-slate-900 py-3">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <h1 className="text-4xl text-center text-amber-400">POKEDEX</h1>
        </div>
      </header>

      <div className="flex flex-col justify-start items-center bg-amber-400 h-screen">
        <span className="text-3xl text-center text-slate-900 mt-5 font-bold">
          #{pokeIndex} {initialPokemon.name}
        </span>
        <Image
          className="mt-10"
          alt={initialPokemon.name}
          width={PokemonSize.detail}
          height={PokemonSize.detail}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
        />
        <div className="text-slate-900 mt-10">
          Types:
          <ul className="bg-slate-900 text-slate-200 rounded p-3 flex flex-row">
            {renderTypes()}
          </ul>
          Abilities:
          <div className="bg-slate-900 text-slate-200 rounded p-3">
            {renderStats()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokemon;

export async function getServerSideProps(context: IContext) {
  console.log("context", context);
  const response = await fetch(`${pokemonApi}${context.query.name}`);
  const initialPokemon = await response.json();

  return {
    props: { initialPokemon },
  };
}
