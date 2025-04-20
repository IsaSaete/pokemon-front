import { Pokemon, PokemonFormData } from "../types";

export interface PokemonsContextStructure {
  pokemons: Pokemon[];
  loadPokemons: () => Promise<void>;
  createNewPokemon: (pokemonData: PokemonFormData) => Promise<Pokemon>;
}
