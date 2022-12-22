import { useEffect, useState } from "react";
import Pokemon from './Pokemon'
 
export default function Home() {
  const [pokemons, setPokemons] = useState<any>();
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => setPokemons(res));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 p-5 bg-slate-800">
      {pokemons?.results.map((pokemon: any,index:number) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} index={index}/>
      ))}
    </div>
  );
}
