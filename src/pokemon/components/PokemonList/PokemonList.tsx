import usePokemons from "../../hooks/usePokemons";
import "./PokemonsList.css";

const PokemonList: React.FC = () => {
  const { pokemons } = usePokemons();

  return (
    <ul className="pokemons-list">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}></li>
      ))}
    </ul>
  );
};

export default PokemonList;
