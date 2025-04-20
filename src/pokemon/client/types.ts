import { Pokemon } from "../types";
import { PokemonFormData } from "../types";

export interface PokemonClientStructure {
  getBackPokemons: () => Promise<Pokemon[]>;
  addPokemon: (pokemon: PokemonFormData) => Promise<Pokemon>;
}

export interface PokemonTypes {
  types: {
    type: {
      name: string;
    };
  }[];
}
