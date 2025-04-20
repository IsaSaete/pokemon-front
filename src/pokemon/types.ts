export interface Pokemon {
  id: string;
  name: string;
  pokedexPosition: number;
  imageUrl: string;
  isCaptured: boolean;
  imageAlt: string;
  types: string[];
}

export type PokemonFormData = Omit<
  Pokemon,
  "id" | "types" | "isCaptured" | "imageAlt"
>;
