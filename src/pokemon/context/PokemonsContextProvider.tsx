import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import PokemonsContext from "./PokemonsContext";
import { PokemonsContextStructure } from "./types";
import { Pokemon } from "../types";
import PokemonClient from "../client/PokemonClient";

const PokemonContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const pokemonClient = useMemo(() => new PokemonClient(), []);

  const loadPokemons = useCallback(async (): Promise<void> => {
    const apiPokemons = await pokemonClient.getPokemons();

    setPokemons(apiPokemons);
  }, [pokemonClient]);

  const pokemonsContexValue: PokemonsContextStructure = {
    pokemons,
    loadPokemons,
  };

  return (
    <PokemonsContext.Provider value={pokemonsContexValue}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonContextProvider;
