import { Pokemon } from "../types";
import { PokemonDto } from "./types";

export const mapPokemonsDtotoPokemons = (
  pokemonsDto: PokemonDto[],
): Pokemon[] => {
  const pokemons = pokemonsDto.map<Pokemon>(({ name, ...pokemonDto }) => ({
    ...pokemonDto,
    name,
    imageAlt: `Pokemon ${name}`,
  }));

  return pokemons;
};
