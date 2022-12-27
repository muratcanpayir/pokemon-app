import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPokemon } from "../../model";

function index({ pokemon, index }: { pokemon: IPokemon; index: number }) {
  const ind = "" + (index + 1);
  const pad = "000";
  const pokeIndex = pad.substring(0, pad.length - ind.length) + ind;

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className="bg-red-900 rounded p-5 flex items-center flex flex-col relative">
        <Image
          alt={pokemon.name}
          width={150}
          height={150}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
        />
        <p className="absolute top-1 right-2 text-2xl text-slate-400">
          #{pokeIndex}
        </p>
        <p className="text-slate-50">{pokemon.name}</p>
      </div>
    </Link>
  );
}

export default index;
