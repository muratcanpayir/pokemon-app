import Image from "next/image";
import React from "react";

function index({ pokemon, index }: { pokemon: any; index: number }) {
  // const handleClick((url)=>{
  //     window.open(url)
  // })
  const pokeIndex = ("000" + index + 1).slice(-3);
  console.log("pokeIndex", pokeIndex);
  console.log(pokemon);
  return (
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
  );
}

export default index;
