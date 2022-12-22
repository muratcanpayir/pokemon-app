import Image from "next/image";
import React from "react";

function index({ pokemon, index }:{pokemon:any,index:number}) {
  // const handleClick((url)=>{
  //     window.open(url)
  // })
  const pokeIndex = ("000" + index + 1).slice(-3);
  console.log(pokemon);
  return (
    <div className="bg-slate-900 rounded p-5">
      <Image
        alt={pokemon.name}
        width={150}
        height={150}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
      />
      {pokemon.name}
    </div>
  );
}

export default index;
