import { Pokemon } from "../types";
import { PokemonClientStructure, PokemonTypes } from "./types";
import { PokemonDto } from "../dto/types";
import { mapPokemonsDtoToPokemons } from "../dto/mappers";

class PokemonClient implements PokemonClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPokemons = async (): Promise<Pokemon[]> => {
    const backResponse = await fetch(`${this.apiUrl}/pokemon`);

    const { pokemons } = (await backResponse.json()) as {
      pokemons: PokemonDto[];
    };

    const pokemonsWithoutTypes = mapPokemonsDtoToPokemons(pokemons);

    const apiPokemons = await Promise.all(
      pokemonsWithoutTypes.map(async (pokemon) => {
        const pokemonNameLowerCase = pokemon.name.toLocaleLowerCase();

        const pokeApiResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonNameLowerCase}`,
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
