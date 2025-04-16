import { Pokemon } from "../../types";
import "./PokemonsList.css";

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <ul className="pokemons-list">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}></li>
      ))}
    </ul>
  );
};

export default PokemonList;
