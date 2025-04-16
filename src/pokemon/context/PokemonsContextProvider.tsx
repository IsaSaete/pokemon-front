import { PropsWithChildren, useState } from "react";
import PokemonsContext from "./PokemonsContext";
import { PokemonsContextStructure } from "./types";
import { Pokemon } from "../types";

const PokemonContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pokemons] = useState<Pokemon[]>([]);

  const pokemonsContexValue: PokemonsContextStructure = {
    pokemons,
  };

  return (
    <PokemonsContext.Provider value={pokemonsContexValue}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonContextProvider;
