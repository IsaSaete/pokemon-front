import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import PokemonsContext from "./PokemonsContext";
import { PokemonsContextStructure } from "./types";
import { Pokemon, PokemonFormData } from "../types";
import PokemonClient from "../client/PokemonClient";

const PokemonContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const pokemonClient = useMemo(() => new PokemonClient(), []);

  const loadPokemons = useCallback(async (): Promise<void> => {
    const apiPokemons = await pokemonClient.getBackPokemons();

    setPokemons(apiPokemons);
  }, [pokemonClient]);

  const createNewPokemon = async (
    pokemonData: PokemonFormData,
  ): Promise<Pokemon> => {
    const newPokemon = await pokemonClient.addPokemon(pokemonData);

    setPokemons((pokemons) => [...pokemons, newPokemon]);

    return newPokemon;
  };

  const pokemonsContexValue: PokemonsContextStructure = {
    pokemons,
    loadPokemons,
    createNewPokemon,
  };

  return (
    <PokemonsContext.Provider value={pokemonsContexValue}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonContextProvider;
