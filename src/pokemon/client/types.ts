import { Pokemon } from "../types";

export interface PokemonClientStructure {
  getPokemons: () => Promise<Pokemon[]>;
}

export interface PokemonTypes {
  types: {
    type: {
      name: string;
    };
  }[];
}
