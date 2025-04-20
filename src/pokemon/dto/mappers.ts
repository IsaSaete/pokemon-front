import { Pokemon } from "../types";
import { PokemonDto } from "./types";

export const mapPokemonsDtoToPokemons = (
  pokemonsDto: PokemonDto[],
): Pokemon[] => {
  const pokemons = pokemonsDto.map<Pokemon>(({ name, ...pokemonDto }) => ({
    ...pokemonDto,
    name,
    imageAlt: `Pokemon ${name}`,
    types: [],
  }));

  return pokemons;
};

export const mapPokemonDtoToPokemon = (
  pokemonDto: PokemonDto,
  types: string[],
): Pokemon => {
  const pokemon: Pokemon = {
    ...pokemonDto,
    types,
    imageAlt: `Pokemon ${pokemonDto.name}`,
  };

  return pokemon;
};
