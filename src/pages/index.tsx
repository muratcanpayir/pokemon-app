import { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";

export default function Home() {
  const [pokemons, setPokemons] = useState<any>();
  const [offSet, setOffset] = useState<number>(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => setPokemons(res));
  }, []);

  const handlePagination = (url: any, isNext: boolean) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setOffset(isNext ? offSet + 20 : offSet - 20);
        setPokemons(res);
      });
  };
  return (
    <>
      <title>Pokedex</title>
      <header className="bg-slate-800 py-3">
        <h1 className="text-4xl text-center text-slate-400">POKEDEX</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 p-5 bg-slate-600">
        {pokemons?.results.map((pokemon: any, index: number) => (
          <Pokemon
            key={pokemon.name}
            pokemon={pokemon}
            index={index + offSet}
          />
        ))}
      </div>
      <div className="bg-slate-800 text-center">
        <button
          className="px-3 py-1 bg-slate-900 text-slate-400"
          onClick={() => handlePagination(pokemons.previous, false)}
        >
          prev
        </button>
        <button
          className="px-3 py-1 bg-slate-900 text-slate-400"
          onClick={() => handlePagination(pokemons.next, true)}
        >
          next
        </button>
      </div>
    </>
  );
}
