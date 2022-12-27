import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IContext, IInitialPokemon, ITypes } from "../../model";

function Pokemon({ initialPokemon }: { initialPokemon: IInitialPokemon }) {
  const ind = "" + (initialPokemon.id + 1);
  const pad = "000";
  const pokeIndex = pad.substring(0, pad.length - ind.length) + ind;

  const renderTypes: any = () =>
    initialPokemon.types.map((type: ITypes) => (
      //   console.log("types", type);
      <li key={type.slot} className="px-2 py-1 bg-slate-100">
        {type.type.name}
      </li>
    ));

  console.log("initialpoke", initialPokemon);
  return (
    <div className="flex flex-col justify-center items-center bg-slate-800">
      <span className="absolute text-[400px] font-bold text-slate-500">
        #{pokeIndex}
      </span>

      <Image
        alt={initialPokemon.name}
        width={400}
        height={400}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
      />
      <span className="text-3xl font-bold text-slate-200">
        {initialPokemon.name}
      </span>
      <div className="bg-slate-900 rounded p-5">
        <ul className="flex gap-5">{renderTypes()}</ul>
      </div>
    </div>
  );
}

export default Pokemon;

export async function getServerSideProps(context: IContext) {
  console.log("context", context);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.name}`
  );
  const initialPokemon = await response.json();

  return {
    props: { initialPokemon },
  };
}
