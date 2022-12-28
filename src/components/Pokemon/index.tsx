import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPokemon } from "../../model";
import { handlePokeIndex } from "../../utils/helper";

function index({ pokemon, index }: { pokemon: IPokemon; index: number }) {
  const pokeIndex = handlePokeIndex(index);

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className="bg-amber-400 rounded p-5 flex items-center flex flex-col relative">
        <Image
          alt={pokemon.name}
          width={150}
          height={150}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
        />
        <p className="absolute top-1 right-2 text-2xl text-sky-900">
          #{pokeIndex}
        </p>
        <p className="text-sky-900">{pokemon.name}</p>
      </div>
    </Link>
  );
}

export default index;
