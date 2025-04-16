import { Pokemon } from "../types";
import { PokemonClientStructure } from "./types";
import { PokemonDto } from "../dto/types";
import { mapPokemonsDtotoPokemons } from "../dto/mappers";

class PokemonClient implements PokemonClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch(`${this.apiUrl}/pokemon`);

    const { pokemons } = (await response.json()) as { pokemons: PokemonDto[] };

    return mapPokemonsDtotoPokemons(pokemons);
  };
}

export default PokemonClient;
