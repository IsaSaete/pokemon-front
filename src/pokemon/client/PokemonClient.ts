import { Pokemon } from "../types";
import { PokemonClientStructure, PokemonTypes } from "./types";
import { PokemonDto } from "../dto/types";
import { mapPokemonsDtotoPokemons } from "../dto/mappers";

class PokemonClient implements PokemonClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPokemons = async (): Promise<Pokemon[]> => {
    const backResponse = await fetch(`${this.apiUrl}/pokemon`);

    const { pokemons } = (await backResponse.json()) as {
      pokemons: PokemonDto[];
    };

    const pokemonsWithoutTypes = mapPokemonsDtotoPokemons(pokemons);

    const apiPokemons = await Promise.all(
      pokemonsWithoutTypes.map(async (pokemon) => {
        const pokeApiResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        );

        const pokeApiData = (await pokeApiResponse.json()) as PokemonTypes;

        const pokemonTypes = pokeApiData.types.map(
          (pokemonType) => pokemonType.type.name,
        );

        return { ...pokemon, types: pokemonTypes };
      }),
    );

    return apiPokemons;
  };
}
export default PokemonClient;
