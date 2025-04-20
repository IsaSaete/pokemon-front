import { Pokemon, PokemonFormData } from "../types";
import { PokemonClientStructure, PokemonTypes } from "./types";
import { PokemonDto } from "../dto/types";
import {
  mapPokemonDtoToPokemon,
  mapPokemonsDtoToPokemons,
} from "../dto/mappers";

class PokemonClient implements PokemonClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  private getPokemonWithTypes = async (
    pokemonDto: PokemonDto,
  ): Promise<Pokemon> => {
    const pokemonNameLowerCase = pokemonDto.name.toLocaleLowerCase();

    const pokeApiResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNameLowerCase}`,
    );

    const pokeApiData = (await pokeApiResponse.json()) as PokemonTypes;

    const pokemonTypes = pokeApiData.types.map(
      (pokemonType) => pokemonType.type.name,
    );

    const pokemon = mapPokemonDtoToPokemon(pokemonDto, pokemonTypes);

    return pokemon;
  };

  public getBackPokemons = async (): Promise<Pokemon[]> => {
    const backResponse = await fetch(`${this.apiUrl}/pokemon`);

    const { pokemons } = (await backResponse.json()) as {
      pokemons: PokemonDto[];
    };

    const pokemonsWithoutTypes = mapPokemonsDtoToPokemons(pokemons);

    const apiPokemons = await Promise.all(
      pokemonsWithoutTypes.map(async (pokemonDto) => {
        const pokemon = this.getPokemonWithTypes(pokemonDto);

        return pokemon;
      }),
    );

    return apiPokemons;
  };

  public addPokemon = async (pokemon: PokemonFormData): Promise<Pokemon> => {
    const backResponse = await fetch(`${this.apiUrl}/pokemon`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon),
    });

    const pokemonDto = (await backResponse.json()) as PokemonDto;

    const newPokemon = this.getPokemonWithTypes(pokemonDto);

    return newPokemon;
  };
}

export default PokemonClient;
