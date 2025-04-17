import usePokemons from "../../hooks/usePokemons";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonsList.css";

const PokemonList: React.FC = () => {
  const { pokemons } = usePokemons();

  return (
    <ul className="pokemons-list">
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
