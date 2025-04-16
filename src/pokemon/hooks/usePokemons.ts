import { useContext } from "react";
import PokemonsContext from "../context/PokemonsContext";

const usePokemons = () => {
  const context = useContext(PokemonsContext);

  if (!context) {
    throw new Error("Missing provider for PokemonsContext ");
  }

  return context;
};

export default usePokemons;
