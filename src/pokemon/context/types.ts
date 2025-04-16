import { Pokemon } from "../types";

export interface PokemonsContextStructure {
  pokemons: Pokemon[];
  loadPokemons: () => Promise<void>;
}
